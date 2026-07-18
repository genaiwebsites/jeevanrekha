import Link from 'next/link';

export const metadata = {
  title: "Potoler Dorma | Jeevan Rekha",
  description: "Delicious and healthy recipe using physically refined Rice Bran Oil."
};

export default function RecipePage() {
  return (
    <section id="view-blog-post" className="view-section post-main active">
      <div className="post-hero rv">
        <div className="post-meta">
          <span className="pm-tag">Recipe</span>
          <span className="pm-date">Feb 3, 2025 • 5 Min Read</span>
        </div>
        <h1 className="post-h1">Potoler Dorma</h1>
        <div className="post-author">
          <div className="pa-avatar">JR</div>
          <div className="pa-name">By Jeevan Rekha Editorial Team</div>
        </div>
      </div>

      <div className="post-layout">
        <div className="post-content rv sl" data-d="1">
          <img src="/blogs/potoler-dorma.jpg" alt="Potoler Dorma" className="post-img" loading="lazy" />
          <div className="rich-text" dangerouslySetInnerHTML={{ __html: `<p>Ah, Potoler Dorma. The very name evokes images of grand Bengali feasts and lazy Sunday afternoons. Picture the aroma of rich, aromatic spices drifting from the kitchen as family gathers around the table. At the center of it all: plump pointed gourds, lovingly stuffed and simmered to perfection in a thick, velvety gravy. Today, we are recreating this timeless classic with a mindful upgrade. Cooked in physically refined Rice Bran Oil, the rich spices are allowed to shine through its neutral flavor, while heart-healthy antioxidants make this royal dish a little kinder to your body.</p>

<p><b>Yields:</b> 6-8 servings<br><b>Prep time:</b> 30 minutes<br><b>Cook time:</b> 35 minutes</p>

<h2>Ingredients:</h2>

<p><b>Potol</b>:</p>

<ul><li>12-14 medium potol, scraped and seeded</li><li>½ tsp turmeric, pinch of salt</li><li>Rice Bran Oil for frying</li></ul>

<p><strong>Stuffing:</strong></p>

<ul><li>150g crumbled paneer</li><li>30g grated khoya kheer (optional)</li><li>1 tbsp raisins, ½ tbsp chopped cashews</li><li>½ green chili (chopped), ½ tsp ginger paste</li><li>¼ tsp garam masala, ¼ tsp sugar, salt to taste</li></ul>

<p><strong>Gravy:</strong></p>

<ul><li>1 medium onion (chopped)</li><li>1 tsp ginger-garlic paste</li><li>½ tsp cumin powder, ½ tsp coriander powder</li><li>¼ tsp turmeric, pinch of red chili powder (optional)</li><li>Pinch of garam masala</li><li>1 medium tomato (pureed)</li><li>¾ cup milk</li><li>1 tbsp Rice Bran Oil</li><li>½ tbsp ghee (optional)</li><li>1 green cardamom, small cinnamon stick, 1 clove</li><li>Salt, chopped coriander for garnish</li></ul>

<h2>Instructions:</h2>

<ol><li><b>Prep Potol:</b> Gently scrape potol, slit lengthwise, and scoop seeds. Rub with turmeric and salt.</li><li><b>Make Stuffing:</b>&nbsp;Mix paneer, khoya kheer (if using), raisins, cashews, chili, ginger, garam masala, sugar, and salt.</li><li><b>Stuff Potol:</b>&nbsp;Fill each potol with the mixture.</li><li><b>Fry Potol:</b>&nbsp;Shallow fry stuffed potol in Rice Bran Oil until light golden. Set aside.</li><li><b>Sauté Aromatics:</b>&nbsp;In the same pan, heat Rice Bran Oil (and ghee). Add cardamom, cinnamon, clove. Sauté onion until golden.</li><li><b>Add Spices:</b>&nbsp;Stir in ginger-garlic paste, then cumin, coriander, turmeric, and red chili powder. Sauté briefly.</li><li><b>Cook Tomato:</b>&nbsp;Add tomato puree and cook until oil separates.</li><li><b>Simmer in Milk:</b> Pour in milk, add salt and garam masala. Bring to a simmer.</li><li><b>Add Potol:</b> Gently place fried potol in the gravy. Cover and simmer on low for 15-20 mins until tender and gravy thickens.</li><li><b>Garnish &amp; Serve:</b>&nbsp;Garnish with coriander. Serve hot with rice or pulao.<br><br></li></ol>

<p>Enjoy this quicker route to a festive favorite, enriched with the goodness of Rice Bran Oil!</p>

` }} />
        </div>

        {/* Sidebar */}
        <div className="post-sidebar rv sr" data-d="2">
          {/* Related Articles Widget */}
          <div className="ps-widget">
            <h3 className="ps-title">Related Recipes</h3>
            <ul className="ps-list">
              <li>
                <Link href="/blogs/recipes/8-authentic-diwali-recipes-sweets-savouries-with-heart-healthy-rice-bran-oil" className="ps-link">
                  <span>8 Authentic Diwali Recipes</span>
                  <small>Apr 12, 2025</small>
                </Link>
              </li>
              <li>
                <Link href="/blogs/recipes/cholar-daal-and-luchi" className="ps-link">
                  <span>Cholar Daal and Luchi</span>
                  <small>Mar 05, 2025</small>
                </Link>
              </li>
              <li>
                <Link href="/blogs/recipes/shorshe-ilishi" className="ps-link">
                  <span>Shorshe Ilish</span>
                  <small>Feb 18, 2025</small>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* CTA Widget */}
          <div className="ps-widget" style={{ background: 'linear-gradient(135deg, var(--p), var(--pm))', color: 'var(--w)', border: 'none' }}>
            <h3 style={{ fontFamily: 'var(--fd)', fontSize: '1.5rem', marginBottom: '12px', fontWeight: 600 }}>Cook Healthier Today</h3>
            <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.8)', marginBottom: '24px', lineHeight: 1.6 }}>Discover the benefits of physically refined, antioxidant-rich Rice Bran Oil.</p>
            <Link href="/products" className="btn-y" style={{ width: '100%', justifyContent: 'center', fontSize: '.75rem', padding: '12px' }}>Shop Now</Link>
          </div>
        </div>
      </div>
      
      <div className="wrap text-center" style={{ textAlign: 'center', borderTop: '1px solid var(--g10)', paddingTop: '60px' }}>
        <Link href="/blogs" className="btn-outline dark" style={{ borderRadius: '50px' }}>← Back to All Articles</Link>
      </div>

      {/* JSON-LD for BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Potoler Dorma",
          "description": "Delicious and healthy recipe using physically refined Rice Bran Oil.",
          "image": "https://jeevanrekhafoods.com/blogs/potoler-dorma.jpg",
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
            "@id": "https://jeevanrekhafoods.com/blogs/recipes/potoler-dorma"
          }
        }) }}
      />
    </section>
  );
}
