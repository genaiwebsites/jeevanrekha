import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Cholar Daal and Luchi | Jeevan Rekha",
  description: "A classic Bengali breakfast recipe: Cholar Daal and Luchi, cooked beautifully with heart-healthy Rice Bran Oil."
};

export default function RecipePage() {
  return (
    <section id="view-blog-post" className="view-section post-main active">
      <div className="post-hero rv">
        <div className="post-meta">
          <span className="pm-tag">Recipe</span>
          <span className="pm-date">Apr 12, 2025 • 5 Min Read</span>
        </div>
        <h1 className="post-h1">Cholar Daal and Luchi</h1>
        <div className="post-author">
          <div className="pa-avatar">JR</div>
          <div className="pa-name">By Jeevan Rekha Editorial Team</div>
          <div className="pa-name" style={{fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", marginTop: "4px"}}>Reviewed by Jeevan Rekha Quality Team</div>
        </div>
      </div>

      <div className="post-layout">
        <div className="post-content" data-d="1">
          <div dangerouslySetInnerHTML={{ __html: `<blockquote>"The secret to perfect Bengali Luchi lies in the temperature of the oil. A high-smoke-point medium like Rice Bran Oil ensures the dough puffs immediately without absorbing excess fat."<br/><br/><strong>— The Jeevan Rekha Quality Team</strong></blockquote>` }} />
          <Image src="/blogs/cholar-daal-and-luchi.jpg" alt="Cholar Daal and Luchi" width={800} height={500} className="post-img object-cover" priority />
          <div className="rich-text" dangerouslySetInnerHTML={{ __html: `<p>There is nothing quite like the aroma of a quintessential Bengali breakfast. Let us whisk you away to a cozy morning in Bengal with the classic pairing of sweet, spiced Cholar Daal and perfectly puffed Luchi. Imagine golden Luchis swelling into crisp little pillows, ready to scoop up the comforting warmth of the daal. By frying them in physically refined Rice Bran Oil, your Luchis emerge brilliantly light, non-greasy, and enriched with heart-healthy Gamma Oryzanol—ensuring this nostalgic piece of home is as wholesome as it is delicious.</p>

<p>Imagine the soft golden hue of Luchis puffed up like tiny pillows, ready to be paired with the comforting warmth of Cholar Daal. The nutty fragrance of best oil for frying and cooking elevates this simple fare, adding a subtle richness that makes each bite a little more special.</p>

<p>Yields: 2-3 servings<br>Prep time: 20 minutes<br>Cook time: 30 minutes</p>

<h2>Ingredients:</h2>

<p><b>For the Cholar Daal (Split Black Gram Lentils):</b></p>

<p>* 1 cup Cholar Daal (split black gram lentils), rinsed thoroughly<br>* 3 cups water<br>* 1 small bay leaf<br>* 1/2 teaspoon turmeric powder<br>* 1/2 teaspoon ginger paste<br>* 1 green chili, slit<br>* 1/2 teaspoon cumin seeds<br>* A pinch of asafoetida (hing)<br>* 1 tablespoon Rice Bran Oil<br>* Salt to taste<br>* Fresh coriander leaves, chopped for garnish</p>

<p><b>For the Luchi (Puffed Flatbreads):</b></p>

<p>* 2 cups all-purpose flour (maida)<br>* 1 tablespoon Rice Bran Oil<br>* Salt to taste<br>* Water, as needed for kneading<br>* Rice Bran Oil, for deep frying</p>

<h2>Instructions:</h2>

<p><b>Let’s begin with the comforting Daal:</b></p>

<p>1. In a medium-sized pot, combine the rinsed *Cholar Daal* with water, bay leaf, turmeric powder, ginger paste, green chili, and salt.<br>2. Bring the mixture to a boil, then reduce the heat to low, cover, and let it simmer gently for about 20-25 minutes, or until the lentils are soft and cooked through. Keep an eye on the water level and add more if needed to achieve a slightly thick consistency.<br>3. While the daal is simmering, let’s prepare for the tempering. Heat 1 tablespoon of Rice Bran cooking oil in a small pan or ladle over medium heat.<br>4. Once the rice bran oil is hot, add the cumin seeds and asafoetida. Let the cumin seeds splutter.<br>5. Pour this fragrant tempering into the cooked *Cholar Daal*. Stir well and let it simmer for another 2-3 minutes.<br>6. Garnish with freshly chopped coriander leaves. Keep the *Cholar Daal* warm.</p>

<p><b>Now for the delightful Luchis:</b></p>

<p>1. In a large bowl, mix the all-purpose flour and salt. Add 1 tablespoon of the best oil for frying. This little addition will make your Luchis wonderfully soft.<br>2. Gradually add water and knead to form a smooth, firm, and non-sticky dough.<br>3. Cover the dough with a damp cloth and let it rest for at least 15 minutes. This resting period helps the gluten relax, resulting in softer Luchis.<br>4. Divide the dough into small, equal-sized balls.<br>5. Lightly grease your rolling surface and rolling pin with a touch of Rice Bran edible Oil.<br>6. Take one dough ball and gently roll it into a small, thin disc of about 3-4 inches in diameter. Try to keep the thickness even for uniform puffing.<br>7. Heat sufficient Rice Bran Oil in a deep frying pan or kadhai over medium-high heat. The oil should be hot enough for the Luchis to puff up immediately.<br>8. Carefully slide one rolled Luchi into the hot oil. Gently press it down with a slotted spoon. It should puff up beautifully like a balloon.<br>9. Once it turns golden brown on both sides, remove it with a slotted spoon and place it on a paper towel to absorb any excess oil.<br>10. Repeat the process with the remaining dough balls.</p>

<p><b>Serving Suggestion:</b></p>

<p>Serve the warm and comforting *Cholar Daal* alongside the fluffy Luchis. You can tear a piece of Luchi and scoop up the flavorful daal. This simple yet satisfying breakfast is a true taste of Bengal, made even better with the subtle, healthy touch of Rice Bran Oil. Enjoy this little moment of culinary joy!</p>

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
          "headline": "Cholar Daal and Luchi",
          "description": "A classic Bengali breakfast recipe: Cholar Daal and Luchi, cooked beautifully with heart-healthy Rice Bran Oil.",
          "image": "https://jeevanrekhafoods.com/blogs/cholar-daal-and-luchi.jpg",
          "datePublished": "2025-04-11T18:30:00.000Z",
          "dateModified": "2025-04-11T18:30:00.000Z",
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
            "@id": "https://jeevanrekhafoods.com/blogs/recipes/cholar-daal-and-luchi"
          }
        }) }}
      />
    </section>
  );
}
