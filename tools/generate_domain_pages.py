#!/usr/bin/env python3
"""
AdsDB Domain Page Generator
============================
Generates per-domain SEO-optimized HTML landing pages for adsdb.ktmrtb.com.

For each domain in db/{letter}/{domain}/ that has an app-ads.txt or sellers.json,
this script creates docs/domain/{domain}/index.html with:
  - Full stats (row counts, DIRECT/RESELLER breakdown, unique networks, seller types)
  - Parsed tables (first 500 ads.txt rows, first 200 sellers)
  - Top-10 ad networks bar chart
  - Schema.org Dataset + BreadcrumbList structured data
  - Links back to raw GitHub files and the AdsDB directory

Usage:
    python3 generate_domain_pages.py [--limit N] [--domain DOMAIN]

    --limit N       Only process first N domains (useful for testing)
    --domain NAME   Only generate page for a specific domain
"""

import argparse
import html as html_lib
import json
import os
import sys
from collections import Counter
from datetime import datetime
from pathlib import Path

# ---------------------------------------------------------------------------
# Paths & constants
# ---------------------------------------------------------------------------

SCRIPT_DIR = Path(__file__).resolve().parent
ADSDB_ROOT = SCRIPT_DIR.parent
DB_DIR = ADSDB_ROOT / "db"
DOCS_DOMAIN_DIR = ADSDB_ROOT / "docs" / "domain"

BASE_URL = "https://adsdb.ktmrtb.com"
GITHUB_BASE = "https://github.com/KONTRUSTMEDIA/adsdb/blob/main/db"
GA_ID = "G-NQ5GY19H9D"

MAX_ADS_ROWS_IN_TABLE = 100
MAX_SELLERS_IN_TABLE = 50


# ---------------------------------------------------------------------------
# Parsers
# ---------------------------------------------------------------------------


def parse_ads_txt(content: str) -> list[dict]:
    """
    Parse an app-ads.txt (or ads.txt) file.
    Returns a list of dicts with keys: domain, publisher_id, relationship, certification.
    Comments and blank lines are skipped. Directive lines (ownerdomain=, subdomain=) are skipped.
    """
    entries = []
    for raw_line in content.splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#"):
            continue
        # Skip directive lines like ownerdomain=, contact=, subdomain=
        if "=" in line and "," not in line.split("=")[0]:
            continue
        parts = [p.strip() for p in line.split(",")]
        if len(parts) < 3:
            continue
        relationship = parts[2].upper().strip()
        if relationship not in ("DIRECT", "RESELLER"):
            # Still include but normalise
            relationship = relationship or "UNKNOWN"
        entries.append(
            {
                "domain": parts[0].lower(),
                "publisher_id": parts[1],
                "relationship": relationship,
                "certification": parts[3].strip() if len(parts) > 3 else "",
            }
        )
    return entries


def parse_sellers_json(content: str) -> dict | None:
    """Parse a sellers.json file. Returns the parsed dict or None on failure.

    Handles non-standard formats:
    - Root is a list → treat as the sellers array
    - identifiers is a single dict → wrap in a list
    """
    try:
        data = json.loads(content)
    except Exception:
        return None

    # Some files have the sellers array at the root
    if isinstance(data, list):
        data = {"sellers": data}

    if not isinstance(data, dict):
        return None

    # Normalise identifiers: some files have a single dict instead of a list
    identifiers = data.get("identifiers")
    if isinstance(identifiers, dict):
        data["identifiers"] = [identifiers]
    elif not isinstance(identifiers, list):
        data["identifiers"] = []

    # Normalise sellers: must be a list of dicts
    sellers = data.get("sellers")
    if not isinstance(sellers, list):
        data["sellers"] = []
    else:
        # Filter out any non-dict items and normalise seller_type
        cleaned = []
        for s in sellers:
            if not isinstance(s, dict):
                continue
            # Normalise seller_type to uppercase string
            st = s.get("seller_type")
            if st is None:
                s = dict(s, seller_type="UNKNOWN")
            else:
                s = dict(s, seller_type=str(st).upper())
            cleaned.append(s)
        data["sellers"] = cleaned

    return data


def get_file_mtime(path: Path) -> str:
    """Return ISO date string of file's last modification time, or 'Unknown'."""
    try:
        mtime = path.stat().st_mtime
        return datetime.utcfromtimestamp(mtime).strftime("%Y-%m-%d")
    except Exception:
        return "Unknown"


# ---------------------------------------------------------------------------
# HTML helpers
# ---------------------------------------------------------------------------


def esc(text: str) -> str:
    """HTML-escape a string."""
    return html_lib.escape(str(text), quote=True)


def _nav(active: str = "") -> str:
    return f"""
    <nav class="top-bar" role="navigation" aria-label="Main navigation">
      <div class="top-bar-inner">
        <a href="/" class="top-bar-logo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
            <line x1="4" y1="22" x2="4" y2="15"/>
          </svg>
          AdsDB
        </a>
        <div class="top-bar-links">
          <a href="/#what-is-adsdb">About</a>
          <a href="/#stats">Stats</a>
          <a href="/directory.html">Directory</a>
          <a href="/domain/" class="{"active" if active == "domain" else ""}">Domains</a>
          <a href="https://github.com/KONTRUSTMEDIA/adsdb" class="btn-github"
             target="_blank" rel="noopener">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17
                   .55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23
                   -.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82
                   .72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89
                   -3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0
                   .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04
                   2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0
                   3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01
                   2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </nav>"""


def _footer(domain: str = "") -> str:
    note = f" · Profile for <strong>{esc(domain)}</strong>" if domain else ""
    return f"""
    <footer>
      <div class="footer-inner">
        <div>
          <div class="footer-brand">AdsDB <span>by <a href="https://ktmrtb.com" target="_blank" rel="noopener" style="color:inherit">KTMRTB</a></span></div>
          <div class="footer-tagline">
            A product of KTMRTB · The Open RTB Infrastructure Platform
          </div>
        </div>
        <nav class="footer-links" aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="/directory.html">Directory</a>
          <a href="/domain/">Domains</a>
          <a href="https://github.com/KONTRUSTMEDIA/adsdb" target="_blank" rel="noopener">GitHub</a>
        </nav>
      </div>
      <div class="footer-bottom">
        Data sourced from public app-ads.txt and sellers.json files. MIT License.
        For informational purposes only.{note} &mdash; <a href="/">AdsDB</a>
      </div>
    </footer>"""


def _css_content() -> str:
    """Return the full raw CSS for the shared domain-styles.css file."""
    return """
      /* ─── Design tokens ─────────────────────────────────────────── */
      :root {
        --bg:           #0d1117;
        --surface:      #161b22;
        --surface-2:    #1c2129;
        --border:       #30363d;
        --text:         #e6edf3;
        --text-muted:   #8b949e;
        --link:         #58a6ff;
        --link-hover:   #79c0ff;
        --green:        #238636;
        --green-bright: #3fb950;
        --blue:         #1f6feb;
        --orange:       #d29922;
        --orange-bright:#e3b341;
        --purple:       #8957e5;
        --purple-bright:#bc8cff;
        --red:          #f85149;
        --red-bright:   #ff7b72;
        --accent:       #58a6ff;
        --radius:       8px;
      }

      /* ─── Reset ─────────────────────────────────────────────────── */
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { font-size: 16px; scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
      body {
        background: var(--bg);
        color: var(--text);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        line-height: 1.6;
        min-height: 100vh;
      }
      a { color: var(--link); text-decoration: none; }
      a:hover { color: var(--link-hover); text-decoration: underline; }
      strong { font-weight: 700; }
      code {
        background: var(--surface-2);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 1px 6px;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
        font-size: 0.84em;
        word-break: break-all;
      }

      /* ─── Nav ───────────────────────────────────────────────────── */
      .top-bar {
        background: var(--surface);
        border-bottom: 1px solid var(--border);
        position: sticky; top: 0; z-index: 100;
      }
      .top-bar-inner {
        max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;
        height: 56px; display: flex; align-items: center;
        justify-content: space-between;
      }
      .top-bar-logo {
        font-size: 1.1rem; font-weight: 700; color: var(--text);
        display: flex; align-items: center; gap: 8px;
      }
      .top-bar-logo:hover { color: var(--accent); text-decoration: none; }
      .top-bar-links { display: flex; gap: 1.5rem; align-items: center; }
      .top-bar-links a { color: var(--text-muted); font-size: 0.9rem; font-weight: 500; }
      .top-bar-links a:hover,
      .top-bar-links a.active { color: var(--text); text-decoration: none; }
      .btn-github {
        background: var(--surface-2); border: 1px solid var(--border);
        border-radius: 6px; padding: 6px 14px;
        display: flex; align-items: center; gap: 6px;
        font-size: 0.85rem !important; color: var(--text) !important;
      }
      .btn-github:hover { background: var(--border); }

      /* ─── Breadcrumb ─────────────────────────────────────────────── */
      .breadcrumb {
        max-width: 1200px; margin: 0 auto; padding: 0.7rem 1.5rem;
        font-size: 0.83rem; color: var(--text-muted);
        display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;
      }
      .breadcrumb a { color: var(--text-muted); }
      .breadcrumb a:hover { color: var(--link); }
      .bc-sep { color: var(--border); font-size: 1rem; }

      /* ─── Hero ───────────────────────────────────────────────────── */
      .hero {
        background: var(--surface);
        border-bottom: 1px solid var(--border);
        padding: 2.5rem 1.5rem 2rem;
      }
      .hero-inner { max-width: 1200px; margin: 0 auto; }
      .domain-eyebrow {
        display: inline-block; font-size: 0.73rem; font-weight: 600;
        text-transform: uppercase; letter-spacing: 0.1em;
        color: var(--text-muted); margin-bottom: 0.5rem;
      }
      .hero h1 {
        font-size: clamp(1.5rem, 4vw, 2.1rem);
        font-weight: 800; line-height: 1.15; margin-bottom: 0.85rem;
      }
      .hero h1 .hl { color: var(--accent); }
      .hero-desc {
        color: var(--text-muted); font-size: 1rem;
        max-width: 680px; margin-bottom: 1.25rem;
      }
      .badge-strip { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 1.4rem; }
      .badge {
        display: inline-flex; align-items: center; gap: 5px;
        padding: 4px 11px; border-radius: 20px;
        font-size: 0.78rem; font-weight: 600; border: 1px solid transparent;
        white-space: nowrap;
      }
      .bg-green  { background:rgba(35,134,54,.15);  border-color:rgba(35,134,54,.4);  color:var(--green-bright); }
      .bg-blue   { background:rgba(31,111,235,.15); border-color:rgba(31,111,235,.4); color:#79c0ff; }
      .bg-orange { background:rgba(210,153,34,.15); border-color:rgba(210,153,34,.4); color:var(--orange-bright); }
      .bg-purple { background:rgba(137,87,229,.15); border-color:rgba(137,87,229,.4); color:var(--purple-bright); }
      .bg-red    { background:rgba(248,81,73,.15);  border-color:rgba(248,81,73,.4);  color:var(--red-bright); }
      .bg-gray   { background:rgba(139,148,158,.1); border-color:rgba(139,148,158,.3);color:var(--text-muted); }
      .hero-actions { display: flex; gap: 0.65rem; flex-wrap: wrap; }
      .btn {
        display: inline-flex; align-items: center; gap: 6px;
        padding: 9px 20px; border-radius: 6px;
        font-size: 0.88rem; font-weight: 600;
        text-decoration: none !important; transition: background 0.15s, color 0.15s;
        white-space: nowrap;
      }
      .btn-primary  { background: var(--accent); color: #0d1117; }
      .btn-primary:hover  { background: var(--link-hover); color: #0d1117; }
      .btn-secondary { background: transparent; color: var(--text); border: 1px solid var(--border); }
      .btn-secondary:hover { background: var(--surface-2); }

      /* ─── Stats strip ────────────────────────────────────────────── */
      .stats-strip {
        background: var(--surface-2); border-bottom: 1px solid var(--border);
        padding: 1.1rem 1.5rem;
      }
      .stats-grid {
        max-width: 1200px; margin: 0 auto;
        display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 1rem; text-align: center;
      }
      .stat-num {
        font-size: 1.65rem; font-weight: 800;
        color: var(--accent); display: block; line-height: 1.1;
      }
      .stat-lbl {
        font-size: 0.72rem; color: var(--text-muted);
        text-transform: uppercase; letter-spacing: 0.06em; margin-top: 3px;
      }

      /* ─── Page layout ────────────────────────────────────────────── */
      .page-wrap {
        max-width: 1200px; margin: 0 auto;
        padding: 2rem 1.5rem; display: flex; flex-direction: column; gap: 1.75rem;
      }

      /* ─── Section cards ──────────────────────────────────────────── */
      .section {
        background: var(--surface); border: 1px solid var(--border);
        border-radius: var(--radius); overflow: hidden;
      }
      .section-header {
        padding: 1.1rem 1.5rem; border-bottom: 1px solid var(--border);
        display: flex; align-items: center; justify-content: space-between;
        flex-wrap: wrap; gap: 0.75rem;
      }
      .section-header h2 {
        font-size: 1.05rem; font-weight: 700;
        display: flex; align-items: center; gap: 8px;
      }
      .section-meta { font-size: 0.8rem; color: var(--text-muted); }
      .section-body { padding: 1.5rem; }

      /* ─── Info grid (contact info) ───────────────────────────────── */
      .info-grid {
        display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.85rem; margin-bottom: 1.5rem;
      }
      .info-card {
        background: var(--surface-2); border: 1px solid var(--border);
        border-radius: 6px; padding: 0.9rem;
      }
      .info-label {
        font-size: 0.7rem; text-transform: uppercase;
        letter-spacing: 0.06em; color: var(--text-muted); margin-bottom: 0.3rem;
      }
      .info-value { font-size: 0.875rem; color: var(--text); word-break: break-all; }

      /* ─── Tables ─────────────────────────────────────────────────── */
      .table-wrap { overflow-x: auto; border-radius: 4px; }
      table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
      th {
        background: var(--surface-2); color: var(--text-muted);
        font-size: 0.72rem; font-weight: 700;
        text-transform: uppercase; letter-spacing: 0.06em;
        padding: 9px 14px; text-align: left;
        border-bottom: 1px solid var(--border); white-space: nowrap;
      }
      td { padding: 8px 14px; border-bottom: 1px solid var(--border); vertical-align: middle; }
      tr:last-child td { border-bottom: none; }
      tr:hover td { background: rgba(255,255,255,.02); }

      /* ─── Relationship / type badges ─────────────────────────────── */
      .rel, .stype {
        display: inline-block; padding: 2px 9px; border-radius: 20px;
        font-size: 0.72rem; font-weight: 700; letter-spacing: 0.04em;
      }
      .rel-direct      { background:rgba(35,134,54,.2);  color:var(--green-bright); }
      .rel-reseller    { background:rgba(31,111,235,.2); color:#79c0ff; }
      .rel-unknown     { background:rgba(139,148,158,.15);color:var(--text-muted); }
      .stype-publisher    { background:rgba(35,134,54,.2);  color:var(--green-bright); }
      .stype-intermediary { background:rgba(137,87,229,.2); color:var(--purple-bright); }
      .stype-both         { background:rgba(210,153,34,.2); color:var(--orange-bright); }
      .stype-unknown      { background:rgba(139,148,158,.15);color:var(--text-muted); }
      .conf-badge {
        display:inline-block; padding:1px 7px; border-radius:10px;
        font-size:0.68rem; font-weight:700;
        background:rgba(248,81,73,.15); color:var(--red-bright); margin-left:5px;
      }
      .no-val { color: var(--text-muted); }

      /* ─── Network bars ───────────────────────────────────────────── */
      .top-networks { margin-bottom: 1.5rem; }
      .top-networks h3 {
        font-size: 0.88rem; font-weight: 700;
        color: var(--text-muted); margin-bottom: 0.85rem;
        text-transform: uppercase; letter-spacing: 0.05em;
      }
      .net-bars { display: flex; flex-direction: column; gap: 0.55rem; }
      .net-row {
        display: grid; grid-template-columns: 200px 1fr 45px;
        align-items: center; gap: 0.8rem; font-size: 0.82rem;
      }
      .net-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .bar-track {
        background: var(--surface-2); border-radius: 4px;
        height: 7px; overflow: hidden;
      }
      .bar-fill {
        background: var(--accent); height: 100%;
        border-radius: 4px; transition: width 0.4s ease;
      }
      .net-cnt { text-align: right; color: var(--text-muted); font-size: 0.78rem; }

      /* ─── Seller type summary cards ──────────────────────────────── */
      .type-summary {
        display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 0.75rem; margin-bottom: 1.5rem;
      }
      .type-card {
        background: var(--surface-2); border: 1px solid var(--border);
        border-radius: 6px; padding: 0.85rem; text-align: center;
      }
      .type-card-num {
        font-size: 1.5rem; font-weight: 800;
        color: var(--accent); display: block;
      }
      .type-card-lbl { font-size: 0.72rem; color: var(--text-muted); margin-top: 2px; }

      /* ─── Truncation notice ──────────────────────────────────────── */
      .truncation-note {
        margin-top: 0.85rem; font-size: 0.8rem;
        color: var(--text-muted); padding: 0.75rem 1rem;
        background: var(--surface-2); border: 1px solid var(--border);
        border-radius: 6px;
      }

      /* ─── CTA box ────────────────────────────────────────────────── */
      .cta-box {
        background: linear-gradient(135deg,
          rgba(31,111,235,.12), rgba(137,87,229,.12));
        border: 1px solid rgba(88,166,255,.25);
        border-radius: var(--radius); padding: 2.25rem 2rem; text-align: center;
      }
      .cta-box h2 { font-size: 1.35rem; margin-bottom: 0.5rem; }
      .cta-box p { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.4rem; max-width: 560px; margin-left:auto; margin-right:auto; }
      .cta-actions { display: flex; justify-content: center; gap: 0.65rem; flex-wrap: wrap; }

      /* ─── Footer ─────────────────────────────────────────────────── */
      footer {
        background: var(--surface); border-top: 1px solid var(--border);
        padding: 2rem 1.5rem; margin-top: 2rem;
      }
      .footer-inner {
        max-width: 1200px; margin: 0 auto;
        display: flex; justify-content: space-between;
        align-items: center; flex-wrap: wrap; gap: 1rem;
      }
      .footer-brand { font-weight: 700; color: var(--text); }
      .footer-brand span { color: var(--text-muted); font-weight: 400; font-size: 0.88rem; }
      .footer-tagline { font-size: 0.78rem; color: var(--text-muted); margin-top: 3px; }
      .footer-links { display: flex; gap: 1.5rem; font-size: 0.84rem; flex-wrap: wrap; }
      .footer-links a { color: var(--text-muted); }
      .footer-links a:hover { color: var(--link); text-decoration: none; }
      .footer-bottom {
        max-width: 1200px; margin: 1rem auto 0;
        padding-top: 1rem; border-top: 1px solid var(--border);
        font-size: 0.78rem; color: var(--text-muted); text-align: center;
      }

      /* ─── Responsive ─────────────────────────────────────────────── */
      @media (max-width: 768px) {
        .top-bar-links a:not(.btn-github) { display: none; }
        .hero { padding: 1.75rem 1rem 1.5rem; }
        .section-body { padding: 1rem; }
        .stats-grid { grid-template-columns: repeat(3, 1fr); }
        .net-row { grid-template-columns: 110px 1fr 36px; }
        .page-wrap { padding: 1rem; }
        .cta-box { padding: 1.5rem 1rem; }
      }
      @media (max-width: 480px) {
        .stats-grid { grid-template-columns: repeat(2, 1fr); }
      }

      /* ─── Index page styles ──────────────────────────────────────── */
      .index-hero {
        background: var(--surface); border-bottom: 1px solid var(--border);
        padding: 2.5rem 1.5rem 2rem;
      }
      .index-hero-inner { max-width: 1200px; margin: 0 auto; }
      .index-hero h1 {
        font-size: clamp(1.5rem, 4vw, 2rem); font-weight: 800;
        margin-bottom: 0.75rem;
      }
      .index-hero h1 .hl { color: var(--accent); }
      .index-hero p { color: var(--text-muted); font-size: 1rem; max-width: 640px; }

      .search-bar-wrap {
        max-width: 1200px; margin: 1.5rem auto 0; padding: 0 1.5rem;
      }
      #domain-search {
        width: 100%; padding: 12px 18px;
        background: var(--surface); border: 1px solid var(--border);
        border-radius: var(--radius); color: var(--text);
        font-size: 1rem; outline: none; transition: border-color 0.15s;
      }
      #domain-search:focus { border-color: var(--accent); }
      #domain-search::placeholder { color: var(--text-muted); }

      .letter-nav {
        max-width: 1200px; margin: 1.5rem auto 0; padding: 0 1.5rem;
        display: flex; flex-wrap: wrap; gap: 0.4rem;
      }
      .letter-link {
        display: inline-block; padding: 4px 10px;
        background: var(--surface); border: 1px solid var(--border);
        border-radius: 4px; font-size: 0.85rem; font-weight: 700;
        color: var(--text-muted); text-decoration: none !important;
        transition: background 0.12s, color 0.12s;
      }
      .letter-link:hover { background: var(--accent); color: #0d1117; border-color: var(--accent); }

      .index-body {
        max-width: 1200px; margin: 2rem auto; padding: 0 1.5rem 3rem;
      }
      .letter-section { margin-bottom: 2.5rem; }
      .letter-heading {
        font-size: 1.4rem; font-weight: 800; color: var(--accent);
        border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;
        margin-bottom: 1rem;
      }
      .domain-list {
        list-style: none; padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 0.35rem;
      }
      .domain-list li a {
        display: block; padding: 6px 10px;
        background: var(--surface); border: 1px solid var(--border);
        border-radius: 5px; font-size: 0.84rem; color: var(--text-muted);
        text-decoration: none !important; transition: border-color 0.12s, color 0.12s;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .domain-list li a:hover { color: var(--link); border-color: var(--accent); }
      .domain-list li.hidden { display: none; }

      @media (max-width: 768px) {
        .domain-list { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
      }
    """


def _base_styles() -> str:
    """Return a <link> tag pointing to the shared domain-styles.css file."""
    return '<link rel="stylesheet" href="/domain/domain-styles.css" />'


# ---------------------------------------------------------------------------
# Domain page generator
# ---------------------------------------------------------------------------


def generate_domain_page(
    domain: str,
    letter: str,
    ads_data: list[dict] | None,
    sellers_raw: dict | None,
    ads_path: Path | None,
    sellers_path: Path | None,
) -> str:
    """Return the full HTML string for one domain's landing page."""

    # ── ads.txt stats ──────────────────────────────────────────────────────
    ads_rows = len(ads_data) if ads_data else 0
    direct_count = sum(1 for e in (ads_data or []) if e["relationship"] == "DIRECT")
    reseller_count = sum(1 for e in (ads_data or []) if e["relationship"] == "RESELLER")
    network_counter = Counter(e["domain"] for e in (ads_data or []))
    unique_networks = len(network_counter)
    top_networks = network_counter.most_common(10)

    has_ads = ads_data is not None and ads_rows > 0

    # ── sellers.json stats ─────────────────────────────────────────────────
    sellers_list: list[dict] = []
    contact: dict = {}
    sellers_total = sellers_publishers = sellers_intermediaries = 0
    sellers_both = sellers_confidential = 0
    tag_id = ""

    has_sellers = sellers_raw is not None

    if has_sellers:
        sellers_list = sellers_raw.get("sellers", [])
        sellers_total = len(sellers_list)
        for s in sellers_list:
            st = s.get("seller_type", "").upper()
            if st == "PUBLISHER":
                sellers_publishers += 1
            elif st == "INTERMEDIARY":
                sellers_intermediaries += 1
            elif st == "BOTH":
                sellers_both += 1
            if s.get("is_confidential"):
                sellers_confidential += 1

        for ident in sellers_raw.get("identifiers", []):
            if isinstance(ident, dict) and ident.get("name") == "TAG-ID":
                tag_id = ident.get("value", "")

        contact = {
            "email": sellers_raw.get("contact_email", ""),
            "address": sellers_raw.get("contact_address", ""),
            "version": sellers_raw.get("version", ""),
            "tag_id": tag_id,
        }

    # ── dates ──────────────────────────────────────────────────────────────
    ads_date = get_file_mtime(ads_path) if ads_path else None
    sellers_date = get_file_mtime(sellers_path) if sellers_path else None
    last_updated = ads_date or sellers_date or "Unknown"

    # ── GitHub links ───────────────────────────────────────────────────────
    github_ads = f"{GITHUB_BASE}/{letter}/{domain}/app-ads.txt" if has_ads else None
    github_sellers = (
        f"{GITHUB_BASE}/{letter}/{domain}/sellers.json" if has_sellers else None
    )
    page_url = f"{BASE_URL}/domain/{domain}/"

    # ── Meta description ───────────────────────────────────────────────────
    parts = []
    if has_ads:
        parts.append(
            f"{ads_rows} app-ads.txt entries "
            f"({direct_count} DIRECT, {reseller_count} RESELLER, {unique_networks} networks)"
        )
    if has_sellers:
        parts.append(
            f"{sellers_total} sellers.json entries "
            f"({sellers_publishers} publishers, {sellers_intermediaries} intermediaries)"
        )
    meta_desc = (
        f"Programmatic advertising transparency profile for {domain}. "
        + " · ".join(parts)
        + f". Last updated {last_updated}. Free open-source data from AdsDB."
    )

    # ── Structured data ────────────────────────────────────────────────────
    structured_data = json.dumps(
        {
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": f"{domain} — Programmatic Advertising Transparency Data",
            "description": meta_desc,
            "url": page_url,
            "dateModified": last_updated,
            "creator": {
                "@type": "Organization",
                "name": "KONTRUST MEDIA",
                "url": BASE_URL,
            },
            "license": "https://opensource.org/licenses/MIT",
            "isPartOf": {
                "@type": "DataCatalog",
                "name": "AdsDB",
                "url": BASE_URL,
            },
        },
        indent=2,
    )

    breadcrumb_ld = json.dumps(
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "AdsDB",
                    "item": f"{BASE_URL}/",
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Domains",
                    "item": f"{BASE_URL}/domain/",
                },
                {"@type": "ListItem", "position": 3, "name": domain, "item": page_url},
            ],
        },
        indent=2,
    )

    # ── Badge strip ────────────────────────────────────────────────────────
    badges = []
    if has_ads:
        badges.append('<span class="badge bg-green">&#10003; app-ads.txt</span>')
    if has_sellers:
        badges.append('<span class="badge bg-blue">&#10003; sellers.json</span>')
    if ads_rows:
        badges.append(f'<span class="badge bg-orange">{ads_rows:,} ad entries</span>')
    if sellers_total:
        badges.append(f'<span class="badge bg-purple">{sellers_total:,} sellers</span>')
    badges.append(f'<span class="badge bg-gray">Updated {esc(last_updated)}</span>')

    # ── CTA buttons ────────────────────────────────────────────────────────
    cta_btns = [
        '<a href="https://github.com/KONTRUSTMEDIA/adsdb" class="btn btn-primary" '
        'target="_blank" rel="noopener">&#11015; Clone Full Database</a>',
    ]
    if github_ads:
        cta_btns.append(
            f'<a href="{esc(github_ads)}" class="btn btn-secondary" '
            f'target="_blank" rel="noopener">Raw app-ads.txt &#8599;</a>'
        )
    if github_sellers:
        cta_btns.append(
            f'<a href="{esc(github_sellers)}" class="btn btn-secondary" '
            f'target="_blank" rel="noopener">Raw sellers.json &#8599;</a>'
        )
    cta_btns.append('<a href="/domain/" class="btn btn-secondary">Browse Domains</a>')

    # ────────────────────────────────────────────────────────────────────────
    # Build sellers.json section
    # ────────────────────────────────────────────────────────────────────────
    sellers_section = ""
    if has_sellers:
        # Contact info grid
        contact_html = ""
        if any(contact.values()):
            cards = []
            if contact["email"]:
                cards.append(
                    f'<div class="info-card">'
                    f'<div class="info-label">Contact Email</div>'
                    f'<div class="info-value">{esc(contact["email"])}</div></div>'
                )
            if contact["address"]:
                cards.append(
                    f'<div class="info-card">'
                    f'<div class="info-label">Address</div>'
                    f'<div class="info-value">{esc(contact["address"])}</div></div>'
                )
            if contact["tag_id"]:
                cards.append(
                    f'<div class="info-card">'
                    f'<div class="info-label">TAG-ID</div>'
                    f'<div class="info-value"><code>{esc(contact["tag_id"])}</code></div></div>'
                )
            if contact["version"]:
                cards.append(
                    f'<div class="info-card">'
                    f'<div class="info-label">Version</div>'
                    f'<div class="info-value">{esc(contact["version"])}</div></div>'
                )
            if cards:
                contact_html = '<div class="info-grid">' + "".join(cards) + "</div>"

        # Seller type summary
        type_summary = f"""
        <div class="type-summary">
          <div class="type-card">
            <span class="type-card-num">{sellers_total:,}</span>
            <div class="type-card-lbl">Total Sellers</div>
          </div>
          <div class="type-card">
            <span class="type-card-num" style="color:var(--green-bright)">{sellers_publishers:,}</span>
            <div class="type-card-lbl">Publishers</div>
          </div>
          <div class="type-card">
            <span class="type-card-num" style="color:var(--purple-bright)">{sellers_intermediaries:,}</span>
            <div class="type-card-lbl">Intermediaries</div>
          </div>
          {'<div class="type-card"><span class="type-card-num" style="color:var(--orange-bright)">' + str(sellers_both) + '</span><div class="type-card-lbl">Both</div></div>' if sellers_both else ""}
          {'<div class="type-card"><span class="type-card-num" style="color:var(--red-bright)">' + str(sellers_confidential) + '</span><div class="type-card-lbl">Confidential</div></div>' if sellers_confidential else ""}
        </div>"""

        # Sellers table
        shown = sellers_list[:MAX_SELLERS_IN_TABLE]
        rows_html = ""
        for s in shown:
            s_id = esc(str(s.get("seller_id", "—")))
            s_name = esc(str(s.get("name", "—")))
            s_domain = s.get("domain", "")
            s_type = s.get("seller_type", "UNKNOWN").upper()
            is_conf = bool(s.get("is_confidential"))

            type_cls = {
                "PUBLISHER": "stype-publisher",
                "INTERMEDIARY": "stype-intermediary",
                "BOTH": "stype-both",
            }.get(s_type, "stype-unknown")

            conf_html = (
                '<span class="conf-badge">CONFIDENTIAL</span>' if is_conf else ""
            )
            if s_domain:
                domain_cell = (
                    f'<a href="/domain/{esc(s_domain)}/" '
                    f'title="View {esc(s_domain)} on AdsDB">{esc(s_domain)}</a>'
                )
            else:
                domain_cell = '<span class="no-val">—</span>'

            rows_html += f"""
              <tr>
                <td><code>{s_id}</code></td>
                <td>{s_name}{conf_html}</td>
                <td>{domain_cell}</td>
                <td><span class="stype {type_cls}">{esc(s_type)}</span></td>
              </tr>"""

        truncation = ""
        if sellers_total > MAX_SELLERS_IN_TABLE and github_sellers:
            truncation = (
                f'<div class="truncation-note">Showing first {MAX_SELLERS_IN_TABLE:,} of '
                f"{sellers_total:,} sellers. "
                f'<a href="{esc(github_sellers)}" target="_blank" rel="noopener">'
                f"View full file on GitHub &nearr;</a></div>"
            )

        sec_meta = (
            f"{sellers_total:,} sellers &middot; "
            f"{sellers_publishers:,} publishers &middot; "
            f"{sellers_intermediaries:,} intermediaries"
        )
        if sellers_confidential:
            sec_meta += f" &middot; {sellers_confidential} confidential"

        sellers_section = f"""
      <section class="section" id="sellers-json" aria-labelledby="sellers-heading">
        <div class="section-header">
          <h2 id="sellers-heading"><span aria-hidden="true">&#x1F4CB;</span> sellers.json</h2>
          <div class="section-meta">{sec_meta}</div>
        </div>
        <div class="section-body">
          {contact_html}
          {type_summary}
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Seller ID</th>
                  <th>Name</th>
                  <th>Domain</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>{rows_html}
              </tbody>
            </table>
          </div>
          {truncation}
        </div>
      </section>"""

    # ────────────────────────────────────────────────────────────────────────
    # Build app-ads.txt section
    # ────────────────────────────────────────────────────────────────────────
    ads_section = ""
    if has_ads:
        # Top networks bar chart
        top_net_html = ""
        if top_networks:
            max_cnt = top_networks[0][1]
            bars = ""
            for net, cnt in top_networks:
                pct = int((cnt / max_cnt) * 100) if max_cnt else 0
                bars += f"""
                <div class="net-row">
                  <span class="net-name">
                    <a href="/domain/{esc(net)}/" title="{esc(net)} profile on AdsDB">{esc(net)}</a>
                  </span>
                  <div class="bar-track">
                    <div class="bar-fill" style="width:{pct}%"></div>
                  </div>
                  <span class="net-cnt">{cnt:,}</span>
                </div>"""
            top_net_html = f"""
          <div class="top-networks">
            <h3>Top Ad Networks by Entry Count</h3>
            <div class="net-bars">{bars}
            </div>
          </div>"""

        # Table rows
        shown_ads = (ads_data or [])[:MAX_ADS_ROWS_IN_TABLE]
        ads_rows_html = ""
        for e in shown_ads:
            rel = e["relationship"]
            rel_cls = {
                "DIRECT": "rel-direct",
                "RESELLER": "rel-reseller",
            }.get(rel, "rel-unknown")
            cert_html = (
                f'<code class="cert">{esc(e["certification"])}</code>'
                if e["certification"]
                else '<span class="no-val">—</span>'
            )
            net_domain = e["domain"]
            ads_rows_html += f"""
              <tr>
                <td><a href="/domain/{esc(net_domain)}/" title="{esc(net_domain)} on AdsDB">{esc(net_domain)}</a></td>
                <td><code>{esc(e["publisher_id"])}</code></td>
                <td><span class="rel {rel_cls}">{esc(rel)}</span></td>
                <td>{cert_html}</td>
              </tr>"""

        truncation_ads = ""
        if ads_rows > MAX_ADS_ROWS_IN_TABLE and github_ads:
            truncation_ads = (
                f'<div class="truncation-note">Showing first {MAX_ADS_ROWS_IN_TABLE:,} of '
                f"{ads_rows:,} entries. "
                f'<a href="{esc(github_ads)}" target="_blank" rel="noopener">'
                f"View full file on GitHub &nearr;</a></div>"
            )

        sec_meta_ads = (
            f"{ads_rows:,} entries &middot; "
            f"{direct_count:,} DIRECT &middot; "
            f"{reseller_count:,} RESELLER &middot; "
            f"{unique_networks:,} networks"
        )

        ads_section = f"""
      <section class="section" id="app-ads-txt" aria-labelledby="ads-heading">
        <div class="section-header">
          <h2 id="ads-heading"><span aria-hidden="true">&#x1F4C4;</span> app-ads.txt</h2>
          <div class="section-meta">{sec_meta_ads}</div>
        </div>
        <div class="section-body">
          {top_net_html}
          <div class="table-wrap" style="margin-top:{"1.5rem" if top_networks else "0"}">
            <table>
              <thead>
                <tr>
                  <th>Ad Network</th>
                  <th>Publisher ID</th>
                  <th>Relationship</th>
                  <th>Certification Tag</th>
                </tr>
              </thead>
              <tbody>{ads_rows_html}
              </tbody>
            </table>
          </div>
          {truncation_ads}
        </div>
      </section>"""

    # ────────────────────────────────────────────────────────────────────────
    # Assemble full page
    # ────────────────────────────────────────────────────────────────────────
    return f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{esc(domain)} &mdash; app-ads.txt &amp; sellers.json Profile | AdsDB</title>
    <meta name="description" content="{esc(meta_desc)}" />
    <meta name="keywords" content="{esc(domain)} app-ads.txt, {esc(domain)} sellers.json, {esc(domain)} ads.txt, {esc(domain)} programmatic advertising, authorized sellers {esc(domain)}, ad tech transparency {esc(domain)}" />
    <meta name="author" content="KONTRUST MEDIA" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href="{esc(page_url)}" />

    <meta property="og:title" content="{esc(domain)} &mdash; Programmatic Advertising Profile | AdsDB" />
    <meta property="og:description" content="{esc(meta_desc)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{esc(page_url)}" />
    <meta property="og:site_name" content="AdsDB" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="{esc(domain)} &mdash; app-ads.txt &amp; sellers.json | AdsDB" />
    <meta name="twitter:description" content="{esc(meta_desc)}" />

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id={GA_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {{ dataLayer.push(arguments); }}
      gtag('js', new Date());
      gtag('config', '{GA_ID}');
    </script>

    <script type="application/ld+json">
{structured_data}
    </script>
    <script type="application/ld+json">
{breadcrumb_ld}
    </script>
    {_base_styles()}
  </head>
  <body>
    {_nav("domain")}

    <!-- Breadcrumb -->
    <div class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">AdsDB</a>
      <span class="bc-sep" aria-hidden="true">›</span>
      <a href="/domain/">Domains</a>
      <span class="bc-sep" aria-hidden="true">›</span>
      <span aria-current="page">{esc(domain)}</span>
    </div>

    <!-- Hero -->
    <header class="hero">
      <div class="hero-inner">
        <span class="domain-eyebrow">Programmatic Advertising Profile</span>
        <h1>
          <span class="hl">{esc(domain)}</span>
          &mdash; app-ads.txt &amp; sellers.json
        </h1>
        <p class="hero-desc">
          Complete programmatic advertising transparency data for
          <strong>{esc(domain)}</strong>.
          Sourced from <a href="/">AdsDB</a> — the world's largest open-source database of
          app-ads.txt, ads.txt, and sellers.json files.
        </p>
        <div class="badge-strip">
          {"".join(badges)}
        </div>
        <div class="hero-actions">
          {"".join(cta_btns)}
        </div>
      </div>
    </header>

    <!-- Stats strip -->
    <div class="stats-strip" aria-label="Quick statistics">
      <div class="stats-grid">
        <div>
          <span class="stat-num">{ads_rows:,}</span>
          <span class="stat-lbl">ads.txt rows</span>
        </div>
        <div>
          <span class="stat-num">{direct_count:,}</span>
          <span class="stat-lbl">DIRECT</span>
        </div>
        <div>
          <span class="stat-num">{reseller_count:,}</span>
          <span class="stat-lbl">RESELLER</span>
        </div>
        <div>
          <span class="stat-num">{unique_networks:,}</span>
          <span class="stat-lbl">Ad Networks</span>
        </div>
        <div>
          <span class="stat-num">{sellers_total:,}</span>
          <span class="stat-lbl">Sellers</span>
        </div>
        <div>
          <span class="stat-num" style="font-size:1rem;padding-top:6px">{esc(last_updated)}</span>
          <span class="stat-lbl">Last Updated</span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <main class="page-wrap" id="main-content">
      {sellers_section}
      {ads_section}

      <!-- CTA -->
      <div class="cta-box">
        <h2>Access the Full AdsDB Dataset</h2>
        <p>
          AdsDB is the world's largest open-source database of programmatic advertising
          transparency files. 50,000+ domains, 49,000+ app-ads.txt files, 1,400+ sellers.json
          files &mdash; all free under the MIT license.
        </p>
        <div class="cta-actions">
          <a href="https://github.com/KONTRUSTMEDIA/adsdb" class="btn btn-primary"
             target="_blank" rel="noopener">Clone on GitHub</a>
          <a href="/domain/" class="btn btn-secondary">Browse All Domains</a>
          <a href="/directory.html" class="btn btn-secondary">Directory</a>
          <a href="/" class="btn btn-secondary">About AdsDB</a>
        </div>
      </div>
    </main>

    {_footer(domain)}
  </body>
</html>"""


# ---------------------------------------------------------------------------
# Domain index page generator
# ---------------------------------------------------------------------------


def generate_domain_index(all_domains: list[tuple[str, str]]) -> str:
    """
    Generate docs/domain/index.html listing all domains alphabetically.
    all_domains is a list of (domain, letter) tuples.
    """
    total = len(all_domains)

    # Group by first character
    from collections import defaultdict

    by_letter: dict[str, list[str]] = defaultdict(list)
    for domain, _ in all_domains:
        key = domain[0].upper() if domain else "#"
        by_letter[key].append(domain)

    # Build letter nav
    letters_sorted = sorted(by_letter.keys())
    letter_nav = " ".join(
        f'<a href="#letter-{esc(lt)}" class="letter-link">{esc(lt)}</a>'
        for lt in letters_sorted
    )

    # Build domain sections
    sections_html = ""
    for lt in letters_sorted:
        domains = sorted(by_letter[lt])
        items_html = "".join(
            f'<li><a href="/domain/{esc(d)}/" title="{esc(d)} — app-ads.txt &amp; sellers.json">'
            f"{esc(d)}</a></li>"
            for d in domains
        )
        sections_html += f"""
        <section class="letter-section" id="letter-{esc(lt)}">
          <h2 class="letter-heading">{esc(lt)}</h2>
          <ul class="domain-list">{items_html}</ul>
        </section>"""

    meta_desc = (
        f"Browse {total:,} programmatic advertising domain profiles in the AdsDB database. "
        "Find app-ads.txt and sellers.json data for any publisher or ad tech company."
    )

    structured = json.dumps(
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AdsDB Domain Directory",
            "description": meta_desc,
            "url": f"{BASE_URL}/domain/",
            "numberOfItems": total,
            "isPartOf": {"@type": "WebSite", "name": "AdsDB", "url": BASE_URL},
        },
        indent=2,
    )

    return f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Domain Directory — {total:,} Profiles | AdsDB</title>
    <meta name="description" content="{esc(meta_desc)}" />
    <meta name="keywords" content="app-ads.txt directory, sellers.json directory, programmatic advertising domains, ad tech transparency, AdsDB domain list" />
    <meta name="author" content="KONTRUST MEDIA" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href="{BASE_URL}/domain/" />

    <meta property="og:title" content="Domain Directory — {total:,} Programmatic Advertising Profiles | AdsDB" />
    <meta property="og:description" content="{esc(meta_desc)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{BASE_URL}/domain/" />
    <meta property="og:site_name" content="AdsDB" />

    <script async src="https://www.googletagmanager.com/gtag/js?id={GA_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {{ dataLayer.push(arguments); }}
      gtag('js', new Date());
      gtag('config', '{GA_ID}');
    </script>
    <script type="application/ld+json">
{structured}
    </script>

    {_base_styles()}

  </head>
  <body>
    {_nav("domain")}

    <div class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">AdsDB</a>
      <span class="bc-sep" aria-hidden="true">›</span>
      <span aria-current="page">Domains</span>
    </div>

    <header class="index-hero">
      <div class="index-hero-inner">
        <h1><span class="hl">{total:,} Domain Profiles</span> — app-ads.txt &amp; sellers.json</h1>
        <p>
          Browse every domain in the AdsDB dataset. Each profile includes parsed
          app-ads.txt entries, sellers.json data, relationship breakdowns, and top ad networks.
          Updated daily. Free and open-source.
        </p>
      </div>
    </header>

    <div class="search-bar-wrap">
      <input type="search" id="domain-search" placeholder="Search domains... (e.g. 9gag.com)"
             aria-label="Search domain profiles" autocomplete="off" />
    </div>

    <nav class="letter-nav" aria-label="Jump to letter">
      {letter_nav}
    </nav>

    <div class="index-body" id="domain-index-body">
      {sections_html}
    </div>

    {_footer()}

    <script>
      // Client-side domain search
      const input = document.getElementById('domain-search');
      const items = Array.from(document.querySelectorAll('.domain-list li'));
      const sections = Array.from(document.querySelectorAll('.letter-section'));

      input.addEventListener('input', function () {{
        const q = this.value.trim().toLowerCase();
        if (!q) {{
          items.forEach(li => li.classList.remove('hidden'));
          sections.forEach(s => s.style.display = '');
          return;
        }}
        items.forEach(li => {{
          const text = li.querySelector('a').textContent.toLowerCase();
          li.classList.toggle('hidden', !text.includes(q));
        }});
        sections.forEach(sec => {{
          const visible = sec.querySelectorAll('li:not(.hidden)').length > 0;
          sec.style.display = visible ? '' : 'none';
        }});
      }});
    </script>
  </body>
</html>"""


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


def main() -> None:
    parser = argparse.ArgumentParser(description="AdsDB domain page generator")
    parser.add_argument(
        "--limit", type=int, default=0, help="Max domains to process (0 = all)"
    )
    parser.add_argument(
        "--domain", type=str, default="", help="Only generate for this domain"
    )
    parser.add_argument(
        "--no-index", action="store_true", help="Skip generating domain index page"
    )
    args = parser.parse_args()

    if not DB_DIR.exists():
        print(f"ERROR: DB directory not found: {DB_DIR}", file=sys.stderr)
        sys.exit(1)

    DOCS_DOMAIN_DIR.mkdir(parents=True, exist_ok=True)

    # Write the shared CSS file once (all pages reference it via <link>)
    css_file = DOCS_DOMAIN_DIR / "domain-styles.css"
    css_file.write_text(_css_content(), encoding="utf-8")
    print(f"Written shared CSS: {css_file}")

    processed = 0
    skipped_empty = 0
    errors = 0
    all_domains: list[tuple[str, str]] = []  # (domain, letter)

    print(f"Scanning {DB_DIR} ...")
    start_time = datetime.now()

    for letter_dir in sorted(DB_DIR.iterdir()):
        if not letter_dir.is_dir():
            continue
        letter = letter_dir.name

        for domain_dir in sorted(letter_dir.iterdir()):
            if not domain_dir.is_dir():
                continue

            domain = domain_dir.name

            # Filter by --domain if provided
            if args.domain and domain != args.domain:
                continue

            # Locate data files
            ads_path = domain_dir / "app-ads.txt"
            sellers_path = domain_dir / "sellers.json"

            has_ads_file = ads_path.exists()
            has_sellers_file = sellers_path.exists()

            if not has_ads_file and not has_sellers_file:
                skipped_empty += 1
                continue

            # Parse files
            ads_data: list[dict] | None = None
            if has_ads_file:
                try:
                    raw = ads_path.read_text(encoding="utf-8", errors="replace")
                    ads_data = parse_ads_txt(raw)
                except Exception as e:
                    print(f"  WARN: cannot read {ads_path}: {e}")
                    errors += 1

            sellers_raw: dict | None = None
            if has_sellers_file:
                try:
                    raw = sellers_path.read_text(encoding="utf-8", errors="replace")
                    sellers_raw = parse_sellers_json(raw)
                    if sellers_raw is None:
                        print(f"  WARN: invalid JSON in {sellers_path}")
                        errors += 1
                except Exception as e:
                    print(f"  WARN: cannot read {sellers_path}: {e}")
                    errors += 1

            # Generate HTML
            try:
                page_html = generate_domain_page(
                    domain=domain,
                    letter=letter,
                    ads_data=ads_data,
                    sellers_raw=sellers_raw,
                    ads_path=ads_path if has_ads_file else None,
                    sellers_path=sellers_path if has_sellers_file else None,
                )
            except Exception as e:
                print(f"  ERROR generating page for {domain}: {e}")
                errors += 1
                continue

            # Write output
            out_dir = DOCS_DOMAIN_DIR / domain
            out_dir.mkdir(parents=True, exist_ok=True)
            out_file = out_dir / "index.html"
            try:
                out_file.write_text(page_html, encoding="utf-8")
            except Exception as e:
                print(f"  ERROR writing {out_file}: {e}")
                errors += 1
                continue

            all_domains.append((domain, letter))
            processed += 1

            if processed % 500 == 0:
                elapsed = (datetime.now() - start_time).seconds
                print(f"  [{elapsed}s] {processed:,} domains processed ...")

            # Limit
            if args.limit and processed >= args.limit:
                print(f"  Reached --limit {args.limit}, stopping.")
                break

        if args.limit and processed >= args.limit:
            break

    # ── Generate index page ────────────────────────────────────────────────
    if not args.no_index and not args.domain:
        print("Generating domain index page ...")
        index_html = generate_domain_index(all_domains)
        index_file = DOCS_DOMAIN_DIR / "index.html"
        index_file.write_text(index_html, encoding="utf-8")
        print(f"  Written: {index_file}")

    # ── Summary ────────────────────────────────────────────────────────────
    elapsed = (datetime.now() - start_time).seconds
    print()
    print(f"Done in {elapsed}s.")
    print(f"  Pages generated : {processed:,}")
    print(f"  Empty (skipped) : {skipped_empty:,}")
    print(f"  Errors          : {errors}")
    print(f"  Output dir      : {DOCS_DOMAIN_DIR}")


if __name__ == "__main__":
    main()
