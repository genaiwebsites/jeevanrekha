# Content Strategy Audit & Roadmap: Jeevan Rekha

This document analyzes the content strategy for the Jeevan Rekha brand using the codebase at `C:\Projects\Jeevan Rekha\src`. It evaluates the existing content against searchable and shareable standards, defines three core content pillars, and provides a prioritized roadmap of future content topics.

---

## Overall Content Strategy Score

### **Overall Score: 67 / 100**
> [!NOTE]
> The site's current content matches the "Purity Engineering" brand persona (scientific and informative), and the existing 6 blog articles address good educational topics. However, the strategy is limited by manual publishing friction, missing high-intent consideration assets, and heading mismatches. Resolving these issues will raise the score to **90+/100**.

### Score Breakdown
* **Pillar Alignment & Brand Consistency: 85 / 100**
  * *Pros*: Strong scientific focus (smoke point, Gamma-Oryzanol metrics); avoids generic marketing fluff; tone matches the time-tested manufacturing heritage.
* **Keyword & Search Intent Mapping: 50 / 100**
  * *Pros*: Addresses specific questions like "why smoke point matters" or "myths of rice bran oil."
  * *Cons*: Major heading-slug mismatch on the healthy cooking page; lack of structured metadata prevents indexation; missing high-conversion comparison terms.
* **Internal Linking & Cluster Flow: 65 / 100**
  * *Pros*: Blog pages cross-link via a "Related Articles" sidebar; sidebar CTA links directly to products.
  * *Cons*: Manual additions are required to link new articles, and the blog index page lacks tag/category filtering.

---

## Content Pillars

Jeevan Rekha’s content should be organized under three pillars that merge scientific manufacturing with kitchen warmth:

```
                      ┌──────────────────────────────┐
                      │    Jeevan Rekha Content      │
                      └──────────────┬───────────────┘
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
│ Pillar 1: Science│        │ Pillar 2: Kitchen│        │Pillar 3: Advocacy│
│ "Purity Physics" │        │ "Culinary Craft" │        │"Unadulterated"   │
│ Smoke points,    │        │ Traditional and  │        │ Consumer tests,  │
│ Oryzanol science │        │ healthy recipes  │        │ oil myths        │
└──────────────────┘        └──────────────────┘        └──────────────────┘
```

### Pillar 1: Scientific Nutrition ("Purity Physics")
* **Focus**: The biochemical characteristics of premium oils. Educating readers on smoke points, physical refining steam processes, Gamma-Oryzanol levels, and fatty acid ratios.
* **Product Connection**: Promotes Jeevan Rekha's NABL-certified lab quality and physical refining advantages.

### Pillar 2: Culinary Craft ("Kitchen Warmth")
* **Focus**: Practical applications of oils in traditional Indian cooking. Healthy evening snacks, frying methods that minimize oil absorption, and recipe integration.
* **Product Connection**: Builds culinary trust and highlights minimal oil absorption metrics.

### Pillar 3: Consumer Advocacy ("Unadulterated Truths")
* **Focus**: Helping families spot adulterated cooking oils, debunking myths, and highlighting the health risks of reused cooking fats.
* **Product Connection**: Positions Jeevan Rekha as the transparent, unadulterated gold standard.

---

## Existing Content Audit

| Article Slug | Target Pillar | Current State & Critiques | Action Needed |
|--------------|---------------|---------------------------|---------------|
| `why-smoke-point-of-the-cooking-oil-matters` | **Science** | Strong content depth explaining acrolein and free radicals. Lacks structured headers and article schema. | Add dynamic metadata; insert article schema. |
| `avoid-these-myths-about-rice-bran-oil-in-india` | **Advocacy** | Addresses common Indian kitchen misconceptions. Heavy narrative block structure. | Split content with lists/tables for readability. |
| `healthy-cooking-with-rice-bran-oil` | **Science** | **Critical Error**: The H1 heading is `"Easy Indian Snacks with Rice Bran Oil"` but the content covers Gamma-Oryzanol and heart health. | Change the primary `<h1>` heading to match the URL slug. |
| `4-best-recipes-with-rice-bran-oil` | **Kitchen** | Excellent use cases (lettuce salad, khichdi, fish curry, Murmura Poha). | Format ingredients into HTML tables. |
| `easy-evening-snacks-recipe-with-rice-bran-oil` | **Kitchen** | Covers street food recipes. Lacks structured formatting. | Format recipe steps using numbered lists. |
| `mothers-day-recipes-prepared-with-rice-bran-oil` | **Kitchen** | Generates emotional engagement but has lower evergreen search intent. | Repurpose into seasonal campaign content. |

---

## Content Expansion Roadmap (Prioritized)

To capture high-intent buyers, we recommend expanding into the following topics:

### 1. High-Priority (Consideration Stage - Commercial Intent)
* **Topic**: *Physically Refined Rice Bran Oil vs. Mustard Oil vs. Soybean Oil*
  * *Keyword*: `best cooking oil for heart health in india`
  * *Pillar*: Science
  * *Goal*: Help users choose between Jeevan Rekha's three oil types depending on their kitchen habits.
* **Topic**: *The Dangers of Reheating Cooking Oil: What Homemakers Must Know*
  * *Keyword*: `reusing cooking oil side effects`
  * *Pillar*: Advocacy
  * *Goal*: Educate on acrolein development, positioning Jeevan Rekha’s high smoke point oils as a safer choice.

### 2. Medium-Priority (Awareness Stage - Informational Intent)
* **Topic**: *What is Gamma Oryzanol? The Ultimate Health Guide*
  * *Keyword*: `gamma oryzanol benefits`
  * *Pillar*: Science
  * *Goal*: Establish topical authority on the key antioxidant molecule in rice bran oil.
* **Topic**: *How to Test if Mustard Oil is Pure or Adulterated at Home*
  * *Keyword*: `how to check purity of mustard oil`
  * *Pillar*: Advocacy
  * *Goal*: Align with the "unadulterated" brand promise by giving users actionable tests.

### 3. Quick Wins (Implementation Stage - Searchable Utility)
* **Topic**: *10 Traditional Bengali Festive Recipes with Kacchi Ghani Mustard Oil*
  * *Keyword*: `fish curry recipes with mustard oil`
  * *Pillar*: Kitchen
  * *Goal*: Boost local regional organic searches by targeting high-volume local recipes.
