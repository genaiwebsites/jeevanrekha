import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights on Health, Nutrition & Cooking | Jeevan Rekha Blogs',
  description: 'Read the latest articles, healthy recipes, cooking tips, and debunked myths about edible oils from the Jeevan Rekha editorial team.',
  openGraph: {
    title: 'Insights on Health, Nutrition & Cooking | Jeevan Rekha Blogs',
    description: 'Read the latest articles, healthy recipes, cooking tips, and debunked myths about edible oils from the Jeevan Rekha editorial team.',
    url: 'https://jeevanrekhafoods.com/blogs',
    siteName: 'Jeevan Rekha',
    type: 'website',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/og/og_blogs.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/og_blogs.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Blogs Hero Banner',
      },
      {
        url: 'https://jeevanrekhafoods.com/og/square/sq_blogs.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/square/sq_blogs.jpg',
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Blogs Hero Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights on Health, Nutrition & Cooking | Jeevan Rekha Blogs',
    description: 'Read the latest articles, healthy recipes, cooking tips, and debunked myths about edible oils.',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/og/og_blogs.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/og_blogs.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Blogs Hero Banner',
      },
      {
        url: 'https://jeevanrekhafoods.com/og/square/sq_blogs.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/square/sq_blogs.jpg',
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Blogs Hero Thumbnail',
      },
    ],
  },
};

export default function Blogs() {
  return (
    <section id="view-blogs" className="view-section active">
      <div className="hero vh-auto" style={{
        minHeight: '440px',
        paddingTop: '130px',
        paddingBottom: '50px',
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
          zIndex: 1
        }}>
          <Image
            src="/blogs_hero.png"
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div>

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
          <h1 className="s-h" style={{ fontSize: '3.5rem', color: 'var(--w)', textShadow: '0 4px 16px rgba(0,0,0,0.45)' }}>Insights on <strong style={{ color: 'var(--y)' }}>Health</strong>,<br/><em style={{ color: 'var(--y)' }}>Nutrition &amp; Cooking</em></h1>
          <p className="body-t" style={{ maxWidth: '600px', marginTop: '16px', color: 'rgba(255,255,255,0.85)', textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}>Expert advice, debunked myths, and delicious recipes to help you make the healthiest choices for your family.</p>
        </div>
      </div>

      <div className="blog-master">
        <div className="wrap">
          <h2 className="s-h rv" style={{ marginBottom: '40px' }}>Latest <em>Articles</em></h2>
          <div className="blog-grid">
<Link href="/blogs/why-smoke-point-of-the-cooking-oil-matters" className="blog-card rv" ><div className="bc-img-wrap"><Image src="/blogs/why-smoke-point-of-the-cooking-oil-matters.png" className="bc-img object-cover" alt="Why Smoke Point of the Cooking Oil Matters thumbnail" width={400} height={210} sizes="(max-width: 768px) 100vw, 33vw" /></div><div className="bc-body"><div className="bc-tag">Blog</div><div className="bc-date">Apr 25, 2025 • 5 Min Read</div><h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Why Smoke Point of the Cooking Oil Matters?" }}></h3><p className="bc-desc" dangerouslySetInnerHTML={{ __html: "This topic is of utmost priority and many kitchens can relate to it with certain phrases that explain their cooking oil habits, procedure, and ingredi..." }}></p><div className="bc-read">Read Article</div></div></Link>
<Link href="/blogs/mothers-day-recipes-prepared-with-rice-bran-oil" className="blog-card rv" data-d="2"><div className="bc-img-wrap"><Image src="/blogs/mothers-day-recipes-prepared-with-rice-bran-oil.png" className="bc-img object-cover" alt="Mothers Day Recipes prepared with Rice Bran Oil thumbnail" width={400} height={210} sizes="(max-width: 768px) 100vw, 33vw" /></div><div className="bc-body"><div className="bc-tag">Blog</div><div className="bc-date">Apr 25, 2025 • 5 Min Read</div><h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Mothers Day Recipes prepared with Rice Bran Oil" }}></h3><p className="bc-desc" dangerouslySetInnerHTML={{ __html: "No matter where or with whom you’re celebrating your Mother’s Day, be it your mom, mother figure, or even your aunt—you should always make an extra ef..." }}></p><div className="bc-read">Read Article</div></div></Link>
<Link href="/blogs/easy-evening-snacks-recipe-with-rice-bran-oil" className="blog-card rv" data-d="3"><div className="bc-img-wrap"><Image src="/blogs/easy-evening-snacks-recipe-with-rice-bran-oil.png" className="bc-img object-cover" alt="Easy Evening Snacks Recipe with Rice Bran Oil thumbnail" width={400} height={210} sizes="(max-width: 768px) 100vw, 33vw" /></div><div className="bc-body"><div className="bc-tag">Blog</div><div className="bc-date">Apr 25, 2025 • 5 Min Read</div><h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Easy Evening Snacks Recipe with Rice Bran Oil" }}></h3><p className="bc-desc" dangerouslySetInnerHTML={{ __html: "Evenings are incomplete without snacks that can be easily prepared with the help of simple ingredients. Here are some solid and simple-to-make plans t..." }}></p><div className="bc-read">Read Article</div></div></Link>
<Link href="/blogs/avoid-these-myths-about-rice-bran-oil-in-india" className="blog-card rv" data-d="4"><div className="bc-img-wrap"><Image src="/blogs/avoid-these-myths-about-rice-bran-oil-in-india.png" className="bc-img object-cover" alt="Avoid these Myths about Rice Bran Oil in India thumbnail" width={400} height={210} sizes="(max-width: 768px) 100vw, 33vw" /></div><div className="bc-body"><div className="bc-tag">Blog</div><div className="bc-date">Apr 30, 2025 • 5 Min Read</div><h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Avoid these Myths about Rice Bran Oil in India" }}></h3><p className="bc-desc" dangerouslySetInnerHTML={{ __html: "In this era of cutthroat competition the recognition of a product, as well as the quality and its execution, has to be of top priority, otherwise, the..." }}></p><div className="bc-read">Read Article</div></div></Link>
<Link href="/blogs/4-best-recipes-with-rice-bran-oil" className="blog-card rv" data-d="1"><div className="bc-img-wrap"><Image src="/blogs/4-best-recipes-with-rice-bran-oil.png" className="bc-img object-cover" alt="4 Best Recipes with Rice Bran Oil thumbnail" width={400} height={210} sizes="(max-width: 768px) 100vw, 33vw" /></div><div className="bc-body"><div className="bc-tag">Blog</div><div className="bc-date">Apr 30, 2025 • 5 Min Read</div><h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "4 Best Recipes with Rice Bran Oil" }}></h3><p className="bc-desc" dangerouslySetInnerHTML={{ __html: "Rice Bran oil is regarded as one of the best edible oils in the world. Japanese people who are always honored for their holistic lifestyle find it almost..." }}></p><div className="bc-read">Read Article</div></div></Link>
<Link href="/blogs/healthy-cooking-with-rice-bran-oil" className="blog-card rv" data-d="2"><div className="bc-img-wrap"><Image src="/blogs/healthy-cooking-with-rice-bran-oil.jpeg" className="bc-img object-cover" alt="Healthy Cooking with Rice Bran Oil thumbnail" width={400} height={210} sizes="(max-width: 768px) 100vw, 33vw" /></div><div className="bc-body"><div className="bc-tag">Blog</div><div className="bc-date">Jun 22, 2025 • 5 Min Read</div><h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Healthy Cooking with Rice Bran Oil" }}></h3><p className="bc-desc" dangerouslySetInnerHTML={{ __html: "Hidden in the humble grain of rice lies a golden secret. Obtained from the fibrous outer layer of rice grains, rice bran oil offers distinct benefits...." }}></p><div className="bc-read">Read Article</div></div></Link>
<Link href="/blogs/recipes/8-authentic-diwali-recipes-sweets-savouries-with-heart-healthy-rice-bran-oil" className="blog-card rv" data-d="1">
  <div className="bc-img-wrap">
    <Image src="/blogs/8-authentic-diwali-recipes-sweets-savouries-with-heart-healthy-rice-bran-oil.jpg" className="bc-img object-cover" alt="Rice Bran Oil Recipes: Heart-Healthy Diwali Sweets & Snacks thumbnail" width={400} height={210} sizes="(max-width: 768px) 100vw, 33vw" />
  </div>
  <div className="bc-body">
    <div className="bc-tag">Recipe</div>
    <div className="bc-date">Jan 15, 2025 • 5 Min Read</div>
    <h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Rice Bran Oil Recipes: Heart-Healthy Diwali Sweets & Snacks" }}></h3>
    <p className="bc-desc" dangerouslySetInnerHTML={{ __html: "8 authentic, less greasy Rice Bran Oil recipes for a heart-healthy Diwali...." }}></p>
    <div className="bc-read">Read Recipe</div>
  </div>
</Link>
<Link href="/blogs/recipes/diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking" className="blog-card rv" data-d="2">
  <div className="bc-img-wrap">
    <Image src="/blogs/diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking.jpg" className="bc-img object-cover" alt="Rice Bran Oil: The Heart-Healthy Choice for Diwali Cooking thumbnail" width={400} height={210} sizes="(max-width: 768px) 100vw, 33vw" />
  </div>
  <div className="bc-body">
    <div className="bc-tag">Recipe</div>
    <div className="bc-date">Feb 02, 2025 • 5 Min Read</div>
    <h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Rice Bran Oil: The Heart-Healthy Choice for Diwali Cooking" }}></h3>
    <p className="bc-desc" dangerouslySetInnerHTML={{ __html: "Discover why Rice Bran Oil is the heart-friendly secret for delicious Diwali sweets and savouries...." }}></p>
    <div className="bc-read">Read Recipe</div>
  </div>
</Link>
<Link href="/blogs/recipes/indian-evening-snacks-rice-bran-oil" className="blog-card rv" data-d="3">
  <div className="bc-img-wrap">
    <Image src="/blogs/indian-evening-snacks-rice-bran-oil.jpeg" className="bc-img object-cover" alt="Easy Indian Snacks with Rice Bran Oil | Jeevan Rekha thumbnail" width={400} height={210} sizes="(max-width: 768px) 100vw, 33vw" />
  </div>
  <div className="bc-body">
    <div className="bc-tag">Recipe</div>
    <div className="bc-date">Feb 28, 2025 • 5 Min Read</div>
    <h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Easy Indian Snacks with Rice Bran Oil | Jeevan Rekha" }}></h3>
    <p className="bc-desc" dangerouslySetInnerHTML={{ __html: "Make tasty Indian snacks with Jeevan Rekha&apos;s pure rice bran oil. Enjoy crispy pakoras, samosas, and cutlets at home with the best cooking oi..." }}></p>
    <div className="bc-read">Read Recipe</div>
  </div>
</Link>
<Link href="/blogs/recipes/potoler-dorma" className="blog-card rv" data-d="4">
  <div className="bc-img-wrap">
    <Image src="/blogs/potoler-dorma.jpg" className="bc-img object-cover" alt="Potoler Dorma thumbnail" width={400} height={210} sizes="(max-width: 768px) 100vw, 33vw" />
  </div>
  <div className="bc-body">
    <div className="bc-tag">Recipe</div>
    <div className="bc-date">Mar 14, 2025 • 5 Min Read</div>
    <h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Potoler Dorma" }}></h3>
    <p className="bc-desc" dangerouslySetInnerHTML={{ __html: "A classic Bengali dish of pointed gourds stuffed with paneer and simmered in a rich, aromatic gravy." }}></p>
    <div className="bc-read">Read Recipe</div>
  </div>
</Link>
<Link href="/blogs/recipes/shorshe-ilishi" className="blog-card rv" data-d="1">
  <div className="bc-img-wrap">
    <Image src="/blogs/shorshe-ilishi.jpg" className="bc-img object-cover" alt="Shorshe Ilish thumbnail" width={400} height={210} sizes="(max-width: 768px) 100vw, 33vw" />
  </div>
  <div className="bc-body">
    <div className="bc-tag">Recipe</div>
    <div className="bc-date">Apr 05, 2025 • 5 Min Read</div>
    <h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Shorshe Ilish" }}></h3>
    <p className="bc-desc" dangerouslySetInnerHTML={{ __html: "The quintessential Bengali delicacy of fresh Hilsa fish cooked in a pungent, flavor-packed mustard paste." }}></p>
    <div className="bc-read">Read Recipe</div>
  </div>
</Link>
<Link href="/blogs/recipes/cholar-daal-and-luchi" className="blog-card rv" data-d="2">
  <div className="bc-img-wrap">
    <Image src="/blogs/cholar-daal-and-luchi.jpg" className="bc-img object-cover" alt="Cholar Daal and Luchi thumbnail" width={400} height={210} sizes="(max-width: 768px) 100vw, 33vw" />
  </div>
  <div className="bc-body">
    <div className="bc-tag">Recipe</div>
    <div className="bc-date">May 10, 2025 • 5 Min Read</div>
    <h3 className="bc-title" dangerouslySetInnerHTML={{ __html: "Cholar Daal and Luchi" }}></h3>
    <p className="bc-desc" dangerouslySetInnerHTML={{ __html: "A festive Bengali breakfast featuring spiced lentils paired with puffed, golden flatbreads." }}></p>
    <div className="bc-read">Read Recipe</div>
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
          <div className="cta-btn-group rv sr">
            <Link href="/products" className="btn-p">Explore Oils</Link>
            <Link href="/contact" className="btn-outline dark">Contact Us</Link>
          </div>
        </div>
      </section>
    </section>
  );
}
