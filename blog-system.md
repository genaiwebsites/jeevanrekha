# Jeevan Rekha Blog System Guidelines

This document serves as the single source of truth for the Jeevan Rekha blogging engine. Any future blog posts generated, fetched, or written manually must strictly adhere to the formatting, layout, and SEO conventions defined below.

## 1. Directory Structure & Routing

All blog posts are individual Next.js App Router pages.
To create a new blog post:
1. Create a new directory under `src/app/blogs/` named using the **SEO Slug**.
2. Inside that directory, create a `page.tsx` file.

**SEO Slug Rules:**
- Must be all lowercase.
- Spaces must be replaced with hyphens (`-`).
- Example: `healthy-cooking-with-rice-bran-oil`

## 2. Image Asset Management

Images must not be hosted externally to ensure offline availability and reliability.
1. Download the cover image for the blog post.
2. Save it in the `public/blogs/` directory.
3. **Naming Convention:** The image file name **must exactly match the SEO Slug** of the blog post (e.g., `healthy-cooking-with-rice-bran-oil.jpg`).
4. In the code, reference the image using absolute local paths: `/blogs/[slug].ext`.

## 3. Blog Listing Page (`src/app/blogs/page.tsx`)

Every new blog must be manually added to the blog grid in `src/app/blogs/page.tsx`.
Use the following exact `<Link>` structure to ensure the CSS grid and image shrink-wrapping works correctly:

```tsx
<Link href="/blogs/your-seo-slug" className="blog-card rv" data-d="1">
  <div className="bc-img-wrap">
    <div className="bc-tag">Blog</div>
    <img src="/blogs/your-seo-slug.png" className="bc-img" alt="Your Title" />
  </div>
  <div className="bc-body">
    <div className="bc-date">Mon DD, YYYY • X Min Read</div>
    <h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Your Blog Title" }}></h3>
    <p className="bc-desc" dangerouslySetInnerHTML={{ __html: "A short 2-3 line excerpt describing the post..." }}></p>
    <div className="bc-read">Read Article</div>
  </div>
</Link>
```

## 4. Rich Text Formatting & Typography

The actual blog content must be injected using raw semantic HTML into a specific `.rich-text` wrapper. The global CSS in `globals.css` will automatically apply the premium brand styling.

**Rules for Content HTML:**
- **DO NOT** use inline styles or random classes. 
- **DO NOT** use plain string literals with `\n` characters for line breaks.
- Use standard HTML tags: `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<blockquote>`.
- Ensure all HTML is securely wrapped in template literals and injected via `dangerouslySetInnerHTML`.

```tsx
<div className="post-content rv sl" data-d="1">
  <img src="/blogs/your-seo-slug.png" alt="Title" className="post-img" loading="lazy" />
  <div className="rich-text" dangerouslySetInnerHTML={{ __html: `
    <p>Your introduction paragraph here.</p>
    <h2>Main Section Heading</h2>
    <p>Some text with <strong>bold emphasis</strong> applied.</p>
    <ul>
      <li>Bullet point 1</li>
      <li>Bullet point 2</li>
    </ul>
    <blockquote>A highlighted quote that will render with a yellow border.</blockquote>
  `}} />
</div>
```

## 5. SEO & JSON-LD Requirements

Every blog post must be optimized for search engines.

### A. Update the Sitemap
Whenever a new post is added, you **must** update `src/app/sitemap.ts` to include the new route:
```ts
{
  url: `${BASE_URL}/blogs/your-seo-slug`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.6,
}
```

### B. Inject BlogPosting Schema
Every `page.tsx` must include a `<script type="application/ld+json">` tag right before the closing `</section>` tag of the page.

```tsx
{/* JSON-LD for BlogPosting */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Your Blog Title",
    "description": "Short excerpt...",
    "image": "https://jeevanrekhafoods.com/blogs/your-seo-slug.png",
    "datePublished": "2025-01-01T00:00:00Z",
    "dateModified": "2025-01-01T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "Jeevan Rekha Editorial Team",
      "url": "https://jeevanrekhafoods.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jeevan Rekha",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jeevanrekhafoods.com/jeevan-rekha-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jeevanrekhafoods.com/blogs/your-seo-slug"
    }
  }) }}
/>
```

## 6. Boilerplate Template (`page.tsx`)

Copy this boilerplate for any new blog post:

```tsx
import Link from 'next/link';

export default function BlogPost() {
  return (
    <section id="view-blog-post" className="view-section post-main active">
      <div className="post-hero rv">
        <div className="post-meta">
          <span className="pm-tag">Blog</span>
          <span className="pm-date">Mon DD, YYYY • X Min Read</span>
        </div>
        <h1 className="ph-title">Your Blog Title</h1>
        <div className="post-author">
          <div className="pa-avatar">JR</div>
          <div className="pa-name">By Jeevan Rekha Editorial Team</div>
        </div>
      </div>

      <div className="post-layout">
        <div className="post-content rv sl" data-d="1">
          <img src="/blogs/your-seo-slug.png" alt="Your Blog Title" className="post-img" loading="lazy" />
          <div className="rich-text" dangerouslySetInnerHTML={{ __html: `
            <p>Write your content here using standard HTML tags...</p>
          ` }} />
        </div>

        {/* Sidebar */}
        <div className="post-sidebar rv sr" data-d="2">
          {/* Related Articles Widget */}
          <div className="ps-widget">
            <h3 className="ps-title">Related Articles</h3>
            <ul className="ps-list">
              <li>
                <Link href="/blogs/healthy-cooking-with-rice-bran-oil" className="ps-link">
                  <span>Healthy Cooking with Rice Bran Oil</span>
                  <small>Jun 22, 2025</small>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* CTA Widget */}
          <div className="ps-widget" style={{ background: 'linear-gradient(135deg, var(--p), var(--pm))', color: 'var(--w)', border: 'none' }}>
            <h3 style={{ fontFamily: 'var(--fd)', fontSize: '1.5rem', marginBottom: '12px', fontWeight: 600 }}>Cook Healthier Today</h3>
            <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.8)', marginBottom: '24px', lineHeight: 1.6 }}>Discover the benefits of physically refined, antioxidant-rich Rice Bran Oil.</p>
            <Link href="/products" className="btn-y" style={{ width: '100%', justifyContent: 'center', fontSize: '.75rem', padding: '12px' }}>View Our Oils</Link>
          </div>
        </div>
      </div>
      
      <div className="wrap text-center" style={{ textAlign: 'center', borderTop: '1px solid var(--g10)', paddingTop: '60px' }}>
        <Link href="/blogs" className="btn-outline dark" style={{ borderRadius: '50px' }}>← Back to All Articles</Link>
      </div>

      {/* JSON-LD Schema (Replace with actual data) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          // ... see section 5B for details
        }) }}
      />
    </section>
  );
}
```
