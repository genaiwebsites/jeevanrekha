---
target: src/app/contact/page.tsx
total_score: 36
p0_count: 0
p1_count: 1
timestamp: 2026-07-07T06-24-10Z
slug: src-app-contact-page-tsx
---
# Design Critique: src/app/contact/page.tsx

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4/4 | Form submit has clear sending and success states with smooth scroll-into-view. |
| 2 | Match System / Real World | 4/4 | Standard contact methods (Phone, Email, WhatsApp, address) mapped clearly. |
| 3 | User Control and Freedom | 4/4 | FAQ accordion collapses and expands correctly on click (height toggles from 0 to 112px). |
| 4 | Consistency and Standards | 3/4 | Multiple all-caps tracked kicker eyebrows used above headings, violating the visual cleanup pattern. |
| 5 | Error Prevention | 4/4 | Client-side validation prevents invalid submissions by checking required fields and radio types. |
| 6 | Recognition Rather Than Recall | 4/4 | Form inputs have clear placeholder examples and persistent labels. |
| 7 | Flexibility and Efficiency | 3/4 | Standard enquiry dropdown selection. |
| 8 | Aesthetic and Minimalist Design | 3/4 | The dark FAQ section description (`.faq-p`) and answer text (`.faq-a-inner`) use low-contrast opacities (`rgba(255,255,255,.42)` and `.45`), failing WCAG readability standards. |
| 9 | Error Recovery | 4/4 | Visual error states highlight empty required inputs. |
| 10 | Help and Documentation | 3/4 | FAQ questions are useful, but low-contrast text reduces readability. |
| **Total** | | **36/40** | **[Very Good]** |

## Anti-Patterns Verdict

* **LLM Assessment**: The contact page uses premium design patterns (communication lines SVG background, active input focus states, and quick-contact card hovers). However, it retains a couple of template tells: (1) multiple uppercase section kickers (`GET IN TOUCH`, `MANUFACTURING PLANT`, `COMMON QUESTIONS`) that look generic, and (2) low-contrast text in the dark FAQ section, which degrades reading comfort.
* **Deterministic Scan**: The automated detector found `0` issues in `src/app/contact/page.tsx`.
* **Visual Overlays**: Overlays injected successfully. No console errors found.

## Priority Issues

### 1. [P1] Low Contrast in Dark FAQ Paragraphs and Answers
* **Why it matters**: The FAQ description (`.faq-p`) and answer body text (`.faq-a-inner`) have colors `rgba(255,255,255,.42)` and `.45` respectively on a dark `#100b28` background. This results in contrast ratios below the WCAG 4.5:1 readability standard for regular text.
* **Fix**: Increase the opacity/brightness of these text selectors to `rgba(255,255,255,.7)` or `rgba(255,255,255,.75)` in `globals.css`.
* **Suggested command**: `/impeccable polish`

### 2. [P2] Repetitive Uppercase Section Kickers
* **Why it matters**: The headers are preceded by tiny uppercase kickers (`GET IN TOUCH`, `MANUFACTURING PLANT`, `COMMON QUESTIONS`). This is a generic layout tell that clutters the typography hierarchy.
* **Fix**: Remove these kickers completely, letting the main section headings lead the layout cleanly. Soften the plant capacity eyebrow `"ESTABLISHED 2019"` to mixed-case `"Established 2019"`.
* **Suggested command**: `/impeccable typeset`

## Persona Red Flags

* **Jordan (First-Time Visitor on Mobile)**: **P1 Red Flag.** The FAQ answers are difficult to read on mobile screens under high ambient lighting due to low text contrast.
* **Alex (Power User)**: **Pass.** Input focus rings and tab-index keyboard navigation work correctly across all form fields.

## Minor Observations
* The WhatsApp link opens in a new tab with correct `target="_blank"` and `rel="noopener noreferrer"` parameters.

## Questions to Consider
* Do we need the quick contact head office box when the official corporate address card is already detailed in the sidebar below it?
