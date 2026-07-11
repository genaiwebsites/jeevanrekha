import Link from 'next/link';

export default function Blogs() {
  return (
    <section id="view-blogs" className="view-section active">
      <div className="hero vh-auto" style={{
        minHeight: '400px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/blogs_hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          zIndex: 1
        }}></div>

        {/* Glassmorphic Blur Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backdropFilter: 'blur(3.5px) brightness(0.66)',
          backgroundColor: 'rgba(45, 22, 96, 0.20)',
          zIndex: 2
        }}></div>
        
        <div className="hero-wrap rv text-center" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 3
        }}>
          <div className="h-eyebrow"><span className="pulse"></span><span className="eyebrow-t" style={{ color: 'rgba(255,255,255,0.75)' }}>The Jeevan Rekha Journal</span></div>
          <h1 className="s-h" style={{ fontSize: '3.5rem', color: 'var(--w)', textShadow: '0 4px 16px rgba(0,0,0,0.45)' }}>Insights on <strong style={{ color: 'var(--y)' }}>Health</strong>,<br/><em style={{ color: 'var(--y)' }}>Nutrition &amp; Cooking</em></h1>
          <p className="body-t" style={{ maxWidth: '600px', marginTop: '16px', color: 'rgba(255,255,255,0.85)', textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}>Expert advice, debunked myths, and delicious recipes to help you make the healthiest choices for your family.</p>
        </div>
      </div>

      <div className="blog-master">
        <div className="wrap">
          <h2 className="s-h rv" style={{ marginBottom: '40px' }}>Latest <em>Articles</em></h2>
          <div className="blog-grid">
<Link href="/blogs/why-smoke-point-of-the-cooking-oil-matters" className="blog-card rv" ><div className="bc-img-wrap"><div className="bc-tag">Blog</div><img src="/blogs/why-smoke-point-of-the-cooking-oil-matters.png" className="bc-img" alt="Blog Image" /></div><div className="bc-body"><div className="bc-date">Apr 25, 2025 • 5 Min Read</div><h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Why Smoke Point of the Cooking Oil Matters?" }}></h3><p className="bc-desc" dangerouslySetInnerHTML={{ __html: "This topic is of utmost priority and many kitchens can relate to it with certain phrases that explain their cooking oil habits, procedure, and ingredi..." }}></p><div className="bc-read">Read Article</div></div></Link>
<Link href="/blogs/mothers-day-recipes-prepared-with-rice-bran-oil" className="blog-card rv" data-d="2"><div className="bc-img-wrap"><div className="bc-tag">Blog</div><img src="/blogs/mothers-day-recipes-prepared-with-rice-bran-oil.png" className="bc-img" alt="Blog Image" /></div><div className="bc-body"><div className="bc-date">Apr 25, 2025 • 5 Min Read</div><h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Mothers Day Recipes prepared with Rice Bran Oil" }}></h3><p className="bc-desc" dangerouslySetInnerHTML={{ __html: "No matter where or with whom you’re celebrating your Mother’s Day, be it your mom, mother figure, or even your aunt—you should always make an extra ef..." }}></p><div className="bc-read">Read Article</div></div></Link>
<Link href="/blogs/easy-evening-snacks-recipe-with-rice-bran-oil" className="blog-card rv" data-d="3"><div className="bc-img-wrap"><div className="bc-tag">Blog</div><img src="/blogs/easy-evening-snacks-recipe-with-rice-bran-oil.png" className="bc-img" alt="Blog Image" /></div><div className="bc-body"><div className="bc-date">Apr 25, 2025 • 5 Min Read</div><h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Easy Evening Snacks Recipe with Rice Bran Oil" }}></h3><p className="bc-desc" dangerouslySetInnerHTML={{ __html: "Evenings are incomplete without snacks that can be easily prepared with the help of simple ingredients. Here are some solid and simple-to-make plans t..." }}></p><div className="bc-read">Read Article</div></div></Link>
<Link href="/blogs/avoid-these-myths-about-rice-bran-oil-in-india" className="blog-card rv" data-d="4"><div className="bc-img-wrap"><div className="bc-tag">Blog</div><img src="/blogs/avoid-these-myths-about-rice-bran-oil-in-india.png" className="bc-img" alt="Blog Image" /></div><div className="bc-body"><div className="bc-date">Apr 30, 2025 • 5 Min Read</div><h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Avoid these Myths about Rice Bran Oil in India" }}></h3><p className="bc-desc" dangerouslySetInnerHTML={{ __html: "In this era of cutthroat competition the recognition of a product, as well as the quality and its execution, has to be of top priority, otherwise, the..." }}></p><div className="bc-read">Read Article</div></div></Link>
<Link href="/blogs/4-best-recipes-with-rice-bran-oil" className="blog-card rv" data-d="1"><div className="bc-img-wrap"><div className="bc-tag">Blog</div><img src="/blogs/4-best-recipes-with-rice-bran-oil.png" className="bc-img" alt="Blog Image" /></div><div className="bc-body"><div className="bc-date">Apr 30, 2025 • 5 Min Read</div><h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "4 Best Recipes with Rice Bran Oil" }}></h3><p className="bc-desc" dangerouslySetInnerHTML={{ __html: "Rice Bran oil is regarded as one of the best edible oils in the world. Japanese people who are always honored for their holistic lifestyle find it alm..." }}></p><div className="bc-read">Read Article</div></div></Link>
<Link href="/blogs/healthy-cooking-with-rice-bran-oil" className="blog-card rv" data-d="2"><div className="bc-img-wrap"><div className="bc-tag">Blog</div><img src="/blogs/healthy-cooking-with-rice-bran-oil.jpeg" className="bc-img" alt="Blog Image" /></div><div className="bc-body"><div className="bc-date">Jun 22, 2025 • 5 Min Read</div><h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Healthy Cooking with Rice Bran Oil" }}></h3><p className="bc-desc" dangerouslySetInnerHTML={{ __html: "Hidden in the humble grain of rice lies a golden secret. Obtained from the fibrous outer layer of rice grains, rice bran oil offers distinct benefits...." }}></p><div className="bc-read">Read Article</div></div></Link>
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
