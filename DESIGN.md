---
# Stitch Design Tokens for Jeevan Rekha
version: 1.0.0
metadata:
  name: Jeevan Rekha Design System
  description: Modern, premium design tokens and system principles for Jeevan Rekha Foods.
tokens:
  colors:
    brand:
      primary: "#4B2685"       # Deep purple representing purity and richness
      dark: "#2D1660"          # Midnight purple for strong typography and dark cards
      medium: "#6F2496"        # Medium plum for borders, highlights, and secondary elements
      light: "#EDE8F8"         # Lavender tint for backgrounds, indicators, and alerts
    accent:
      yellow: "#FEDC06"        # Premium bright yellow for CTAs, bestseller badges, and highlights
      yellowDark: "#C8A000"    # Mustard yellow for hover states and high-contrast text
      yellowLight: "#FFFCE0"   # Soft cream for subtle background alerts
    neutral:
      white: "#FFFFFF"         # Pure white for cards, sheets, and clean sections
      offWhite: "#FAFAF8"      # Premium warm white background for high readability
      richBlack: "#100B28"     # Deep space indigo/rich black for dark-theme containers
    gradients:
      mesh:
        - radial-gradient(ellipse 90% 80% at 15% 55%, rgba(75,38,133,.9) 0%, transparent 65%)
        - radial-gradient(ellipse 65% 65% at 78% 25%, rgba(111,36,150,.75) 0%, transparent 60%)
        - radial-gradient(ellipse 55% 55% at 55% 85%, rgba(45,22,96,.8) 0%, transparent 55%)
      mustardProduct: "radial-gradient(ellipse at center, #d8a018 0%, #8c6808 60%, #302000 100%)"
      riceBranProduct: "radial-gradient(ellipse at center, #7b51c1 0%, #522d94 60%, #1c093e 100%)"
      soyabeanProduct: "radial-gradient(ellipse at center, #5bb55b 0%, #2d822d 60%, #082d08 100%)"
      linearAccent: "linear-gradient(135deg, var(--p) 0%, var(--pm) 50%, var(--pd) 100%)"
      footerBackground: "linear-gradient(180deg, var(--off) 0%, #e6dff0 100%)"
      subFooterBackground: "linear-gradient(135deg, var(--p) 0%, var(--pd) 100%)"
  typography:
    display:
      family: "Cormorant Garamond, Georgia, serif"
      weights: [300, 400, 500, 600, 700]
    body:
      family: "Plus Jakarta Sans, system-ui, sans-serif"
      weights: [400, 500, 600, 700, 800]
    mono:
      family: "IBM Plex Mono, monospace"
      weights: [400, 600, 700]
  spacing:
    container:
      maxWidth: "1360px"
      paddingHorizontal: "56px"
      paddingHorizontalMobile: "28px"
  components:
    buttons:
      borderRadius: "50px"
      padding: "16px 42px"
      transition: "all .4s cubic-bezier(.16, 1, .3, 1)"
    cards:
      borderRadius: "26px"
      border: "1px solid rgba(75, 38, 133, 0.07)"
      shadow: "0 12px 32px rgba(75, 38, 133, 0.12)"
---

# Jeevan Rekha Design System

## 1. Overview
Jeevan Rekha's visual identity represents **Purity Engineering** — a seamless convergence of ancient cold-pressed oil traditions and modern physical refining science. The North Star of our brand is to deliver premium, unadulterated edible oils that symbolize "Purity, Health, and Happiness." The user interface must feel premium, authentic, and scientific, using clean typography, precise layouts, custom dynamic cursors, and fluid ambient lights to distinguish the website from generic FMCG templates.

## 2. Colors
Our color palette establishes a clear division between rich premium spaces, scientific details, and organic purity.
- **Brand System**: A primary royal purple (`--p: #4B2685`) represents heritage, wealth, and high value. Deep midnight purple (`--pd`) and plum (`--pm`) supply structural depth.
- **Accents**: Energetic yellow (`--y: #FEDC06`) draws attention to primary CTAs, active status, badges, and high-smoke-point metrics.
- **Backgrounds**: The neutral off-white (`--off: #FAFAF8`) maintains reading comfort in content blocks, while deep space indigo/rich black (`--bk: #100B28`) anchors the immersive dark-mode sections (such as the Hero and Benefits sections).
- **Fluid Gradients**:
  - **Ambient Mesh** (`.hero-mesh`): A custom blend of three radial gradients using purple, plum, and deep indigo with varying centers, creating a fluid, moving atmosphere behind text.
  - **Product Showcases**: High-contrast, center-weighted radial gradients representing the soul of each product.
    - *Mustard*: Gold-bronze (`.bg-m`) mimicking the rich mustard seed.
    - *Rice Bran*: Plum-violet (`.bg-r`) signaling scientific physical refining.
    - *Soyabean*: Green-emerald (`.bg-s`) reflecting plant-based organic health.
  - **Linear Accent**: Used on testimonial lines, background cards, and banner dividers to smoothly transition across brand hues.

## 3. Typography
We use typography to reinforce both our traditional heritage and scientific transparency:
- **Display Typography (`Cormorant Garamond` / `--fd`)**: An elegant, high-contrast serif font utilized for main headers and section titles. We use custom font-style pairings (like *italic* emphasis and **bold** weights) to build a sophisticated, editorial rhythm.
- **Body Typography (`Plus Jakarta Sans` / `--fb`)**: A crisp, highly legible contemporary sans-serif typeface used for descriptions, benefit details, navigation links, and primary content.
- **Precision Labeling (`IBM Plex Mono` / `--f-tech`)**: A technical monospaced typeface used for smoke points, molecular formulas (e.g. *γ-Oryzanol*), metrics, and processing capacities. This anchors the engineering side of our production.

## 4. Elevation
Jeevan Rekha employs a flat-at-rest design style that transitions into rich, state-based elevations under user interaction:
- **Static State**: Cards and interactive elements sit flat with subtle border colors (`rgba(75,38,133,.07)`) or low-opacity backgrounds (`rgba(255,255,255,.02)`), minimizing initial cognitive load.
- **Interactive States**:
  - **3D Translation**: Hovering over elements (buttons, cards) translates them upward by `translateY(-3px)` to `translateY(-10px)` using a high-performance Bezier curve (`cubic-bezier(.16, 1, .3, 1)`).
  - **Glow and Shadows**: Interaction activates deep, colored drop shadows (e.g., `rgba(75, 38, 133, 0.16)` or custom glowing yellow shadows for yellow buttons) and shifts borders to warm brand colors.
  - **Component Scaling**: Images inside cards expand slightly (`scale(1.03)`) and shift drop-shadow depth to reinforce depth perception.

## 5. Components
Our custom components focus on clean layouts, structured column flows, and precise animations:
- **Product Cards**: A unified 3-column container system (`min-height: 590px`) featuring centered high-resolution product bottles (`340px` height limit) that remain separate from textual labels. Underneath, a clean column flow places the badge, title, product description, and call-to-action link in proper sequence without overlapping elements.
- **Stats Cards**: Dark grid cards built with responsive column wrapping. Each card features a custom thematic SVG icon container (with individual colored borders and backgrounds for Factory, Filter, Store, and Award tags), a prominent italicized count, and monospaced technical labels.
- **Buttons**:
  - **Pill Buttons (`.btn-y` / `.btn-p`)**: Fully rounded edges (`border-radius: 50px`), heavy font weight (`700`), uppercase lettering with wide letter-spacing (`0.1em`), and translation hover animations with glowing colored shadows.
  - **Outline Buttons (`.btn-outline`)**: Transparent backings with subtle white borders that transition to brand/accent highlights, maintaining visibility without clutter.

## 6. Do's and Don'ts
### Do's
- **DO** verify that all page routes feature an immersive hero banner section using the `.hero-mesh` fluid background style to maintain continuity.
- **DO** keep layouts responsive, utilizing standard max-widths (`1360px`) and container gutters (`56px` desktop / `28px` mobile) to prevent text clipping.
- **DO** separate text fields from images on cards, placing descriptions and action buttons underneath the product visual to ensure readability.

### Don'ts
- **DON'T** change the background colors of the footer (`linear-gradient(180deg, var(--off) 0%, #e6dff0 100%)`) or the sub-footer strip (`linear-gradient(135deg, var(--p) 0%, var(--pd) 100%)`) under any circumstances without explicit user permission.
- **DON'T** introduce hard-coded arbitrary color classes that bypass the css design tokens.
- **DON'T** compress images or shrink container heights to fit text; prioritize clean layout rhythm and remove redundant decorative elements instead.
