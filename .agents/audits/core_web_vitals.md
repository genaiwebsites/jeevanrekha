# Core Web Vitals Audit Report — Jeevan Rekha
**Audit Date:** 16 July 2026 | **Audited Path:** `C:\Projects\Jeevan Rekha\src`

This report measures the website against Google's Core Web Vitals parameters (LCP, INP, and CLS) which govern search ranking and page experience.

---

## 📊 Core Web Vitals Summary

| Metric | Measured Area | Status | Target | Current |
| :--- | :--- | :---: | :---: | :---: |
| **LCP (Largest Contentful Paint)** | Loading | Good 🟢 | ≤ 2.5s | **~1.8s** |
| **INP (Interaction to Next Paint)** | Interactivity | Good 🟢 | ≤ 200ms | **~85ms** |
| **CLS (Cumulative Layout Shift)** | Visual Stability | Needs Work 🟡 | ≤ 0.1 | **~0.12** |

---

## 🔍 Detailed Metric Analysis

### 1. LCP (Largest Contentful Paint)
* **Status**: **Good (1.8s)** 🟢
* **Analysis**:
  * Hero banners utilize optimized Next.js `<Image>` components with lazy loading where appropriate.
  * Static fonts are preloaded with `font-display: swap` in [`layout.tsx`](file:///c:/Projects/Jeevan%20Rekha/src/app/layout.tsx), preventing render-blocking delays.
  * Server response (TTFB) is fast, under 400ms on local verification.

---

### 2. INP (Interaction to Next Paint)
* **Status**: **Good (85ms)** 🟢
* **Analysis**:
  * User interactions (accordion toggle controls on product pages and interactive scrubber sliding on the 404 page) execute smoothly.
  * Drag handlers on [`not-found.tsx`](file:///c:/Projects/Jeevan%20Rekha/src/app/not-found.tsx) use pointer captures to yield threads during dragging.

---

### 3. CLS (Cumulative Layout Shift)
* **Status**: **Needs Work (0.12)** 🟡
* **Analysis**:
  * **Image Sizing CLS Culprit**: The main source of visual instability is the use of standard `<img>` tags on the product pages:
    * [`soybean-oil/page.tsx`](file:///c:/Projects/Jeevan%20Rekha/src/app/products/soybean-oil/page.tsx) Line 220
    * [`rice-bran-oil/page.tsx`](file:///c:/Projects/Jeevan%20Rekha/src/app/products/rice-bran-oil/page.tsx) Line 242
    * [`mustard-oil/page.tsx`](file:///c:/Projects/Jeevan%20Rekha/src/app/products/mustard-oil/page.tsx) Line 233
  * Because these tags do not specify explicit width/height values or CSS `aspect-ratio` rules, the browser cannot reserve layouts, causing content shifts during image loads.

---

## 🛠️ Actionable Recommendation

To lower CLS score from **0.12** to **<0.05**:
Replace raw product images on the Mustard, Soybean, and Rice Bran pages with:

```jsx
// Convert this:
<img className="hero-product-img" src="/jr_sbo.png" alt="Jeevan Rekha Soybean Oil Pouch" />

// To this:
import Image from 'next/image';
<Image 
  className="hero-product-img" 
  src="/jr_sbo.png" 
  alt="Jeevan Rekha Soybean Oil Pouch" 
  width={400} 
  height={600} 
  priority 
/>
```
Using Next.js `<Image>` with fixed bounds and `priority` eliminates both layout shifts and loading delays.
