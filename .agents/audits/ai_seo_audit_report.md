# AI SEO Audit Report: Jeevan Rekha

This report outlines the AI Search Engine Optimization (AI-SEO) audit results for the Jeevan Rekha codebase at `C:\Projects\Jeevan Rekha\src`. It evaluates the site's visibility, extractability, and citation-friendliness for modern AI systems like Google AI Overviews, ChatGPT Search, Perplexity, Claude, and Copilot.

---

## Overall AI-SEO Score

### **Overall Score: 62 / 100**
> [!NOTE]
> The codebase has excellent foundational components, including scientific comparison tables, structured schemas, and open bot crawlability. However, the complete absence of machine-readable agent files (`llms.txt`, `pricing.md`) and missing article schema/metadata on the blog section reduce its optimization score.

### Score Breakdown
* **AI Bot Crawlability & Access: 90 / 100**
  * *Pros*: [robots.ts](file:///C:/Projects/Jeevan%20Rekha/src/app/robots.ts) explicitly configures and allows major AI search crawlers (`GPTBot`, `PerplexityBot`, `Google-Extended`).
  * *Cons*: ClaudeBot (`ClaudeBot` / `anthropic-ai`) is not explicitly defined in the robots list, falling back to the wildcard rule.
* **AI Content Structure & Extractability: 70 / 100**
  * *Pros*: Clear tabular comparison structures on product pages; FAQ sections with natural-language question-answer formats.
  * *Cons*: Narrative blog content uses long paragraph sequences without optimized, standalone 40–60 word answer blocks.
* **AI Sourcing & Authority (GEO Factors): 75 / 100**
  * *Pros*: High usage of scientific metrics and specific numbers; comparison tables explicitly cite authoritative organizations and researchers.
  * *Cons*: Generic author attribution (`By Jeevan Rekha Editorial Team`) without individual expert credentials or profiles.
* **Machine-Readable Agent Layer: 0 / 100**
  * *Cons*: Absolute absence of standard machine-readable files (`llms.txt` and `pricing.md` / `pricing.txt`) for AI agents in the root.

---

## Executive Summary

As AI search engines and autonomous shopping agents become primary channels for product discovery, optimizing websites for LLM retrieval is crucial. Jeevan Rekha is well-positioned for AI Overviews because its traditional technical SEO is solid, and its brand voice ("Purity Engineering") aligns with the high-authority, scientific tone favored by Generative Engine Optimization (GEO) algorithms.

To maximize citations and recommendations in ChatGPT, Perplexity, and Google, Jeevan Rekha should address the following key findings.

---

## Technical AI SEO Findings

### 1. Missing Machine-Readable Protocol Files
* **Issue**: No `llms.txt` or `pricing.md` files exist in the public directory.
* **Impact**: **High**. Next-gen engines (ChatGPT, Claude, Perplexity) and purchasing agents read lightweight markdown documents at the site root to quickly understand offerings, pricing, and boundaries without executing heavy JS/CSS.
* **Fix**:
  1. Add a `/llms.txt` file in the [public](file:///C:/Projects/Jeevan%20Rekha/public) folder outlining the brand value, product catalog, and key links.
  2. Add a `/pricing.md` or `/pricing.txt` file outlining the commercial/packaging tiers (Lite Pouches, Bottles, Tins, Bulk) and pricing estimations or inquiry processes.
* **Priority**: High (Rating: 4.5/5)

### 2. Implicit ClaudeBot Crawler Handling
* **Issue**: Anthropic's Claude crawler is allowed by default but is not explicitly declared.
* **Impact**: **Low**. Claude uses Brave Search results and direct crawls. While wildcard rules allow it, declaring it explicitly ensures search compliance.
* **Evidence**:
  * In [robots.ts](file:///C:/Projects/Jeevan%20Rekha/src/app/robots.ts), `GPTBot`, `Google-Extended`, and `PerplexityBot` are declared, but Anthropic's user-agents (`ClaudeBot`, `anthropic-ai`) are not.
* **Fix**: Add explicit configuration blocks for `ClaudeBot` and `anthropic-ai` to ensure clarity.
* **Priority**: Low (Rating: 1.5/5)

---

## Content & GEO Findings

### 1. Incomplete Product Offer Schemas
* **Issue**: Product JSON-LD structured data contains currency and availability, but is missing price ranges or estimated values.
* **Impact**: **Medium**. AI engines compiling price comparisons for "best rice bran oil prices in India" cannot extract raw pricing data from the page, reducing recommendation likelihood.
* **Evidence**:
  * In [rice-bran-oil/page.tsx](file:///C:/Projects/Jeevan%20Rekha/src/app/products/rice-bran-oil/page.tsx#L20-L26) and other product files, the schema `offers` block contains no `price` or `lowPrice`/`highPrice` properties.
* **Fix**: Add a price range estimate or pricing details to the `Product` schema in JSON-LD.
* **Priority**: Medium (Rating: 3/5)

### 2. Lack of Standalone Answer Blocks in Blogs
* **Issue**: Blog pages are written in narrative prose without structural summary blocks.
* **Impact**: **Medium**. AI crawlers extract key sections (passage retrieval) to feed into generative answers. Narrative prose makes it harder for LLMs to cleanly extract brief, citable answers.
* **Evidence**:
  * Blog post layouts (like [why-smoke-point-of-the-cooking-oil-matters/page.tsx](file:///C:/Projects/Jeevan%20Rekha/src/app/blogs/why-smoke-point-of-the-cooking-oil-matters/page.tsx)) contain long narrative HTML structures.
* **Fix**:
  * Lead each major section with a self-contained, 40–60 word answer block containing specific facts and statistics.
  * For example, the first section of the smoke point article should begin with:
    > "A cooking oil's smoke point is the temperature at which it stops boiling and begins to burn, producing toxic acrolein and proinflammatory free radicals. Jeevan Rekha Rice Bran Oil has a high smoke point of 232°C (450°F), making it safer for deep frying than extra virgin olive oil (190°C) or canola oil (204°C)."
* **Priority**: Medium (Rating: 3.5/5)

### 3. Lack of Author Credentials & Expertise Signals (E-E-A-T)
* **Issue**: No credentials showing expert status for the authors.
* **Impact**: **Medium**. Google AI Overviews and Perplexity favor content showing clear, verified medical or culinary expertise.
* **Evidence**:
  * Blogs are signed: `By Jeevan Rekha Editorial Team`. There are no links to credentials, bios, or professional associations.
* **Fix**: Attach author bios to articles showing food science, dietetics, or culinary credentials.
* **Priority**: Low (Rating: 2.5/5)

---

## Prioritized AI-SEO Action Plan

### Phase 1: High-Impact Agent Layer (Quick Wins)
1. **Create Site-Root Markdown Files**:
   - Write an `/llms.txt` file summarizing Jeevan Rekha's 40+ years refining history and product types.
   - Write a `/pricing.md` file describing packaging options and order methods to allow autonomous agent queries.
2. **Inject Explicit Bots**:
   - Add Anthropic's crawlers to the allowed rules in `robots.ts`.

### Phase 2: Structural Extractability (Content Tuning)
1. **Refactor Blog Intros**:
   - Add a 40–60 word summary box (e.g. "Key Takeaway") at the top of each blog post to serve as direct passage targets for LLMs.
2. **Complete Offer Schemas**:
   - Add estimated price ranges (e.g. `price: "150"` or price ranges for different sizes) to the JSON-LD schema on product pages.

### Phase 3: External Authority & Presence
1. **Third-Party Citations**:
   - Enhance the brand's presence on off-site portals (such as Google Business Profile, local directories, and wholesale supplier lists) to feed the AI citation engines.
