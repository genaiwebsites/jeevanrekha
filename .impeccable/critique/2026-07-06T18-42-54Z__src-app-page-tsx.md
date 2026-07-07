---
target: src/app/page.tsx
total_score: 33
p0_count: 0
p1_count: 1
timestamp: 2026-07-06T18-42-54Z
slug: src-app-page-tsx
---
# Design Critique: src/app/page.tsx

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4/4 | Solid static rendering; counters transition well. |
| 2 | Match System / Real World | 4/4 | Clear culinary and scientific terminology in product descriptions. |
| 3 | User Control and Freedom | 3/4 | Standard Next.js routing works well; custom cursor can feel sluggish. |
| 4 | Consistency and Standards | 3/4 | Font pairing is consistent, but numbered eyebrows on non-sequential grids break standards. |
| 5 | Error Prevention | 4/4 | Static layout; no interactive forms on the homepage. |
| 6 | Recognition Rather Than Recall | 3/4 | Sibling cards repeat identical structures. Hero SVG bottle is too generic. |
| 7 | Flexibility and Efficiency | 3/4 | Simple page navigation; lacking quick keyboard skips. |
| 8 | Aesthetic and Minimalist Design | 2/4 | Over-saturated with background grids, orbs, kickers, and hover hidden text. |
| 9 | Error Recovery | 4/4 | Not applicable for this static page. |
| 10 | Help and Documentation | 3/4 | Clean footer links, but no explicit contextual help. |
| **Total** | | **33/40** | **[Needs Refinement]** |

## Anti-Patterns Verdict

* **LLM Assessment**: The page runs the risk of looking like a generic template due to several design reflexes. Specifically, the moving `.hero-grid` combined with floating blur `.orb` containers is a classic AI template tell. Additionally, using small uppercase `.kicker` tags with lines on *four* separate sections feels like repetitive scaffolding rather than deliberate typographic architecture.
* **Deterministic Scan**: The automated detector found `0` issues in `src/app/page.tsx` itself, confirming the layout markup is clean of syntax errors and structural drift.
* **Visual Overlays**: No console errors or injection issues detected in the browser console.

## Overall Impression
The page is visually rich and captures the brand colors (`purple` and `yellow`) well. However, it suffers from decorative overcrowding and "information gating" (hiding descriptions on hover), which detracts from its premium and scientific authority.

## What's Working
1. **Dynamic Hero Layout**: The grid layout on the Hero section aligns the text and product bottle nicely, creating a clear visual anchor.
2. **Typography Contrast**: The pairing of serif display `Fraunces` for storytelling and sans-serif `Instrument Sans` for body copy creates a readable editorial pace.
3. **Animated Stats**: The stats counter cards highlight physical extraction capacity in a clean, interactive grid.

## Priority Issues

### [P1] Low Contrast on Yellow CTA Strip Description
* **Why it matters**: The description text uses `rgba(51,25,104, 0.58)` on a bright yellow background (`#FEDC06`), yielding a contrast ratio of only ~3.66:1. This makes the text illegible for visually impaired users.
* **Fix**: Change the paragraph color to a solid, high-contrast dark purple (`#2D1660` or `var(--pd)`).
* **Suggested command**: `/impeccable polish`

### [P2] Over-decorated Background (AI Template Tells)
* **Why it matters**: The moving `.hero-grid` overlay, blurry `.orb1` and `.orb2` gradients, and floating particle dots create high visual noise, which undermines the scientific restraint of the brand.
* **Fix**: Remove the moving background grid and the floating orbs, keeping the ambient `.hero-mesh` clean.
* **Suggested command**: `/impeccable quieter`

### [P2] Non-Sequential Card Numbering Scaffolding
* **Why it matters**: The "Why Choose" cards feature background numbers `01`, `02`, `03` for three concurrent facts, which implies a sequence or chronological process where none exists.
* **Fix**: Remove the numbers or replace them with small thematic icons.
* **Suggested command**: `/impeccable distill`

### [P3] Hidden Card Content on Hover (Information Gating)
* **Why it matters**: The homepage product cards hide the text descriptions and "Explore" links behind hover transitions (`max-height: 0`, `opacity: 0`). Mobile users cannot hover, forcing them to navigate immediately upon tapping without reading descriptions.
* **Fix**: Make the descriptions visible by default, using borders or subtle elevations for hover feedback instead.
* **Suggested command**: `/impeccable layout`

## Persona Red Flags

* **Jordan (First-Time Visitor on Mobile)**: Cannot read the product descriptions on the home page because tapping the card immediately triggers navigation to `/products` rather than showing the hovered state.
* **Casey (Motion Sensitive)**: Experiences visual discomfort due to the moving grid line animation (`gSlide`) and floating orbs (`oFloat`) in the hero background.
* **Alex (Power/B2B User)**: Suffers eye strain when reading the low-contrast text in the bright yellow CTA strip at the bottom of the page.

## Minor Observations
* The text "Jeevan Rekha Premium Oil" on the SVG bottle label is cramped due to tight container bounds.
* The `.kicker` bars and text are repeated on too many sections, acting as layout boilerplate rather than deliberate design.

## Questions to Consider
* What if we replaced the generic SVG bottle in the Hero section with a high-fidelity image of our actual Rice Bran or Mustard Oil bottle?
* Does the background grid and floating orbs add any real brand value, or are they distracting from the core copy?
* How can we show product descriptions clearly on mobile without cluttering the initial layout?
