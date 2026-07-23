# Google Search Console Performance Analysis Report
**Domain:** `jeevanrekhafoods.com`  
**Data Source:** `C:\Users\kbath\Downloads\jeevanrekhafoods.com-Performance-on-Search-2026-07-23.xlsx`  
**Time Window:** Last 24 Hours (ending July 23, 2026)  
**Search Type:** Web Search  

---

## Executive Summary

The Google Search Console (GSC) export provides a 24-hour performance snapshot of **jeevanrekhafoods.com**. Overall, the website is live, indexed, and actively being served by Google for over **7,067 impressions** in a single day across **39 distinct queries** and **11 countries**.

However, the report reveals critical technical and SEO bottlenecks:
1. **Brand Keyword Displacement:** The primary brand term `jeevan rekha` received **6,582 impressions** but **0 clicks** because it ranks at an average position of **6.46**. Generic dictionary/scheme results for "Jeevan Rekha" currently sit above the official website.
2. **Canonical & URL Split (Domain Fragmentation):** Organic traffic and impressions are split across multiple URL variants (`http://`, `https://`, `www.`, non-`www`, legacy `/about-us/` vs `/about`, and `/product/mustard-oil/` vs `/products/mustard-oil`).
3. **High-Intent B2B Keyword Wins:** The website already ranks **#1 to #2** for commercial industry terms such as `top soybean oil manufacturers in india`, `edible oil manufacturers in west bengal`, and `best rice oil for cooking`.

---

## Complete Sheet-by-Sheet Analysis

The Excel file contains **7 complete worksheets**. Below is the exact data and interpretation for every single sheet.

### 1. `Filters` Sheet
| Filter Name | Value | Meaning |
| :--- | :--- | :--- |
| **Search type** | Web | Data strictly measures standard Google Web Search results. |
| **Time range** | Last 24 hours | Performance is captured over a 24-hour window ending July 23, 2026. |

---

### 2. `Dates` Sheet (Hourly 24-Hour Performance Breakdown)
* **Total Clicks (24h):** 9 clicks
* **Total Impressions (24h):** 7,067 impressions
* **Overall 24h CTR:** 0.127%
* **Average Position:** ~6.5

#### Peak Impression & Activity Highlights
- **10:30 AM (2026-07-22):** 3,111 impressions, 0 clicks (Avg Pos: 6.4) — *Massive search volume burst for brand queries.*
- **11:30 AM (2026-07-22):** 2,183 impressions, 0 clicks (Avg Pos: 6.4)
- **07:30 AM (2026-07-22):** 627 impressions, 2 clicks (Avg Pos: 6.6)
- **09:30 AM (2026-07-22):** 397 impressions, 1 click (Avg Pos: 7.1)
- **11:30 PM (2026-07-22):** 11 impressions, 2 clicks (Avg Pos: 7.7) — *High CTR late evening engagement.*

---

### 3. `Queries` Sheet (39 Unique Search Queries)

#### A. Brand Queries Breakdown
| Query | Clicks | Impressions | CTR | Avg Position | Diagnosis |
| :--- | :---: | :---: | :---: | :---: | :--- |
| `jeevan rekha` | 0 | 6,582 | 0.0% | 6.46 | **Critical:** Brand search sits on page 1 bottom. Google mixes insurance/hospital/scheme results above the domain. |
| `jeevanrekha` | 0 | 109 | 0.0% | 7.06 | Exact brand compound search ranking #7. |
| `jeeven rekha` | 0 | 48 | 0.0% | 6.29 | Common misspelling. |
| `jeevan regha` | 0 | 14 | 0.0% | 6.21 | Misspelling variant. |
| `jevanrekha` | 0 | 6 | 0.0% | 6.17 | Misspelling variant. |
| `jevan rekha` | 0 | 4 | 0.0% | 6.25 | Misspelling variant. |
| `jeevan reka` | 0 | 3 | 0.0% | 6.00 | Misspelling variant. |
| `jeevan rekha rice bran oil` | 0 | 2 | 0.0% | **1.00** | **Rank #1** for long-tail brand product query. |
| `jeevan rekha oil` | **1** | 2 | **50.0%** | **1.00** | **Rank #1** with 1 click converted. |

#### B. Commercial & B2B Industry Queries (High Potential)
| Query | Clicks | Impressions | CTR | Avg Position | Status / Opportunity |
| :--- | :---: | :---: | :---: | :---: | :--- |
| `top soybean oil manufacturers in india` | **1** | 2 | **50.0%** | **2.00** | **Rank #2** & generating clicks. |
| `best rice oil for cooking` | 0 | 1 | 0.0% | **1.00** | **Rank #1** spot established. |
| `companies with head office in kolkata` | 0 | 1 | 0.0% | **1.00** | **Rank #1** spot established. |
| `edible oil manufacturers in west bengal` | 0 | 1 | 0.0% | **1.00** | **Rank #1** spot established. |
| `rice company in kolkata` | 0 | 1 | 0.0% | **1.00** | **Rank #1** spot established. |
| `oil companies in india` | 0 | 1 | 0.0% | **2.00** | **Rank #2** spot established. |
| `private oil and gas companies in india` | 0 | 1 | 0.0% | **2.00** | Rank #2. |
| `rice bran oil factory near me` | 0 | 1 | 0.0% | **2.00** | Rank #2 (High local intent). |
| `ab udyog pvt ltd` | 0 | 7 | 0.0% | 4.86 | Entity parent search ranking #5. |
| `ab udyog private limited` | 0 | 3 | 0.0% | 6.33 | Entity parent search ranking #6. |
| `rice bran` | 0 | 6 | 0.0% | 8.50 | Broad ingredient query on page 1. |
| `rice bran oil` | 0 | 4 | 0.0% | 9.50 | Product category ranking on page 1. |
| `corporate company in kolkata` | 0 | 12 | 0.0% | 15.67 | Page 2 visibility. |

---

### 4. `Pages` Sheet (13 Indexed URLs)

#### CRITICAL TECHNICAL ISSUE: URL Canonicalization Fragmentation
Google has indexed **multiple variations of the domain**, diluting SEO authority:

| URL | Clicks | Impressions | CTR | Position | Issues & Diagnosis |
| :--- | :---: | :---: | :---: | :---: | :--- |
| `http://www.jeevanrekhafoods.com/` | **4** | 139 | 2.88% | 7.18 | **HTTP + WWW** version indexed & getting clicks. |
| `https://jeevanrekhafoods.com/` | **3** | 6,876 | 0.04% | 6.46 | **Canonical HTTPS non-WWW** homepage. |
| `https://jeevanrekhafoods.com/about-us/` | **1** | 23 | 4.35% | 6.83 | **Legacy URL** (Current site uses `/about`). |
| `https://jeevanrekhafoods.com/blogs/4-best-recipes-with-rice-bran-oil/` | **1** | 10 | 10.0% | 5.80 | High-performing blog article. |
| `https://www.jeevanrekhafoods.com/products` | **1** | 2 | 50.0% | 1.50 | **WWW** version of `/products`. |
| `https://www.jeevanrekhafoods.com/about` | **1** | 1 | 100.0% | 1.00 | **WWW** version of `/about`. |
| `https://jeevanrekhafoods.com/blogs/ultimate-guide-best-quality-pure-rice-bran-oil/` | 0 | 23 | 0.0% | 8.70 | Blog post indexed on Page 1. |
| `https://jeevanrekhafoods.com/product/mustard-oil/` | 0 | 17 | 0.0% | 10.00 | **Legacy URL** (Uses singular `/product/` instead of `/products/`). |
| `https://jeevanrekhafoods.com/blogs/8-authentic-diwali-recipes...` | 0 | 9 | 0.0% | 10.33 | Blog post indexed on Page 1. |
| `https://jeevanrekhafoods.com/blogs/diwali-delights...` | 0 | 2 | 0.0% | 9.50 | Blog post indexed on Page 1. |
| `https://www.jeevanrekhafoods.com/blogs` | 0 | 1 | 0.0% | 1.00 | WWW version. |
| `https://jeevanrekhafoods.com/blogs/indian-evening-snacks-rice-bran-oil/` | 0 | 1 | 0.0% | 2.00 | Blog post indexed at position #2. |
| `http://jeevanrekhafoods.com/` | 0 | 1 | 0.0% | 11.00 | HTTP non-WWW version. |

---

### 5. `Countries` Sheet (11 Countries)
| Country | Clicks | Impressions | CTR | Position | Insight |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **India** | **8** | **7,052** | 0.11% | 6.49 | Core market representing 99.8% of impressions. |
| **Thailand** | **1** | 1 | 100.0% | 6.00 | 1 click converted. |
| **Bangladesh** | 0 | 3 | 0.0% | 2.67 | High average position (#2.67). |
| **Nepal** | 0 | 3 | 0.0% | 4.67 | High average position (#4.67). |
| **Vietnam** | 0 | 3 | 0.0% | 23.67 | Regional interest. |
| **Japan** | 0 | 1 | 0.0% | 1.00 | Rank #1. |
| **Malaysia** | 0 | 1 | 0.0% | 1.00 | Rank #1. |
| **Pakistan** | 0 | 1 | 0.0% | 2.00 | Rank #2. |
| **Hong Kong** | 0 | 1 | 0.0% | 5.00 | Rank #5. |
| **Australia** | 0 | 1 | 0.0% | 6.00 | Rank #6. |
| **United States** | 0 | 1 | 0.0% | 8.00 | Rank #8. |

---

### 6. `Devices` Sheet
| Device | Clicks | Impressions | CTR | Position | Key Takeaway |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Desktop** | **6** | **6,897** | 0.09% | 6.47 | Generates 97.6% of search impressions. |
| **Mobile** | **3** | **169** | **1.78%** | 7.33 | **Mobile CTR (1.78%) is 19x higher than Desktop (0.09%).** |
| **Tablet** | 0 | 2 | 0.0% | 10.00 | Low volume. |

---

### 7. `Search appearance` Sheet
| Search Appearance | Clicks | Impressions | CTR | Position | Meaning |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Translated results** | 0 | 14 | 0.0% | 12.07 | Google automatically translated site listings in regional search views 14 times. |

---

## Cross-Referencing with Workspace Audits (`.agents/audits`)

1. **Alignment with [seo_audit_report.md](file:///c:/Projects/Jeevan%20Rekha/.agents/audits/seo_audit_report.md):**
   - The workspace code baseline is verified at **98.3/100** technical & on-page SEO.
   - However, GSC data proves that Google's live index still contains legacy URLs (`/about-us/`, `/product/mustard-oil/`) and non-secure/WWW variations from before the code upgrade.
2. **Alignment with [site_architecture_report.md](file:///c:/Projects/Jeevan%20Rekha/.agents/audits/site_architecture_report.md):**
   - The current site architecture specifies canonical URLs: `https://jeevanrekhafoods.com/about`, `https://jeevanrekhafoods.com/products/mustard-oil`.
   - The GSC export reveals that link equity is currently leaking because 301 redirects from HTTP -> HTTPS and WWW -> non-WWW are not strictly enforced at the DNS/hosting edge.
3. **Alignment with [ai_seo_audit_report.md](file:///c:/Projects/Jeevan%20Rekha/.agents/audits/ai_seo_audit_report.md):**
   - On-page AI schema and crawlability are 100/100.
   - The primary remaining gap identified in the audit—**Off-site authority & third-party mentions**—is directly reflected in GSC: `jeevan rekha` brand searches sit at rank #6.46 because third-party domains (Wikipedia, schemes, news) out-rank the site for the generic term.

---

## Action Plan: What Needs To Be Done

### 1. Enforce Strict Server-Side 301 Redirects (Immediate)
* **Rule 1 (HTTP to HTTPS):** Force all `http://*` requests to 301 redirect to `https://*`.
* **Rule 2 (WWW to non-WWW):** Force all `https://www.jeevanrekhafoods.com/*` requests to 301 redirect to `https://jeevanrekhafoods.com/*`.
* **Rule 3 (Legacy Slugs to Canonical):** Add 301 redirects in Next.js `next.config.js` or server edge:
  - `/about-us` -> `/about`
  - `/product/:slug` -> `/products/:slug`

### 2. Push Brand Search (`jeevan rekha`) to Rank #1
* Update homepage `<title>` and `<meta name="description">` to explicitly specify:
  `Jeevan Rekha Foods | Refined & Edible Oil Manufacturer India`
* In Google Search Console, request indexing for `https://jeevanrekhafoods.com/` and perform URL Removals / Redirections for legacy URLs.

### 3. Claim Google Business Profile & Directory Listings
* Create/Claim Google Business Profile (GBP) for **Jeevan Rekha (A.B. Udyog Pvt. Ltd.)** with address and official website link `https://jeevanrekhafoods.com`.
* Submit listings on IndiaMART, TradeIndia, and Justdial to establish off-site entity authority for the brand name.

### 4. Optimize Mobile Layout Shifts (CLS Fix)
* As noted in [core_web_vitals.md](file:///c:/Projects/Jeevan%20Rekha/.agents/audits/core_web_vitals.md), replace standard `<img>` tags on product detail pages with Next.js `<Image>` components to boost mobile rankings and CTR.
