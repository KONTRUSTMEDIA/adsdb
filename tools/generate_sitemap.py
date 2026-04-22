#!/usr/bin/env python3
"""
AdsDB Sitemap Generator
========================
Generates XML sitemaps for adsdb.ktmrtb.com.

Outputs:
  docs/sitemap_index.xml          – index pointing to all sub-sitemaps
  docs/sitemap-main.xml           – static/hub pages
  docs/sitemap-domains-{x}.xml   – per-letter/digit domain pages (a-z, 0-9)

Usage:
    python3 generate_sitemap.py
"""

import os
import sys
from datetime import datetime, timezone
from pathlib import Path

# ---------------------------------------------------------------------------
# Paths & constants
# ---------------------------------------------------------------------------

SCRIPT_DIR = Path(__file__).resolve().parent
ADSDB_ROOT = SCRIPT_DIR.parent
DB_DIR = ADSDB_ROOT / "db"
DOCS_DIR = ADSDB_ROOT / "docs"

BASE_URL = "https://adsdb.ktmrtb.com"

# Valid letter buckets (must match db/ subdirectory names)
LETTERS = list("0123456789") + list("abcdefghijklmnopqrstuvwxyz")

# ---------------------------------------------------------------------------
# XML helpers
# ---------------------------------------------------------------------------

XML_DECLARATION = '<?xml version="1.0" encoding="UTF-8"?>'

URLSET_OPEN = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
URLSET_CLOSE = "</urlset>"

SITEMAPINDEX_OPEN = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
SITEMAPINDEX_CLOSE = "</sitemapindex>"


def _url(
    loc: str,
    lastmod: str | None = None,
    changefreq: str | None = None,
    priority: str | None = None,
) -> str:
    parts = [f"  <url>", f"    <loc>{loc}</loc>"]
    if lastmod:
        parts.append(f"    <lastmod>{lastmod}</lastmod>")
    if changefreq:
        parts.append(f"    <changefreq>{changefreq}</changefreq>")
    if priority:
        parts.append(f"    <priority>{priority}</priority>")
    parts.append("  </url>")
    return "\n".join(parts)


def _sitemap_entry(loc: str, lastmod: str | None = None) -> str:
    parts = ["  <sitemap>", f"    <loc>{loc}</loc>"]
    if lastmod:
        parts.append(f"    <lastmod>{lastmod}</lastmod>")
    parts.append("  </sitemap>")
    return "\n".join(parts)


def _mtime_str(path: Path) -> str | None:
    """Return ISO-8601 date string (YYYY-MM-DD) for a file's mtime, or None."""
    try:
        ts = path.stat().st_mtime
        return datetime.fromtimestamp(ts, tz=timezone.utc).strftime("%Y-%m-%d")
    except OSError:
        return None


def _today() -> str:
    return datetime.now(tz=timezone.utc).strftime("%Y-%m-%d")


# ---------------------------------------------------------------------------
# Sitemap builders
# ---------------------------------------------------------------------------


def build_main_sitemap() -> str:
    """Static / hub pages."""
    today = _today()
    static_pages = [
        (f"{BASE_URL}/", "1.0", "daily"),
        (f"{BASE_URL}/directory.html", "0.9", "weekly"),
        (f"{BASE_URL}/domain/", "0.9", "daily"),
        (f"{BASE_URL}/ads-txt/", "0.95", "weekly"),
        (f"{BASE_URL}/sellers-json/", "0.95", "weekly"),
        (f"{BASE_URL}/app-ads-txt/", "0.95", "weekly"),
        (f"{BASE_URL}/lookup/", "0.9", "weekly"),
    ]
    url_blocks = []
    for loc, priority, changefreq in static_pages:
        url_blocks.append(
            _url(loc, lastmod=today, changefreq=changefreq, priority=priority)
        )

    lines = [
        XML_DECLARATION,
        URLSET_OPEN,
        *url_blocks,
        URLSET_CLOSE,
    ]
    return "\n".join(lines) + "\n"


def build_letter_sitemap(letter: str, domains: list[tuple[str, str | None]]) -> str:
    """
    Per-letter sitemap.

    domains: list of (domain_name, lastmod_or_None)
    """
    url_blocks = []
    for domain, lastmod in sorted(domains, key=lambda x: x[0]):
        loc = f"{BASE_URL}/domain/{domain}/"
        url_blocks.append(
            _url(loc, lastmod=lastmod, changefreq="weekly", priority="0.7")
        )

    lines = [
        XML_DECLARATION,
        URLSET_OPEN,
        *url_blocks,
        URLSET_CLOSE,
    ]
    return "\n".join(lines) + "\n"


def build_sitemap_index(
    letters_with_data: list[str], letter_lastmods: dict[str, str | None]
) -> str:
    """
    sitemap_index.xml pointing at:
      • sitemap-main.xml
      • sitemap-domains-{letter}.xml  (only letters that have ≥1 domain)
    """
    today = _today()
    entries = []

    # Main sitemap always present
    entries.append(
        _sitemap_entry(
            f"{BASE_URL}/sitemap-main.xml",
            lastmod=today,
        )
    )

    # Per-letter sitemaps
    for letter in LETTERS:
        if letter not in letters_with_data:
            continue
        loc = f"{BASE_URL}/sitemap-domains-{letter}.xml"
        entries.append(_sitemap_entry(loc, lastmod=letter_lastmods.get(letter)))

    lines = [
        XML_DECLARATION,
        SITEMAPINDEX_OPEN,
        *entries,
        SITEMAPINDEX_CLOSE,
    ]
    return "\n".join(lines) + "\n"


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


def main() -> None:
    if not DB_DIR.exists():
        print(f"ERROR: DB directory not found: {DB_DIR}", file=sys.stderr)
        sys.exit(1)

    DOCS_DIR.mkdir(parents=True, exist_ok=True)

    # ── Scan db/ ──────────────────────────────────────────────────────────
    # letter -> list of (domain, lastmod_str | None)
    letter_domains: dict[str, list[tuple[str, str | None]]] = {}

    total_domains = 0
    skipped_empty = 0

    print(f"Scanning {DB_DIR} ...")
    start_time = datetime.now()

    for letter_dir in sorted(DB_DIR.iterdir()):
        if not letter_dir.is_dir():
            continue
        letter = letter_dir.name.lower()
        if letter not in LETTERS:
            continue

        for domain_dir in sorted(letter_dir.iterdir()):
            if not domain_dir.is_dir():
                continue
            domain = domain_dir.name

            ads_path = domain_dir / "app-ads.txt"
            sellers_path = domain_dir / "sellers.json"

            has_ads = ads_path.exists()
            has_sellers = sellers_path.exists()

            if not has_ads and not has_sellers:
                skipped_empty += 1
                continue

            # Use the most-recent mtime among available data files
            mtimes: list[str] = []
            for p in (ads_path, sellers_path):
                if p.exists():
                    m = _mtime_str(p)
                    if m:
                        mtimes.append(m)
            lastmod = max(mtimes) if mtimes else None

            letter_domains.setdefault(letter, []).append((domain, lastmod))
            total_domains += 1

    elapsed_scan = (datetime.now() - start_time).total_seconds()
    print(
        f"  Scan complete in {elapsed_scan:.1f}s — "
        f"{total_domains:,} domains across "
        f"{len(letter_domains)} bucket(s); {skipped_empty:,} empty skipped."
    )

    # ── Write per-letter sitemaps ─────────────────────────────────────────
    letters_with_data = sorted(letter_domains.keys(), key=lambda l: LETTERS.index(l))
    # Best representative lastmod for the index entry = max of all lastmods
    letter_lastmods: dict[str, str | None] = {}
    written_letter = 0

    for letter in letters_with_data:
        domains = letter_domains[letter]
        all_mods = [lm for _, lm in domains if lm]
        letter_lastmods[letter] = max(all_mods) if all_mods else None

        xml = build_letter_sitemap(letter, domains)
        out_path = DOCS_DIR / f"sitemap-domains-{letter}.xml"
        out_path.write_text(xml, encoding="utf-8")
        written_letter += 1

    print(f"  Written {written_letter} per-letter sitemap(s).")

    # ── Write sitemap-main.xml ────────────────────────────────────────────
    main_xml = build_main_sitemap()
    main_path = DOCS_DIR / "sitemap-main.xml"
    main_path.write_text(main_xml, encoding="utf-8")
    print(f"  Written: {main_path}")

    # ── Write sitemap_index.xml ───────────────────────────────────────────
    index_xml = build_sitemap_index(letters_with_data, letter_lastmods)
    index_path = DOCS_DIR / "sitemap_index.xml"
    index_path.write_text(index_xml, encoding="utf-8")
    print(f"  Written: {index_path}")

    # ── Summary ───────────────────────────────────────────────────────────
    elapsed = (datetime.now() - start_time).total_seconds()
    total_urls = total_domains + 7  # 7 static pages
    total_files = written_letter + 2  # per-letter + main + index

    print()
    print("=" * 60)
    print("Sitemap generation complete")
    print("=" * 60)
    print(f"  Elapsed              : {elapsed:.1f}s")
    print(f"  Domain URLs          : {total_domains:,}")
    print(f"  Static URLs          : 7")
    print(f"  Total URLs           : {total_urls:,}")
    print(f"  Per-letter sitemaps  : {written_letter}")
    print(f"  Total files written  : {total_files}  (+ sitemap_index.xml)")
    print(f"  Output directory     : {DOCS_DIR}")
    print(f"  Sitemap index URL    : {BASE_URL}/sitemap_index.xml")
    print("=" * 60)


if __name__ == "__main__":
    main()
