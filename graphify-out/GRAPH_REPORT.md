# Graph Report - .  (2026-07-07)

## Corpus Check
- Corpus is ~13,713 words - fits in a single context window. You may not need a graph.

## Summary
- 138 nodes · 133 edges · 22 communities (20 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Tailwind CSS Configuration|Tailwind CSS Configuration]]
- [[_COMMUNITY_UI Components & Utilities|UI Components & Utilities]]
- [[_COMMUNITY_App Shell & Layout|App Shell & Layout]]
- [[_COMMUNITY_Navigation Components|Navigation Components]]
- [[_COMMUNITY_Tailwind CSS Configuration|Tailwind CSS Configuration]]
- [[_COMMUNITY_Package Manifest|Package Manifest]]
- [[_COMMUNITY_Tailwind CSS Configuration|Tailwind CSS Configuration]]
- [[_COMMUNITY_Project Readme|Project Readme]]
- [[_COMMUNITY_Agents|Agents]]
- [[_COMMUNITY_Tailwind CSS Configuration|Tailwind CSS Configuration]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `cn()` - 13 edges
3. `Jeevan Rekha Design System` - 7 edges
4. `tailwind` - 6 edges
5. `aliases` - 6 edges
6. `scripts` - 5 edges
7. `Button()` - 3 edges
8. `6. Do's and Don'ts` - 3 edges
9. `RootLayout()` - 2 edges
10. `buttonVariants` - 2 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `cn()`  [EXTRACTED]
  src/app/layout.tsx → src/lib/utils.ts
- `Card()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts
- `CardHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts
- `CardTitle()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts
- `CardDescription()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (22 total, 2 thin omitted)

### Community 0 - "TypeScript Configuration"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 1 - "Tailwind CSS Configuration"
Cohesion: 0.12
Nodes (15): iconLibrary, menuAccent, menuColor, registries, rsc, rtl, $schema, style (+7 more)

### Community 2 - "UI Components & Utilities"
Cohesion: 0.12
Nodes (15): aliases, hooks, lib, ui, utils, 1. Overview, 2. Colors, 3. Typography (+7 more)

### Community 3 - "App Shell & Layout"
Cohesion: 0.13
Nodes (6): fraunces, geist, instrumentSans, jetbrainsMono, metadata, RootLayout()

### Community 4 - "Navigation Components"
Cohesion: 0.29
Nodes (10): cn(), Button(), buttonVariants, Card(), CardAction(), CardContent(), CardDescription(), CardFooter() (+2 more)

### Community 5 - "Tailwind CSS Configuration"
Cohesion: 0.17
Nodes (12): dependencies, @base-ui/react, class-variance-authority, clsx, gsap, lucide-react, next, react (+4 more)

### Community 6 - "Package Manifest"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 7 - "Tailwind CSS Configuration"
Cohesion: 0.25
Nodes (7): devDependencies, eslint, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, typescript

### Community 8 - "Project Readme"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **76 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+71 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `aliases` connect `UI Components & Utilities` to `Tailwind CSS Configuration`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Tailwind CSS Configuration` to `Package Manifest`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _76 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Tailwind CSS Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `UI Components & Utilities` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `App Shell & Layout` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._