import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Easy Indian Snacks with Rice Bran Oil | Jeevan Rekha",
  description: "Make tasty and healthy Indian snacks with pure Rice Bran Oil. Enjoy crispy pakoras, samosas, and cutlets at home.",
  openGraph: {
    title: "Easy Indian Snacks with Rice Bran Oil | Jeevan Rekha",
    description: "Make tasty and healthy Indian snacks with pure Rice Bran Oil. Enjoy crispy pakoras, samosas, and cutlets at home.",
    url: "https://jeevanrekhafoods.com/blogs/recipes/indian-evening-snacks-rice-bran-oil",
    siteName: "Jeevan Rekha",
    type: "article",
    images: [
      {
        url: "https://jeevanrekhafoods.com/og/og_indian-evening-snacks-rice-bran-oil.jpg",
        secureUrl: "https://jeevanrekhafoods.com/og/og_indian-evening-snacks-rice-bran-oil.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "indian-evening-snacks-rice-bran-oil Banner",
      },
      {
        url: "https://jeevanrekhafoods.com/og/square/sq_indian-evening-snacks-rice-bran-oil.jpg",
        secureUrl: "https://jeevanrekhafoods.com/og/square/sq_indian-evening-snacks-rice-bran-oil.jpg",
        width: 800,
        height: 800,
        type: "image/jpeg",
        alt: "indian-evening-snacks-rice-bran-oil Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Indian Snacks with Rice Bran Oil | Jeevan Rekha",
    description: "Make tasty and healthy Indian snacks with pure Rice Bran Oil.",
    images: [
      {
        url: "https://jeevanrekhafoods.com/og/og_indian-evening-snacks-rice-bran-oil.jpg",
        secureUrl: "https://jeevanrekhafoods.com/og/og_indian-evening-snacks-rice-bran-oil.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "indian-evening-snacks-rice-bran-oil Banner",
      },
      {
        url: "https://jeevanrekhafoods.com/og/square/sq_indian-evening-snacks-rice-bran-oil.jpg",
        secureUrl: "https://jeevanrekhafoods.com/og/square/sq_indian-evening-snacks-rice-bran-oil.jpg",
        width: 800,
        height: 800,
        type: "image/jpeg",
        alt: "indian-evening-snacks-rice-bran-oil Thumbnail",
      },
    ],
  },
};

export default function RecipePage() {
  return (
    <section id="view-blog-post" className="view-section post-main active">
      <div className="post-hero rv">
        <div className="post-meta">
          <span className="pm-tag">Recipe</span>
          <span className="pm-date">Mar 8, 2025 • 5 Min Read</span>
        </div>
        <h1 className="post-h1">Easy Evening Snacks Recipe with Rice Bran Oil</h1>
        <div className="post-author">
          <div className="pa-avatar">JR</div>
          <div className="pa-name">By Jeevan Rekha Editorial Team</div>
          <div className="pa-name" style={{fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", marginTop: "4px"}}>Reviewed by Jeevan Rekha Quality Team</div>
        </div>
      </div>

      <div className="post-layout">
        <div className="post-content" data-d="1">
          <div dangerouslySetInnerHTML={{ __html: `<blockquote>"Frying evening snacks in physically refined Rice Bran Oil prevents excessive oil absorption, keeping your favorite pakoras and samosas light, crispy, and digestively friendly."<br/><br/><strong>— The Jeevan Rekha Quality Team</strong></blockquote>` }} />
          <Image src="/blogs/indian-evening-snacks-rice-bran-oil.jpeg" alt="Indian Evening Snacks" width={800} height={500} className="post-img object-cover" priority />
          <div className="rich-text" dangerouslySetInnerHTML={{ __html: `<p>Evening tea time in an Indian household is incomplete without a hot, crispy snack. From golden Samosas to crunchy Pakoras and spicy Aloo Tikkis, these snacks bring families together. However, traditional deep frying in heavy oils often leads to excess greasiness and heaviness. By switching to physically refined Rice Bran Oil, you can enjoy all your favorite evening delicacies with significantly less oil absorption and zero heavy aftertaste.</p>

<h2>Why Rice Bran Oil is Ideal for Evening Frying:</h2>
<p>* <b>High Smoke Point (232°C):</b> Prevents oil breakdown and smoke formation during deep frying.<br>* <b>Low Oil Absorption:</b> Keeps fried snacks crisp on the outside without soaking up excessive oil.<br>* <b>Gamma Oryzanol (14,000 PPM):</b> Enriches your snacks with natural heart-healthy antioxidants.</p>

<h2>Top 3 Quick Evening Snack Ideas:</h2>
<p><b>1. Crispy Vegetable Pakoras:</b> Dip sliced onions, potatoes, and spinach in spiced besan batter and deep fry in hot Rice Bran Oil until golden brown.<br><b>2. Aloo Tikki:</b> Shallow fry spiced mashed potato patties until a golden, crispy crust forms.<br><b>3. Paneer Cutlets:</b> Roll crumbled paneer patties in breadcrumbs and shallow fry for a quick protein-rich treat.</p>` }} />
        </div>
      </div>
    </section>
  );
}
