import Link from 'next/link';

export default function Blogs() {
  return (
    <section id="view-blogs" className="view-section active">
      <div className="hero vh-auto" style={{ minHeight: '400px', paddingBottom: '40px', background: 'var(--w)', borderBottom: '1px solid var(--g10)' }}>
        <div className="hero-wrap rv text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="h-eyebrow"><span className="pulse"></span><span className="eyebrow-t">The Jeevan Rekha Journal</span></div>
          <h1 className="s-h" style={{ fontSize: '3.5rem' }}>Insights on <strong>Health</strong>,<br/><em>Nutrition &amp; Cooking</em></h1>
          <p className="body-t" style={{ maxWidth: '600px', marginTop: '16px' }}>Expert advice, debunked myths, and delicious recipes to help you make the healthiest choices for your family.</p>
        </div>
      </div>

      <div className="blog-master">
        <div className="wrap">
          <h2 className="s-h rv" style={{ marginBottom: '40px' }}>Latest <em>Articles</em></h2>
          <div className="blog-grid">
            
            <Link href="/blogs/healthy-cooking" className="blog-card rv">
              <div className="bc-img-wrap">
                <div className="bc-tag">Cooking</div>
                <div className="bc-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              </div>
              <div className="bc-body">
                <div className="bc-date">Jan 12, 2026 • 5 Min Read</div>
                <h3 className="bc-title">Healthy Cooking with Rice Bran Oil: The Chef's Secret</h3>
                <p className="bc-desc">Discover why top chefs and nutritionists recommend Rice Bran Oil for everyday Indian cooking, and how its high smoke point transforms your meals.</p>
                <div className="bc-read">Read Article</div>
              </div>
            </Link>

            <Link href="/blogs/healthy-cooking" className="blog-card rv" data-d="1">
              <div className="bc-img-wrap">
                <div className="bc-tag">Guide</div>
                <div className="bc-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              </div>
              <div className="bc-body">
                <div className="bc-date">Jan 05, 2026 • 8 Min Read</div>
                <h3 className="bc-title">Ultimate Guide: How to Identify Pure Rice Bran Oil</h3>
                <p className="bc-desc">Not all oils are created equal. Learn how to read the labels, understand physically refined vs. chemically refined, and choose the best quality for your family.</p>
                <div className="bc-read">Read Article</div>
              </div>
            </Link>

            <Link href="/blogs/healthy-cooking" className="blog-card rv" data-d="2">
              <div className="bc-img-wrap">
                <div className="bc-tag">Recipes</div>
                <div className="bc-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              </div>
              <div className="bc-body">
                <div className="bc-date">Dec 28, 2025 • 4 Min Read</div>
                <h3 className="bc-title">Guilt-Free Indian Evening Snacks Made with Rice Bran Oil</h3>
                <p className="bc-desc">Love samosas and pakoras but hate the grease? Rice Bran Oil absorbs up to 20% less into food during deep frying. Here are 3 recipes to try.</p>
                <div className="bc-read">Read Article</div>
              </div>
            </Link>

            <Link href="/blogs/healthy-cooking" className="blog-card rv">
              <div className="bc-img-wrap">
                <div className="bc-tag">Nutrition</div>
                <div className="bc-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              </div>
              <div className="bc-body">
                <div className="bc-date">Dec 15, 2025 • 6 Min Read</div>
                <h3 className="bc-title">Avoid These Common Myths About Rice Bran Oil</h3>
                <p className="bc-desc">Is it just for frying? Is it too heavy? We debunk the top 5 myths surrounding Rice Bran Oil in Indian kitchens using scientific facts.</p>
                <div className="bc-read">Read Article</div>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-strip cta-yellow">
        <div className="cta-inner">
          <div className="rv sl">
            <h2 className="s-h">Ready to Cook<br/>the <em>Jeevan Rekha Way?</em></h2>
            <p className="body-t" style={{ marginTop: '16px' }}>Experience the difference of physically refined, 100% pure oils in your kitchen today.</p>
          </div>
          <div className="rv sr" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/products" className="btn-p">Explore Oils</Link>
            <Link href="/contact" className="btn-outline dark">Contact Us</Link>
          </div>
        </div>
      </section>
    </section>
  );
}
