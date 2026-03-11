# AdsDB — The World's Largest Open-Source Database of app-ads.txt, ads.txt & sellers.json Files

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Update Frequency: Daily](https://img.shields.io/badge/Updated-Daily-green.svg)]()
[![Domains Indexed: 50,000+](https://img.shields.io/badge/Domains_Indexed-50%2C000%2B-blue.svg)]()
[![app-ads.txt Files: 49,000+](https://img.shields.io/badge/app--ads.txt_Files-49%2C000%2B-orange.svg)]()
[![sellers.json Files: 1,400+](https://img.shields.io/badge/sellers.json_Files-1%2C400%2B-purple.svg)]()

---

## Table of Contents

- [What is AdsDB?](#-what-is-adsdb)
- [Why AdsDB Exists](#-why-adsdb-exists--the-problem-it-solves)
- [Database Statistics at a Glance](#-database-statistics-at-a-glance)
- [Repository Structure & Navigation](#-repository-structure--how-to-navigate)
- [Complete Guide to app-ads.txt](#-complete-guide-to-app-adstxt)
- [Complete Guide to ads.txt](#-complete-guide-to-adstxt)
- [Complete Guide to sellers.json](#-complete-guide-to-sellersjson)
- [How ads.txt, app-ads.txt, and sellers.json Work Together](#-how-adstxt-app-adstxt-and-sellersjson-work-together)
- [Supply Chain Object (schain) Explained](#-supply-chain-object-schain-explained)
- [Use Cases — Who Is This For?](#-use-cases--who-is-this-for)
- [Ad Networks & SSPs Indexed in AdsDB](#-major-ad-networks--ssps-indexed-in-adsdb)
- [How to Use This Data](#-how-to-use-this-data)
- [Querying the Database with Code Examples](#-querying-the-database-with-code-examples)
- [Understanding the app-ads.txt File Format](#-understanding-the-app-adstxt-file-format-in-depth)
- [Understanding the sellers.json File Format](#-understanding-the-sellersjson-file-format-in-depth)
- [Ad Fraud Prevention with AdsDB](#-ad-fraud-prevention-with-adsdb)
- [Supply Path Optimization (SPO) with AdsDB](#-supply-path-optimization-spo-with-adsdb)
- [Programmatic Advertising Glossary](#-programmatic-advertising-glossary)
- [IAB Tech Lab Standards & Specifications](#-iab-tech-lab-standards--specifications)
- [Frequently Asked Questions (FAQ)](#-frequently-asked-questions-faq)
- [Contributing & Updates](#-contributing--updates)
- [Legal & Compliance](#%EF%B8%8F-legal--compliance)
- [Acknowledgements](#-acknowledgements)

---

## 🌟 What is AdsDB?

**AdsDB** is the most comprehensive, continuously updated, open-source repository of `app-ads.txt`, `ads.txt`, and `sellers.json` files ever assembled. We have scanned, crawled, and indexed the entire publicly accessible internet to build a single, unified database of every Authorized Digital Sellers file we can find — spanning over **50,000 domains**, containing more than **49,000 app-ads.txt files** and **1,400 sellers.json files**, totaling over **3 GB of raw advertising supply chain data**.

This is not a sample. This is not a demo. **This is the real, complete, continuously-updated programmatic advertising supply chain of the internet** — stored in a simple, navigable folder structure that anyone can clone, search, and analyze.

Whether you are a Demand-Side Platform (DSP) engineer validating bid requests, a Supply-Side Platform (SSP) compliance officer auditing your seller network, a data scientist researching the programmatic ecosystem, or a fraud analyst hunting for domain spoofing — AdsDB gives you the raw data you need without requiring you to build and maintain your own web crawler.

### Keywords & Topics Covered

> Authorized Digital Sellers, app-ads.txt database, ads.txt database, sellers.json database, programmatic advertising data, ad fraud prevention dataset, IAB Tech Lab compliance, RTB supply chain, supply path optimization data, SSP sellers list, DSP bid validation, ad exchange transparency, mobile app advertising authorization, CTV ads.txt, OTT advertising supply chain, digital advertising fraud detection, domain spoofing prevention, ad inventory authorization, publisher ad monetization, advertising supply chain verification, OpenRTB supply chain object, schain validation, seller ID lookup, publisher ID database, ad network directory, global advertising ecosystem data.

---

## 🎯 Why AdsDB Exists — The Problem It Solves

The digital advertising industry moves **$600+ billion per year** globally. With that much money flowing through automated real-time bidding systems, fraud and opacity are massive problems.

### The Scale of Ad Fraud

- **$84 billion** was lost to ad fraud globally in 2023 (Juniper Research)
- **1 in 5** programmatic ad impressions is estimated to be fraudulent
- **Domain spoofing** — where a bad actor pretends to be a premium publisher — accounts for billions in wasted ad spend annually
- **Unauthorized reselling** of ad inventory creates opaque supply chains where advertisers have no idea who they're actually buying from

### The IAB's Solution: Transparency Files

The [IAB Tech Lab](https://iabtechlab.com/) created three interconnected specifications to combat this:

| File | Hosted By | Purpose |
|------|-----------|---------|
| `ads.txt` | Website Publishers | Lists authorized sellers of the publisher's web inventory |
| `app-ads.txt` | App Developers (on their developer website) | Lists authorized sellers of the developer's in-app inventory |
| `sellers.json` | Ad Exchanges / SSPs | Lists all publishers and intermediaries the exchange sells on behalf of |

**The problem?** These files are scattered across hundreds of thousands of individual websites. To build a complete picture of the supply chain, you would need to:

1. Maintain a list of every publisher domain and app developer website on the internet
2. Continuously crawl each one to fetch their `ads.txt` / `app-ads.txt` files
3. Continuously crawl every SSP and ad exchange to fetch their `sellers.json`
4. Parse, normalize, and store all of this data
5. Keep it all up to date as publishers and exchanges modify their files daily

**AdsDB does all of this for you.** We crawl the internet, collect the files, and store them in a clean, browsable, Git-based database that you can clone and query instantly.

---

## 📊 Database Statistics at a Glance

| Metric | Count |
|--------|-------|
| **Total domains indexed** | 50,133+ |
| **app-ads.txt files collected** | 49,051+ |
| **sellers.json files collected** | 1,418+ |
| **Valid ASI (Authorized Sellers for Internet) domains** | 3,278+ |
| **Valid publisher domains** | 379,897+ |
| **Total publisher domains scanned** | 457,888+ |
| **Total database size** | 3.1 GB+ |
| **Alphabetical index folders** | 36 (a-z, 0-9) |

These numbers grow daily as new publishers, app developers, SSPs, and ad exchanges are discovered and crawled.

---

## 📂 Repository Structure & How to Navigate

AdsDB organizes the entire internet's advertising authorization data into a simple, deterministic folder structure based on the first character of each domain name.

### Folder Layout

```
db/
├── 0/                          # Domains starting with '0'
│   ├── 001.games/
│   │   └── app-ads.txt
│   └── ...
├── 1/                          # Domains starting with '1'
├── 2/
├── ...
├── 9/
├── a/                          # Domains starting with 'a'
│   ├── adcolony.com/
│   │   └── sellers.json
│   ├── appnexus.com/
│   │   └── sellers.json
│   ├── applovin.com/
│   │   ├── app-ads.txt
│   │   └── sellers.json
│   └── ...
├── b/
├── c/
│   ├── chartboost.com/
│   │   └── sellers.json
│   └── ...
├── ...
├── g/
│   ├── google.com/
│   │   └── sellers.json
│   └── ...
├── i/
│   ├── indexexchange.com/
│   │   └── sellers.json
│   ├── inmobi.com/
│   │   └── sellers.json
│   ├── ironsrc.com/
│   │   └── sellers.json
│   └── ...
├── ...
├── m/
│   ├── mintegral.com/
│   │   └── sellers.json
│   └── ...
├── o/
│   ├── openx.com/
│   │   └── sellers.json
│   └── ...
├── ...
├── u/
│   ├── unity.com/
│   │   └── sellers.json
│   └── ...
├── v/
│   ├── vungle.com/
│   │   └── sellers.json
│   └── ...
├── ...
└── z/
```

### The Pattern

```
db/{first-character-of-domain}/{full-domain-name}/app-ads.txt
db/{first-character-of-domain}/{full-domain-name}/sellers.json
```

### Quick Lookup Examples

| What You're Looking For | Path |
|-------------------------|------|
| Google's sellers.json | `db/g/google.com/sellers.json` |
| OpenX's sellers.json | `db/o/openx.com/sellers.json` |
| Index Exchange sellers.json | `db/i/indexexchange.com/sellers.json` |
| Unity Ads sellers.json | `db/u/unity.com/sellers.json` |
| IronSource sellers.json | `db/i/ironsrc.com/sellers.json` |
| InMobi sellers.json | `db/i/inmobi.com/sellers.json` |
| Chartboost sellers.json | `db/c/chartboost.com/sellers.json` |
| Vungle sellers.json | `db/v/vungle.com/sellers.json` |
| Mintegral sellers.json | `db/m/mintegral.com/sellers.json` |
| AppLovin's app-ads.txt and sellers.json | `db/a/applovin.com/` |

### Domains Per Letter

| Letter | Domains | Letter | Domains | Letter | Domains |
|--------|---------|--------|---------|--------|---------|
| **a** | 3,688 | **m** | 3,828 | **w** | 1,645 |
| **b** | 2,597 | **n** | 1,643 | **x** | 201 |
| **c** | 3,145 | **o** | 1,032 | **y** | 541 |
| **d** | 2,233 | **p** | 2,766 | **z** | 488 |
| **e** | 1,657 | **q** | 332 | **0** | 14 |
| **f** | 2,260 | **r** | 1,911 | **1** | 168 |
| **g** | 2,266 | **s** | 4,317 | **2** | 91 |
| **h** | 1,809 | **t** | 3,648 | **3-9** | 352 |
| **i** | 1,549 | **u** | 553 | | |
| **j** | 913 | **v** | 1,145 | | |
| **k** | 1,520 | | | | |
| **l** | 1,821 | | | | |

### Additional Index Files

| File | Description |
|------|-------------|
| `asi_domains.txt` | Full list of all ASI (ad system) domains scanned |
| `asi_domains_valid.txt` | 3,278 validated ASI domains that returned valid files |
| `publisher_domains.txt` | Full list of 457,888 publisher domains scanned |
| `publisher_domains_valid.txt` | 379,897 validated publisher domains |

---

## 📋 Complete Guide to app-ads.txt

### What is app-ads.txt?

**app-ads.txt** (Authorized Digital Sellers for Applications) is a text file that mobile app developers and publishers host on their developer website to publicly declare which advertising systems, exchanges, and resellers are authorized to sell their in-app ad inventory.

It was introduced by the **IAB Tech Lab** in **2019** as an extension of the original `ads.txt` specification, adapted specifically for the mobile app and Connected TV (CTV) ecosystem.

### Why Does app-ads.txt Exist?

In the mobile app world, ad inventory is sold through intermediaries — the app developer doesn't directly negotiate with every advertiser. Instead, they use monetization SDKs (like AdMob, AppLovin MAX, IronSource, Unity Ads) which connect to ad exchanges that run real-time auctions.

**The problem:** Without `app-ads.txt`, a bad actor could claim to be selling inventory for a popular app (say, a game with millions of downloads) without actually having any relationship with the app developer. Advertisers would bid on this fake inventory and waste their money on impressions that were never shown to real users inside the real app.

**app-ads.txt solves this** by creating a public, machine-readable declaration: *"These are the ONLY companies authorized to sell my ad inventory."*

### Where is app-ads.txt Hosted?

Unlike `ads.txt` (which is hosted on the publisher's website), `app-ads.txt` is hosted on the **developer website** listed in the app store.

- On the **Google Play Store**, the developer website is listed in the app's store listing
- On the **Apple App Store**, the developer website is found in the app's metadata

For example, if an app developer's website is `https://example-games.com`, then their `app-ads.txt` file would be at:
```
https://example-games.com/app-ads.txt
```

### How DSPs and Ad Exchanges Use app-ads.txt

When a DSP receives a bid request for an in-app ad impression, the bid request contains:
1. The **app bundle ID** (e.g., `com.example.mygame`)
2. The **publisher domain** or **store URL**

The DSP then:
1. Looks up the app in the app store to find the developer website
2. Fetches the `app-ads.txt` file from that website
3. Checks whether the exchange sending the bid request is listed as an authorized seller
4. If the exchange is NOT listed → the bid request is rejected as potentially fraudulent

### app-ads.txt Adoption Statistics

As of 2024:
- Over **80%** of top-grossing mobile apps on Google Play have an `app-ads.txt` file
- Over **70%** of top-grossing iOS apps have an `app-ads.txt` file
- Major DSPs like **The Trade Desk**, **DV360 (Google)**, and **MediaMath** require valid `app-ads.txt` before bidding
- Ad networks like **AdMob**, **AppLovin**, **Unity Ads**, **IronSource**, and **Vungle** all participate in the `app-ads.txt` ecosystem

**AdsDB contains 49,051+ app-ads.txt files** — making it the largest publicly available collection of app-ads.txt data in existence.

---

## 📋 Complete Guide to ads.txt

### What is ads.txt?

**ads.txt** (Authorized Digital Sellers) is a simple text file that web publishers place at the root of their domain to publicly declare which companies are authorized to sell their digital advertising inventory.

Originally proposed by the **IAB Tech Lab** in **2017**, ads.txt was the first of the transparency files designed to combat ad fraud in the programmatic advertising supply chain.

### How ads.txt Works

A publisher like `example-news.com` places a file at:
```
https://example-news.com/ads.txt
```

This file contains a list of entries, each representing an authorized seller. Each line contains:
- The **domain** of the advertising system (SSP/exchange)
- The **publisher's account ID** within that system
- The **relationship type** (`DIRECT` or `RESELLER`)
- An optional **certification authority ID** (typically the TAG ID)

### Example ads.txt Entry

```
google.com, pub-1234567890, DIRECT, f08c47fec0942fa0
indexexchange.com, 12345, RESELLER, 50b1c356f2c5c8fc
openx.com, 67890, RESELLER, a698e2ec2f3ecb1b
```

This tells the world:
- Google is authorized to **directly** sell this publisher's inventory (they have a direct account)
- Index Exchange and OpenX are authorized **resellers** (they sell the inventory through intermediary relationships)

### ads.txt vs app-ads.txt

| Feature | ads.txt | app-ads.txt |
|---------|---------|-------------|
| **Introduced** | 2017 | 2019 |
| **For** | Websites / Web Publishers | Mobile Apps / CTV Apps |
| **Hosted at** | Publisher's website root | App developer's website |
| **Verified via** | Domain of the website | Developer website from App Store listing |
| **Format** | Identical | Identical |
| **Adoption** | ~90% of top 1000 websites | ~80% of top-grossing apps |

### The Impact of ads.txt on the Industry

Since its introduction, ads.txt has:
- **Reduced domain spoofing** by an estimated 10-15% industry-wide
- Become a **requirement** for major DSPs before they will bid on inventory
- Led to the creation of the entire IAB transparency stack (app-ads.txt, sellers.json, SupplyChain object)
- Empowered publishers to publicly control who profits from their content

---

## 📋 Complete Guide to sellers.json

### What is sellers.json?

**sellers.json** is a JSON file hosted by advertising exchanges, Supply-Side Platforms (SSPs), and ad networks that lists all of the publishers, app developers, and intermediaries they are authorized to sell ad inventory on behalf of.

While `ads.txt` and `app-ads.txt` are the **publisher's declaration** ("these exchanges can sell my inventory"), `sellers.json` is the **exchange's declaration** ("these are the publishers and intermediaries whose inventory I sell").

Together, they form a **two-way verification system** — a publisher says "Exchange X can sell my ads," and Exchange X says "Publisher Y is in my network." If both match, the supply path is verified.

### Where is sellers.json Hosted?

Every SSP and ad exchange that participates in OpenRTB is expected to host a `sellers.json` file at their domain root:

```
https://google.com/sellers.json
https://openx.com/sellers.json
https://indexexchange.com/sellers.json
https://pubmatic.com/sellers.json
https://rubiconproject.com/sellers.json
```

### sellers.json File Size

sellers.json files can be **massive**. Major exchanges like Google, PubMatic, and Index Exchange have sellers.json files that are **tens of megabytes to over 100 MB** in size because they list hundreds of thousands of sellers.

**AdsDB stores all of these files**, including the very large ones via Git LFS (Large File Storage).

### What's Inside a sellers.json File?

A sellers.json file contains:
- **Contact information** for the exchange
- An **array of sellers**, where each seller has:
  - `seller_id` — the account ID (matches the account ID in ads.txt/app-ads.txt)
  - `seller_type` — `PUBLISHER`, `INTERMEDIARY`, or `BOTH`
  - `name` — the name of the seller
  - `domain` — the domain of the seller
  - `is_confidential` — whether the seller's identity is hidden
  - `is_passthrough` — whether the exchange passes through to another exchange

### Example sellers.json Structure

```json
{
  "contact_email": "adops@example-exchange.com",
  "contact_address": "123 Ad Street, New York, NY",
  "version": "1.0",
  "identifiers": [
    {
      "name": "TAG-ID",
      "value": "abc123def456"
    }
  ],
  "sellers": [
    {
      "seller_id": "pub-1234567890",
      "seller_type": "PUBLISHER",
      "name": "Example News Corp",
      "domain": "example-news.com",
      "is_confidential": 0
    },
    {
      "seller_id": "reseller-9999",
      "seller_type": "INTERMEDIARY",
      "name": "Ad Reseller Inc",
      "domain": "adreseller.com",
      "is_confidential": 0
    }
  ]
}
```

**AdsDB contains 1,418+ sellers.json files** from SSPs and ad exchanges across the globe — from the biggest players like Google and OpenX to regional networks across Europe, Asia, Latin America, and Africa.

---

## 🔗 How ads.txt, app-ads.txt, and sellers.json Work Together

The true power of the IAB transparency stack is realized when all three files are used together to **verify the entire supply chain** from publisher to advertiser.

### The Complete Verification Flow

```
┌─────────────────┐
│  APP DEVELOPER   │
│  example-dev.com │
│                  │
│ app-ads.txt says:│
│ "exchange.com,   │
│  pub-123, DIRECT"│
└────────┬─────────┘
         │
         │ ① Developer declares Exchange as authorized
         ▼
┌─────────────────┐
│  AD EXCHANGE     │
│  exchange.com    │
│                  │
│ sellers.json:    │
│ seller_id:pub-123│
│ type: PUBLISHER  │
│ domain:          │
│  example-dev.com │
└────────┬─────────┘
         │
         │ ② Exchange confirms Developer is a real seller
         ▼
┌─────────────────┐
│  DSP / BUYER     │
│                  │
│ Receives bid     │
│ request from     │
│ exchange.com     │
│                  │
│ ③ DSP checks:   │
│ - app-ads.txt ✓  │
│ - sellers.json ✓ │
│ - Both match ✓   │
│ → SAFE TO BID    │
└─────────────────┘
```

### Cross-Referencing with AdsDB

With AdsDB, you can automate this entire verification flow:

1. **Read the publisher's app-ads.txt** from `db/{letter}/{domain}/app-ads.txt`
2. **Extract all authorized exchanges and their account IDs**
3. **Read each exchange's sellers.json** from `db/{letter}/{exchange-domain}/sellers.json`
4. **Cross-reference the account IDs** to verify the supply chain
5. **Flag any mismatches** — these are potential fraud indicators

This is the foundation of **Supply Path Optimization (SPO)** and **supply chain verification**, two of the most important processes in modern programmatic advertising.

---

## ⛓ Supply Chain Object (schain) Explained

### What is the SupplyChain Object?

The **SupplyChain object** (commonly called **schain**) is an OpenRTB extension that allows each participant in the ad supply chain to add a "node" representing themselves, creating a complete, ordered list of every intermediary between the publisher and the DSP.

### How schain Relates to ads.txt and sellers.json

- **ads.txt / app-ads.txt** tell you WHO is authorized
- **sellers.json** tells you WHO the exchange works with
- **schain** tells you the EXACT PATH a specific bid request traveled through

AdsDB provides the reference data needed to validate each node in an schain:
- Look up the exchange's `sellers.json` in AdsDB to verify the `asi` (advertising system identifier) and `sid` (seller ID) in each schain node
- Cross-reference with the publisher's `app-ads.txt` in AdsDB to confirm authorization

### schain Validation Example

When a DSP receives an schain like:

```json
{
  "schain": {
    "ver": "1.0",
    "complete": 1,
    "nodes": [
      {
        "asi": "exchange1.com",
        "sid": "pub-111",
        "hp": 1
      },
      {
        "asi": "exchange2.com",
        "sid": "reseller-222",
        "hp": 1
      }
    ]
  }
}
```

Using AdsDB, you can:
1. Open `db/e/exchange1.com/sellers.json` → verify `pub-111` exists and is a PUBLISHER
2. Open `db/e/exchange2.com/sellers.json` → verify `reseller-222` exists and is an INTERMEDIARY
3. Check the publisher's `app-ads.txt` → verify both exchanges are listed

---

## 🎯 Use Cases — Who Is This For?

### 1. Demand-Side Platforms (DSPs) — Bid Validation & Fraud Filtering

If you operate a DSP, you process millions of bid requests per second. Each bid request claims to come from a specific publisher via a specific exchange. **AdsDB gives you the ground truth** to verify these claims.

**How DSPs use AdsDB:**
- Pre-load all `app-ads.txt` and `sellers.json` data into your bidding infrastructure
- Before bidding, verify that the exchange in the bid request is authorized by the publisher
- Cross-reference the seller ID in the bid request with the exchange's `sellers.json`
- Reject bid requests where the supply chain cannot be verified
- Reduce wasted ad spend on fraudulent or unauthorized inventory

### 2. Supply-Side Platforms (SSPs) & Ad Exchanges — Compliance Auditing

If you operate an SSP or ad exchange, your `sellers.json` file is one of the most important compliance documents you maintain.

**How SSPs use AdsDB:**
- Audit your own `sellers.json` against your publishers' `ads.txt` and `app-ads.txt` files
- Ensure every publisher in your network has listed you in their authorization file
- Identify publishers who have removed you from their `ads.txt` (lost accounts)
- Benchmark your seller count against competitors
- Discover new publisher relationships by scanning `app-ads.txt` files that reference your domain

### 3. Ad Fraud Prevention Teams — Threat Intelligence

Ad fraud analysts need comprehensive data to detect patterns of unauthorized selling, domain spoofing, and supply chain manipulation.

**How fraud teams use AdsDB:**
- Detect **seller ID reuse** — the same seller ID appearing across multiple unrelated publishers
- Find **orphaned sellers** — entries in `sellers.json` that don't match any publisher's `ads.txt`
- Identify **ghost exchanges** — exchanges listed in `app-ads.txt` files that don't have a valid `sellers.json`
- Track **authorization changes over time** by monitoring diffs in the Git history
- Build **network graphs** of the supply chain to visualize suspicious intermediary patterns

### 4. Publishers & App Developers — Competitive Intelligence

Publishers can use AdsDB to understand how their competitors monetize.

**How publishers use AdsDB:**
- See which ad networks your competitors are using
- Discover new monetization partners you haven't considered
- Verify that your own `ads.txt` / `app-ads.txt` is correctly formatted and up to date
- Check if unauthorized parties are claiming to sell your inventory

### 5. Data Scientists & Researchers — Ecosystem Analysis

AdsDB is a gold mine for academic research and data analysis of the programmatic advertising ecosystem.

**Research questions you can answer with AdsDB:**
- What is the market share of different SSPs by number of publisher relationships?
- How concentrated is the ad exchange market? (Herfindahl-Hirschman Index)
- What percentage of publishers use DIRECT vs RESELLER relationships?
- How does `app-ads.txt` adoption vary by country/region?
- What is the average number of authorized sellers per publisher?
- How quickly do publishers update their authorization files?
- What does the global ad supply chain network graph look like?

### 6. Mobile App Developers — Monetization Setup Verification

If you're integrating ad SDKs into your mobile app, you need a properly formatted `app-ads.txt` file.

**How app developers use AdsDB:**
- Reference real-world `app-ads.txt` files from established apps to see how they're structured
- Verify that the seller IDs provided by your ad network match their `sellers.json`
- Ensure your `app-ads.txt` is complete — missing entries mean DSPs won't bid on your inventory

### 7. Advertising Regulators & Industry Bodies

Regulatory bodies and industry organizations can use AdsDB to monitor compliance with transparency standards.

**How regulators use AdsDB:**
- Measure adoption rates of `ads.txt`, `app-ads.txt`, and `sellers.json` across the industry
- Identify non-compliant exchanges that don't publish a `sellers.json`
- Audit the accuracy of transparency files (e.g., sellers marked as `is_confidential`)
- Track the health and transparency of the programmatic advertising ecosystem

---

## 🏢 Major Ad Networks & SSPs Indexed in AdsDB

AdsDB contains `sellers.json` files from all major advertising platforms, including but not limited to:

### Global Tier-1 SSPs & Exchanges

| Company | Domain | File |
|---------|--------|------|
| **Google (AdMob, AdX, AdSense)** | google.com | `db/g/google.com/sellers.json` |
| **OpenX** | openx.com | `db/o/openx.com/sellers.json` |
| **Index Exchange** | indexexchange.com | `db/i/indexexchange.com/sellers.json` |
| **AppNexus (Xandr/Microsoft)** | appnexus.com | `db/a/appnexus.com/sellers.json` |
| **Magnite (Rubicon Project)** | rubiconproject.com | `db/r/rubiconproject.com/sellers.json` |

### Mobile & In-App Focused

| Company | Domain | File |
|---------|--------|------|
| **Unity Ads** | unity.com | `db/u/unity.com/sellers.json` |
| **IronSource (Unity)** | ironsrc.com | `db/i/ironsrc.com/sellers.json` |
| **InMobi** | inmobi.com | `db/i/inmobi.com/sellers.json` |
| **Mintegral** | mintegral.com | `db/m/mintegral.com/sellers.json` |
| **Liftoff (Vungle)** | liftoff.io | `db/l/liftoff.io/sellers.json` |
| **Vungle** | vungle.com | `db/v/vungle.com/sellers.json` |
| **Chartboost** | chartboost.com | `db/c/chartboost.com/sellers.json` |
| **AppLovin** | applovin.com | `db/a/applovin.com/sellers.json` |

### RTB & Programmatic Specialists

| Company | Domain | File |
|---------|--------|------|
| **RTB House** | rtbhouse.com | `db/r/rtbhouse.com/sellers.json` |
| **Rakuten** | rakuten.com | `db/r/rakuten.com/sellers.json` |
| **Roku** | roku.com | `db/r/roku.com/sellers.json` |
| **RevContent** | revcontent.com | `db/r/revcontent.com/sellers.json` |
| **Rich Audience** | richaudience.com | `db/r/richaudience.com/sellers.json` |

And **1,400+ more** exchanges, networks, and intermediaries from every region of the world.

---

## 🚀 How to Use This Data

### Prerequisites

Because some `sellers.json` files exceed 100 MB, this repository uses **Git LFS (Large File Storage)**. Make sure you have it installed.

### Cloning the Repository

```bash
# Step 1: Install Git LFS (if not already installed)
git lfs install

# Step 2: Clone the full AdsDB repository
git clone https://github.com/KONTRUSTMEDIA/adsdb.git

# Step 3: Navigate into the database
cd adsdb/db/
```

### Quick Search with Command-Line Tools

```bash
# Find all sellers.json files
find db/ -name "sellers.json" -type f

# Find all app-ads.txt files
find db/ -name "app-ads.txt" -type f

# Search for a specific ad network across all app-ads.txt files
grep -r "google.com" db/ --include="app-ads.txt" | head -20

# Search for a specific publisher in all sellers.json files
grep -r "example-publisher.com" db/ --include="sellers.json"

# Count how many publishers authorize Google AdMob
grep -rl "google.com" db/ --include="app-ads.txt" | wc -l

# Find all DIRECT relationships in a specific app-ads.txt
grep "DIRECT" db/a/applovin.com/app-ads.txt
```

### Parsing sellers.json with jq

```bash
# List all seller IDs in Google's sellers.json
jq '.sellers[].seller_id' db/g/google.com/sellers.json

# Find a specific seller by domain
jq '.sellers[] | select(.domain == "example.com")' db/g/google.com/sellers.json

# Count total sellers in an exchange's sellers.json
jq '.sellers | length' db/o/openx.com/sellers.json

# List all PUBLISHER type sellers
jq '.sellers[] | select(.seller_type == "PUBLISHER")' db/i/indexexchange.com/sellers.json

# Find confidential sellers
jq '.sellers[] | select(.is_confidential == 1)' db/g/google.com/sellers.json
```

---

## 💻 Querying the Database with Code Examples

### Python: Load and Analyze app-ads.txt

```python
import os
import csv
from collections import Counter

def parse_app_ads_txt(filepath):
    """Parse an app-ads.txt file and return structured entries."""
    entries = []
    with open(filepath, 'r', errors='ignore') as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            parts = [p.strip() for p in line.split(',')]
            if len(parts) >= 3:
                entries.append({
                    'domain': parts[0].lower(),
                    'account_id': parts[1],
                    'relationship': parts[2].upper(),
                    'authority_id': parts[3] if len(parts) > 3 else None
                })
    return entries

# Example: Find the most popular ad networks across all app-ads.txt files
network_counter = Counter()
db_path = 'db/'

for letter_dir in os.listdir(db_path):
    letter_path = os.path.join(db_path, letter_dir)
    if not os.path.isdir(letter_path):
        continue
    for domain_dir in os.listdir(letter_path):
        ads_file = os.path.join(letter_path, domain_dir, 'app-ads.txt')
        if os.path.exists(ads_file):
            entries = parse_app_ads_txt(ads_file)
            for entry in entries:
                network_counter[entry['domain']] += 1

# Print top 20 most referenced ad networks
for network, count in network_counter.most_common(20):
    print(f"{network}: {count} publishers")
```

### Python: Cross-Reference app-ads.txt with sellers.json

```python
import json
import os

def load_sellers_json(filepath):
    """Load a sellers.json file and return a dict of seller_id -> seller_info."""
    with open(filepath, 'r', errors='ignore') as f:
        data = json.load(f)
    sellers = {}
    for seller in data.get('sellers', []):
        sellers[str(seller.get('seller_id', ''))] = seller
    return sellers

def verify_supply_chain(publisher_domain, exchange_domain, account_id):
    """Verify that a supply chain entry is valid using AdsDB data."""
    # Check publisher's app-ads.txt
    first_char = publisher_domain[0].lower()
    ads_path = f'db/{first_char}/{publisher_domain}/app-ads.txt'

    if not os.path.exists(ads_path):
        return 'NO_ADS_TXT'

    entries = parse_app_ads_txt(ads_path)
    authorized = any(
        e['domain'] == exchange_domain and e['account_id'] == account_id
        for e in entries
    )

    if not authorized:
        return 'NOT_AUTHORIZED'

    # Check exchange's sellers.json
    ex_first_char = exchange_domain[0].lower()
    sellers_path = f'db/{ex_first_char}/{exchange_domain}/sellers.json'

    if not os.path.exists(sellers_path):
        return 'NO_SELLERS_JSON'

    sellers = load_sellers_json(sellers_path)
    if account_id in sellers:
        return 'VERIFIED'
    else:
        return 'SELLER_NOT_FOUND'

# Example usage
result = verify_supply_chain('example-app.com', 'google.com', 'pub-1234567890')
print(f"Verification result: {result}")
```

### Node.js: Stream-Parse Large sellers.json Files

```javascript
const fs = require('fs');
const path = require('path');
const { createReadStream } = require('fs');

// For very large sellers.json files, use streaming JSON parser
const JSONStream = require('JSONStream');

function streamSellersJson(exchangeDomain) {
  const firstChar = exchangeDomain[0].toLowerCase();
  const filePath = path.join('db', firstChar, exchangeDomain, 'sellers.json');

  return new Promise((resolve, reject) => {
    const sellers = [];
    createReadStream(filePath)
      .pipe(JSONStream.parse('sellers.*'))
      .on('data', (seller) => {
        sellers.push(seller);
      })
      .on('end', () => resolve(sellers))
      .on('error', reject);
  });
}

// Example: Find all publishers in an exchange
async function main() {
  const sellers = await streamSellersJson('openx.com');
  const publishers = sellers.filter(s => s.seller_type === 'PUBLISHER');
  console.log(`OpenX has ${publishers.length} direct publishers`);
  console.log(`OpenX has ${sellers.length} total sellers`);
}

main().catch(console.error);
```

### Bash: Generate a Report of All Authorized Sellers for a Domain

```bash
#!/bin/bash
DOMAIN=$1
FIRST_CHAR=$(echo "$DOMAIN" | cut -c1 | tr '[:upper:]' '[:lower:]')
ADS_FILE="db/${FIRST_CHAR}/${DOMAIN}/app-ads.txt"

if [ ! -f "$ADS_FILE" ]; then
    echo "No app-ads.txt found for $DOMAIN"
    exit 1
fi

echo "=== Authorized Sellers for $DOMAIN ==="
echo ""
echo "DIRECT relationships:"
grep -i "DIRECT" "$ADS_FILE" | grep -v "^#" | sort
echo ""
echo "RESELLER relationships:"
grep -i "RESELLER" "$ADS_FILE" | grep -v "^#" | sort
echo ""
echo "Total DIRECT: $(grep -ci 'DIRECT' "$ADS_FILE")"
echo "Total RESELLER: $(grep -ci 'RESELLER' "$ADS_FILE")"
```

---

## 📝 Understanding the app-ads.txt File Format In Depth

### Line Format

Each non-comment, non-empty line in an `app-ads.txt` (or `ads.txt`) file follows this format:

```
<exchange_domain>, <seller_account_id>, <relationship_type>, [<authority_id>]
```

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `exchange_domain` | Yes | The domain of the advertising system (SSP/exchange) | `google.com` |
| `seller_account_id` | Yes | The publisher's account ID within that system | `pub-1234567890` |
| `relationship_type` | Yes | `DIRECT` or `RESELLER` | `DIRECT` |
| `authority_id` | No | TAG (Trustworthy Accountability Group) certification ID | `f08c47fec0942fa0` |

### Relationship Types Explained

- **DIRECT** — The publisher has a direct business relationship with the advertising system. The publisher's account is directly registered with the exchange. This is the most transparent and trusted relationship type.

- **RESELLER** — The publisher's inventory is available through this exchange via an intermediary (reseller). The publisher does not have a direct account; instead, another company resells their inventory through this exchange. While legitimate, RESELLER entries add complexity to the supply chain and are more susceptible to fraud.

### Special Directives

app-ads.txt files can also contain special directives:

```
# This is a comment
CONTACT=adops@example.com
SUBDOMAIN=other.example.com
INVENTORYPARTNERDOMAIN=partner.com
MANAGERDOMAIN=manager.com
OWNERDOMAIN=owner.com
```

| Directive | Purpose |
|-----------|---------|
| `CONTACT` | Contact email for the publisher's ad operations team |
| `SUBDOMAIN` | References another domain where additional ads.txt entries exist |
| `INVENTORYPARTNERDOMAIN` | Declares a partner who may also list authorized sellers |
| `MANAGERDOMAIN` | Declares the domain that manages this publisher's ads.txt |
| `OWNERDOMAIN` | Declares the parent domain that owns this publisher |

### Common Pitfalls in app-ads.txt Files

1. **Wrong domain format** — Using `www.google.com` instead of `google.com`
2. **Incorrect seller IDs** — Typos in the account ID prevent verification
3. **Missing entries** — Not listing all the exchanges you work with means DSPs won't bid on your inventory through those exchanges
4. **Stale entries** — Listing exchanges you no longer work with creates confusion
5. **Incorrect relationship type** — Marking a RESELLER as DIRECT or vice versa

---

## 📝 Understanding the sellers.json File Format In Depth

### Top-Level Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `contact_email` | string | Recommended | Email for the exchange's operations team |
| `contact_address` | string | Optional | Physical address of the exchange |
| `version` | string | Required | Version of the sellers.json spec being used |
| `identifiers` | array | Optional | Array of industry identifiers (e.g., TAG ID) |
| `sellers` | array | Required | Array of seller objects |

### Seller Object Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `seller_id` | string | Required | Unique ID for this seller within the exchange (matches the account ID in ads.txt/app-ads.txt) |
| `seller_type` | string | Required | `PUBLISHER`, `INTERMEDIARY`, or `BOTH` |
| `name` | string | Conditionally Required | Name of the seller (required unless `is_confidential` is 1) |
| `domain` | string | Conditionally Required | Domain of the seller (required unless `is_confidential` is 1) |
| `is_confidential` | integer | Optional | 0 = public, 1 = identity hidden |
| `is_passthrough` | integer | Optional | 1 = this seller passes through to another exchange |

### Seller Types Explained

- **PUBLISHER** — This seller is a publisher or app developer that directly owns the ad inventory being sold. This is the origin of the supply chain.

- **INTERMEDIARY** — This seller is an intermediary (reseller, ad network, or another exchange) that resells inventory from other publishers. They add a layer to the supply chain.

- **BOTH** — This seller acts as both a publisher (for some inventory) and an intermediary (for other inventory).

### Confidential Sellers

Some sellers are marked as `is_confidential: 1`. This means the exchange has chosen not to publicly disclose the seller's name and domain. While this is allowed by the spec, it reduces transparency and can be a red flag for fraud analysts.

---

## 🛡 Ad Fraud Prevention with AdsDB

### Types of Ad Fraud That AdsDB Helps Detect

#### 1. Domain Spoofing

**What it is:** A fraudster creates bid requests claiming to be from a premium publisher (e.g., CNN, ESPN, New York Times) when the ad is actually shown on a low-quality or non-existent website.

**How AdsDB helps:** By checking the publisher's `app-ads.txt` against the exchange in the bid request, you can verify whether the exchange is actually authorized to sell that publisher's inventory. If the exchange isn't listed → the bid request is likely spoofed.

#### 2. Unauthorized Reselling

**What it is:** An entity sells ad inventory they don't have permission to sell, often by inserting themselves as a middleman without the publisher's knowledge.

**How AdsDB helps:** Cross-reference `app-ads.txt` entries (publisher side) with `sellers.json` entries (exchange side). If a seller appears in `sellers.json` but the corresponding publisher's `app-ads.txt` doesn't authorize that exchange, the relationship is unauthorized.

#### 3. Seller ID Spoofing

**What it is:** A fraudster uses a legitimate publisher's seller ID in bid requests, pretending to be that publisher within an exchange's system.

**How AdsDB helps:** By checking the exchange's `sellers.json`, you can verify that the seller ID maps to the expected publisher domain. If the domain in `sellers.json` doesn't match the domain in the bid request → fraud.

#### 4. Ghost Exchanges

**What it is:** A fake exchange that exists in `app-ads.txt` files but doesn't actually operate a legitimate ad exchange. They may be used as part of a laundering chain.

**How AdsDB helps:** If an exchange domain appears in many publishers' `app-ads.txt` files but has no `sellers.json` file, it's a potential ghost exchange. AdsDB makes this easy to detect.

#### 5. Supply Chain Laundering

**What it is:** Fraudulent inventory is passed through multiple intermediaries to obscure its true origin, making it appear to come from a legitimate source.

**How AdsDB helps:** By mapping the full supply chain using `sellers.json` data, you can trace INTERMEDIARY → INTERMEDIARY → INTERMEDIARY chains and flag excessively long or circular supply paths.

### Building a Fraud Detection Pipeline with AdsDB

```
┌─────────────────────────────────────────┐
│           AdsDB Data Ingestion          │
│                                         │
│  1. Clone/pull latest AdsDB repository  │
│  2. Parse all app-ads.txt files         │
│  3. Parse all sellers.json files        │
│  4. Load into your database/data lake   │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│        Cross-Reference Engine           │
│                                         │
│  For each publisher-exchange pair:      │
│  • Is the exchange in app-ads.txt? ───→ │
│  • Is the publisher in sellers.json? ──→│
│  • Do the seller IDs match?            │
│  • Is the seller confidential?         │
│  • What's the relationship type?       │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│         Anomaly Detection               │
│                                         │
│  Flag:                                  │
│  • Mismatched entries                   │
│  • Missing sellers.json files           │
│  • Excessive confidential sellers       │
│  • Circular supply chains              │
│  • Sudden changes in authorization     │
│  • Seller IDs shared across unrelated  │
│    publishers                          │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│         Real-Time Bid Filtering         │
│                                         │
│  When a bid request arrives:            │
│  • Look up the supply chain            │
│  • Check against the AdsDB-derived     │
│    authorization database              │
│  • Block fraudulent requests           │
│  • Log suspicious patterns             │
└─────────────────────────────────────────┘
```

---

## 📈 Supply Path Optimization (SPO) with AdsDB

### What is Supply Path Optimization?

**Supply Path Optimization (SPO)** is the practice of reducing the number of intermediaries between an advertiser and a publisher to minimize fees, reduce latency, and increase transparency.

In programmatic advertising, the same ad impression can often be purchased through multiple supply paths:

```
Path A: Publisher → SSP1 → DSP                    (1 hop, lowest fees)
Path B: Publisher → SSP1 → SSP2 → DSP             (2 hops, medium fees)
Path C: Publisher → SSP1 → Reseller → SSP3 → DSP  (3 hops, highest fees)
```

All three paths lead to the same impression, but Path A is the most efficient. **SPO is about identifying and preferring Path A.**

### How AdsDB Enables SPO

With AdsDB's data, you can:

1. **Map all available supply paths** for a given publisher by reading their `app-ads.txt` to see all authorized exchanges
2. **Identify DIRECT vs RESELLER relationships** — DIRECT paths are shorter and typically cheaper
3. **Trace intermediary chains** by looking at INTERMEDIARY entries in `sellers.json` files
4. **Score supply paths** based on transparency, number of hops, and authorization completeness
5. **Build a global supply path graph** across all 50,000+ domains to understand the macro structure of the programmatic supply chain

### SPO Metrics You Can Calculate with AdsDB

| Metric | Description | How to Calculate |
|--------|-------------|------------------|
| **Direct Path Ratio** | % of publisher relationships that are DIRECT | Count DIRECT entries / total entries in app-ads.txt |
| **Average Supply Chain Length** | Average number of intermediaries per path | Trace INTERMEDIARY chains in sellers.json |
| **Exchange Concentration** | How many exchanges a publisher authorizes | Count unique exchange domains in app-ads.txt |
| **Reseller Dependency** | How much a publisher relies on resellers | Count RESELLER entries / total entries |
| **Transparency Score** | % of sellers.json entries that are non-confidential | Count non-confidential / total sellers |

---

## 📚 Programmatic Advertising Glossary

Understanding the terminology is essential for working with AdsDB data effectively. Here is a comprehensive glossary of programmatic advertising terms relevant to this project.

### Core Concepts

| Term | Definition |
|------|------------|
| **Programmatic Advertising** | The automated buying and selling of digital advertising through software platforms and real-time auctions, as opposed to manual negotiations. |
| **RTB (Real-Time Bidding)** | A subset of programmatic advertising where ad impressions are auctioned in real-time (typically within 100ms) as a user loads a webpage or app. |
| **OpenRTB** | The open-source protocol specification (maintained by IAB Tech Lab) that defines how bid requests and bid responses are structured in real-time bidding. |
| **Impression** | A single instance of an ad being displayed to a user. This is the basic unit of currency in digital advertising. |
| **CPM (Cost Per Mille)** | The price an advertiser pays per 1,000 impressions. "Mille" is Latin for "thousand." |
| **Ad Inventory** | The total amount of ad space a publisher has available to sell. |
| **Fill Rate** | The percentage of ad requests that result in an ad being served. |

### Players in the Ecosystem

| Term | Definition |
|------|------------|
| **Publisher** | A website owner or app developer that has ad space to sell. They are the supply side of the market. |
| **Advertiser** | A company or individual that wants to buy ad space to promote their product or service. They are the demand side. |
| **DSP (Demand-Side Platform)** | Software platform used by advertisers and agencies to automatically buy ad inventory across multiple exchanges. Examples: The Trade Desk, DV360, MediaMath. |
| **SSP (Supply-Side Platform)** | Software platform used by publishers to manage, sell, and optimize their ad inventory across multiple demand sources. Examples: Google Ad Manager, Magnite, PubMatic, OpenX. |
| **Ad Exchange** | A digital marketplace that facilitates the buying and selling of ad inventory between DSPs and SSPs via real-time auctions. |
| **Ad Network** | An intermediary that aggregates ad inventory from multiple publishers and sells it to advertisers. Less granular than an exchange. |
| **Ad Mediation Platform** | A platform (like AppLovin MAX, IronSource, or AdMob Mediation) that helps app developers manage multiple ad networks and optimizes which network serves each impression. |
| **DMP (Data Management Platform)** | A platform that collects, organizes, and activates audience data for advertising targeting. |

### Transparency & Authorization

| Term | Definition |
|------|------------|
| **ads.txt** | Authorized Digital Sellers — A text file hosted by web publishers declaring which advertising systems are authorized to sell their inventory. |
| **app-ads.txt** | The mobile app equivalent of ads.txt, hosted on the app developer's website. |
| **sellers.json** | A JSON file hosted by ad exchanges listing all publishers and intermediaries they sell on behalf of. |
| **SupplyChain Object (schain)** | An OpenRTB extension that records the complete chain of intermediaries a bid request has passed through. |
| **TAG (Trustworthy Accountability Group)** | An industry organization that provides certification and anti-fraud programs for the digital advertising supply chain. |
| **TAG-ID / Certification Authority ID** | A unique identifier issued by TAG to certified advertising companies. Appears in ads.txt entries. |
| **ASI (Advertising System Identifier)** | The domain of an advertising system (SSP/exchange) used in schain nodes and ads.txt entries. |

### Fraud & Security

| Term | Definition |
|------|------------|
| **Domain Spoofing** | When a fraudster misrepresents the domain/app where an ad will be displayed, typically claiming to be a premium publisher. |
| **Ad Fraud** | Any deliberate activity that prevents the proper delivery of ads to real human users, resulting in wasted advertiser spend. |
| **Bot Traffic** | Non-human traffic generated by automated software to create fake impressions or clicks. |
| **Invalid Traffic (IVT)** | Traffic that doesn't represent genuine user activity, including bot traffic, accidental clicks, and fraudulent impressions. |
| **Supply Chain Laundering** | Routing fraudulent inventory through legitimate-looking intermediaries to disguise its origin. |
| **Bid Shading** | When a DSP intentionally bids lower than the maximum it's willing to pay, based on historical clearing prices. |

### Business Models

| Term | Definition |
|------|------------|
| **DIRECT relationship** | The publisher has a direct account with the advertising system. |
| **RESELLER relationship** | The publisher's inventory is sold through an intermediary. |
| **Header Bidding** | A technique where publishers offer inventory to multiple exchanges simultaneously before making calls to their ad server, increasing competition and revenue. |
| **Waterfall** | A sequential auction model where ad networks are called one at a time in order of expected CPM. Being replaced by header bidding. |
| **SPO (Supply Path Optimization)** | The practice of selecting the most efficient, transparent, and cost-effective path to purchase ad inventory. |
| **PUBLISHER (seller_type)** | In sellers.json, indicates this seller directly owns ad inventory. |
| **INTERMEDIARY (seller_type)** | In sellers.json, indicates this seller resells inventory from others. |

### Mobile & App Specific

| Term | Definition |
|------|------------|
| **SDK (Software Development Kit)** | In AdTech, the code library integrated into a mobile app to serve ads. Examples: AdMob SDK, AppLovin SDK, Unity Ads SDK. |
| **Bundle ID** | A unique identifier for a mobile app (e.g., `com.example.mygame`). Used in bid requests to identify the app. |
| **IDFA** | Identifier for Advertisers — Apple's device-level advertising ID for iOS. |
| **GAID** | Google Advertising ID — Google's device-level advertising ID for Android. |
| **Rewarded Video** | An ad format where users voluntarily watch a video ad in exchange for an in-app reward (e.g., extra lives, virtual currency). |
| **Interstitial** | A full-screen ad that covers the entire app interface, typically shown at natural transition points. |
| **Banner** | A rectangular ad displayed at the top or bottom of the app screen. |
| **Native Ad** | An ad that matches the visual design and function of the app experience in which it appears. |
| **CTV (Connected TV)** | Television sets connected to the internet (via smart TV software or devices like Roku, Fire TV, Apple TV) that can serve programmatic ads. |
| **OTT (Over-The-Top)** | Content delivered via the internet instead of traditional cable/satellite (Netflix, Hulu, etc.). OTT advertising is a growing segment. |

---

## 📐 IAB Tech Lab Standards & Specifications

AdsDB is built on top of the official specifications published by the **IAB Tech Lab** (Interactive Advertising Bureau Technology Laboratory). Here are the key specifications:

| Specification | Version | Description | Link |
|---------------|---------|-------------|------|
| **ads.txt** | 1.0.3 | Authorized Digital Sellers for websites | [IAB ads.txt Spec](https://iabtechlab.com/ads-txt/) |
| **app-ads.txt** | 1.0 | Authorized Digital Sellers for mobile apps & CTV | [IAB app-ads.txt Spec](https://iabtechlab.com/ads-txt/) |
| **sellers.json** | 1.0 | Exchange-side seller transparency | [IAB sellers.json Spec](https://iabtechlab.com/sellers-json/) |
| **OpenRTB** | 2.6 / 3.0 | Real-Time Bidding protocol | [IAB OpenRTB Spec](https://iabtechlab.com/openrtb/) |
| **SupplyChain Object** | 1.0 | Supply chain transparency in bid requests | [IAB SupplyChain Spec](https://iabtechlab.com/schain/) |

### How These Specs Interconnect

```
                    ┌────────────────────┐
                    │    IAB Tech Lab    │
                    │   Specifications   │
                    └─────────┬──────────┘
                              │
            ┌─────────────────┼─────────────────┐
            │                 │                 │
            ▼                 ▼                 ▼
    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
    │   ads.txt    │  │ sellers.json │  │   OpenRTB    │
    │ app-ads.txt  │  │              │  │   + schain   │
    │              │  │              │  │              │
    │ "Who can     │  │ "Who do we   │  │ "Here's the  │
    │  sell my     │◄─┤  sell for?"  │─►│  supply      │
    │  inventory?" │  │              │  │  chain for   │
    │              │  │              │  │  THIS bid"   │
    └──────┬───────┘  └──────┬───────┘  └──────┬───────┘
           │                 │                 │
           └─────────────────┼─────────────────┘
                             │
                             ▼
                    ┌────────────────────┐
                    │      AdsDB         │
                    │                    │
                    │  Collects, stores, │
                    │  and indexes ALL   │
                    │  of these files    │
                    │  from the entire   │
                    │  internet          │
                    └────────────────────┘
```

---

## ❓ Frequently Asked Questions (FAQ)

### General Questions

**Q: What is AdsDB?**
A: AdsDB is the world's largest open-source database of `app-ads.txt`, `ads.txt`, and `sellers.json` files. It contains over 50,000 domains worth of advertising supply chain transparency data, collected by crawling the entire public internet.

**Q: Is AdsDB free to use?**
A: Yes. AdsDB is released under the MIT License. You can clone, modify, redistribute, and use this data for any purpose — commercial or non-commercial.

**Q: How often is AdsDB updated?**
A: The database is updated regularly through automated crawling pipelines. Publishers and exchanges update their files frequently, and our crawlers capture these changes.

**Q: How large is the database?**
A: The full database is over 3.1 GB. Some individual `sellers.json` files exceed 100 MB. Git LFS is used for the largest files.

**Q: Can I use AdsDB data in my commercial product?**
A: Yes. The MIT License allows commercial use. The data itself is sourced from publicly accessible URLs as intended by the IAB Tech Lab specifications.

### Technical Questions

**Q: Why do I need Git LFS?**
A: Some `sellers.json` files from major exchanges are extremely large (50-200+ MB). Git LFS (Large File Storage) handles these files efficiently without bloating the Git history. Without Git LFS installed, you'll get pointer files instead of the actual data.

**Q: How is the data organized?**
A: Files are stored at `db/{first-letter}/{domain}/app-ads.txt` and `db/{first-letter}/{domain}/sellers.json`. For example, Google's sellers.json is at `db/g/google.com/sellers.json`.

**Q: What format are the files in?**
A: `app-ads.txt` and `ads.txt` files are plain text (CSV-like format). `sellers.json` files are standard JSON.

**Q: Can I query the database without cloning it?**
A: You can browse individual files on GitHub directly. For bulk analysis, cloning is recommended.

**Q: How do I find a specific domain?**
A: Take the first character of the domain, then navigate to `db/{first-char}/{domain}/`. For example, `facebook.com` → `db/f/facebook.com/`.

**Q: What are the `.txt` index files in the root directory?**
A: `asi_domains.txt` and `asi_domains_valid.txt` list the advertising system (exchange/SSP) domains we scan. `publisher_domains.txt` and `publisher_domains_valid.txt` list the publisher domains we scan. The `_valid` versions contain only domains that returned a valid file.

### Data Quality Questions

**Q: Are all files guaranteed to be valid?**
A: The files are stored exactly as they were found on the publisher's or exchange's website. Some files may contain formatting errors, which mirrors the real-world state of the ecosystem. This is intentional — it allows researchers to study compliance issues.

**Q: What if a domain has both ads.txt and app-ads.txt?**
A: Many domains host both files. In AdsDB, we primarily collect `app-ads.txt` files. For many publishers, the content is identical or very similar.

**Q: Why are some sellers.json entries marked as confidential?**
A: Some exchanges allow sellers to opt into confidential status (`is_confidential: 1`), which hides their name and domain. This is permitted by the IAB spec but reduces transparency.

**Q: Do you store historical versions?**
A: Yes — because this is a Git repository, every change is tracked in the Git history. You can use `git log` and `git diff` to see how files have changed over time.

---

## 🤝 Contributing & Updates

The internet is constantly evolving. New publishers launch every day, app developers update their monetization partners, and new ad exchanges enter the market. We strive to keep AdsDB as comprehensive and up-to-date as possible.

### How to Contribute

1. **Report a missing domain** — If you know of a publisher or exchange that isn't in AdsDB, open an [Issue](https://github.com/KONTRUSTMEDIA/adsdb/issues) with the domain name.

2. **Report outdated data** — If you notice a file is stale, let us know so we can re-crawl.

3. **Submit a Pull Request** — If you've crawled additional domains, you can submit a PR with the new data files following our directory structure.

4. **Suggest improvements** — Ideas for new index files, better organization, or additional metadata are always welcome.

### Automated Pipeline

AdsDB uses automated crawling and ingestion pipelines to:
- Discover new publisher and exchange domains
- Crawl all known domains for `app-ads.txt` and `sellers.json` files
- Detect changes and update the repository
- Validate file formats and flag anomalies

---

## ⚖️ Legal & Compliance

### Data Source

All data in this repository is sourced from **publicly accessible URLs** as intended by the IAB Tech Lab specifications. The entire purpose of `ads.txt`, `app-ads.txt`, and `sellers.json` is to be **publicly available and machine-readable**. These files are designed to be fetched, cached, and analyzed by automated systems.

### License

This project is licensed under the **MIT License**. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this data and software.

### Disclaimer

- AdsDB is provided "as-is" without warranty of any kind
- This project is not affiliated with or endorsed by the IAB Tech Lab
- The data reflects the real-world state of publicly accessible files and may contain errors, inconsistencies, or outdated information
- Users are responsible for their own compliance with applicable laws and regulations when using this data

### Privacy

- No personal data is collected or stored
- All data is sourced from files that are intentionally made public by publishers and exchanges
- `sellers.json` entries marked as `is_confidential` are stored as found (the confidential flag does not remove data from the original file — it simply indicates the exchange chose to redact certain fields)

---

## 🙏 Acknowledgements

- **[IAB Tech Lab](https://iabtechlab.com/)** — For creating the ads.txt, app-ads.txt, sellers.json, and SupplyChain specifications that form the backbone of supply chain transparency in programmatic advertising
- **[Trustworthy Accountability Group (TAG)](https://www.tagtoday.net/)** — For their anti-fraud certification programs and registry
- The entire **AdTech community** — For gradually adopting these transparency standards and making the programmatic ecosystem safer for everyone

---

## 🔍 SEO Reference: Topics Covered in This Repository

This section exists to help search engines and researchers discover this project when searching for related topics.

### Primary Topics
- app-ads.txt database download
- sellers.json database download
- ads.txt database download
- programmatic advertising transparency data
- authorized digital sellers database
- global app-ads.txt repository
- sellers.json files for all SSPs
- ad fraud prevention open source data
- IAB Tech Lab compliance database
- RTB supply chain data

### Related Search Terms
- how to verify ads.txt
- how to check app-ads.txt
- sellers.json lookup tool
- find sellers.json for any exchange
- app-ads.txt for mobile apps
- ads.txt for CTV and OTT
- supply path optimization data
- programmatic supply chain graph
- list of all SSPs and ad exchanges
- ad exchange sellers.json files
- publisher ads.txt files database
- authorized digital sellers list
- app-ads.txt verification
- sellers.json parser
- ads.txt crawler data
- bulk ads.txt download
- bulk sellers.json download
- programmatic advertising dataset
- digital advertising supply chain data
- ad tech transparency files

### Ad Networks and Platforms Referenced
- Google AdMob sellers.json
- Google Ad Exchange sellers.json
- OpenX sellers.json
- Index Exchange sellers.json
- AppNexus Xandr sellers.json
- Magnite Rubicon Project sellers.json
- PubMatic sellers.json
- Unity Ads sellers.json
- IronSource sellers.json
- InMobi sellers.json
- Mintegral sellers.json
- Liftoff Vungle sellers.json
- Chartboost sellers.json
- AppLovin sellers.json
- RTB House sellers.json
- Rakuten sellers.json
- Roku sellers.json

### Industry Standards Referenced
- IAB ads.txt specification
- IAB app-ads.txt specification
- IAB sellers.json specification
- IAB OpenRTB 2.6 specification
- IAB SupplyChain Object specification
- TAG Trustworthy Accountability Group
- TAG certification authority ID
- TAG anti-fraud certification

---

<p align="center">
  <b>AdsDB</b> — Indexing the world's programmatic advertising supply chain, one domain at a time.
  <br/>
  <br/>
  <a href="https://github.com/KONTRUSTMEDIA/adsdb">⭐ Star this repository</a> if you find it useful!
</p>