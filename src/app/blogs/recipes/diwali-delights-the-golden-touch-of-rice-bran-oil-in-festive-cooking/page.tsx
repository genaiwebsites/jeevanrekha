import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Diwali Delights: Golden Touch of Rice Bran Oil | Jeevan Rekha",
  description: "Discover why physically refined Rice Bran Oil is the perfect, heart-healthy secret for your Diwali sweets and savouries.",
  openGraph: {
    title: "Diwali Delights: Golden Touch of Rice Bran Oil | Jeevan Rekha",
    description: "Discover why physically refined Rice Bran Oil is the perfect, heart-healthy secret for your Diwali sweets and savouries.",
    url: "https://jeevanrekhafoods.com/blogs/recipes/diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking",
    siteName: "Jeevan Rekha",
    type: "article",
    images: [
      {
        url: "https://jeevanrekhafoods.com/og/og_diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking.jpg",
        secureUrl: "https://jeevanrekhafoods.com/og/og_diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking Banner",
      },
      {
        url: "https://jeevanrekhafoods.com/og/square/sq_diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking.jpg",
        secureUrl: "https://jeevanrekhafoods.com/og/square/sq_diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking.jpg",
        width: 800,
        height: 800,
        type: "image/jpeg",
        alt: "diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diwali Delights: Golden Touch of Rice Bran Oil | Jeevan Rekha",
    description: "Discover why physically refined Rice Bran Oil is the perfect secret for your Diwali sweets.",
    images: [
      {
        url: "https://jeevanrekhafoods.com/og/og_diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking.jpg",
        secureUrl: "https://jeevanrekhafoods.com/og/og_diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking Banner",
      },
      {
        url: "https://jeevanrekhafoods.com/og/square/sq_diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking.jpg",
        secureUrl: "https://jeevanrekhafoods.com/og/square/sq_diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking.jpg",
        width: 800,
        height: 800,
        type: "image/jpeg",
        alt: "diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking Thumbnail",
      },
    ],
  },
};

export default function RecipePage() {
  return (
    <section id="view-blog-post" className="view-section post-main active">
      <div className="post-hero rv">
        <div className="post-meta">
          <span className="pm-tag">Festive Recipe</span>
          <span className="pm-date">Oct 15, 2025 • 6 Min Read</span>
        </div>
        <h1 className="post-h1">Diwali Delights: The Golden Touch of Rice Bran Oil in Festive Cooking</h1>
        <div className="post-author">
          <div className="pa-avatar">JR</div>
          <div className="pa-name">By Jeevan Rekha Editorial Team</div>
          <div className="pa-name" style={{fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", marginTop: "4px"}}>Reviewed by Jeevan Rekha Quality Team</div>
        </div>
      </div>

      <div className="post-layout">
        <div className="post-content" data-d="1">
          <div dangerouslySetInnerHTML={{ __html: `<blockquote>"Diwali brings light, joy, and delicious festive feasts. Using Rice Bran Oil for your festive sweet treats and crisp savouries ensures everyone enjoys traditional flavors without digestive heaviness."<br/><br/><strong>— The Jeevan Rekha Quality Team</strong></blockquote>` }} />
          <Image src="/blogs/diwali-delights-the-golden-touch-of-rice-bran-oil-in-festive-cooking.jpg" alt="Diwali Festive Delights" width={800} height={500} className="post-img object-cover" priority />
          <div className="rich-text" dangerouslySetInnerHTML={{ __html: `<p>Diwali is a festival of lights, togetherness, and opulent feasts. From golden Chaklis and crispy Mathris to sweet Gulab Jamuns and Shankarparas, Indian homes come alive with the sizzle of festive frying. However, indulging in festive treats often brings concerns about heart health and cholesterol. This Diwali, bring the golden touch of physically refined Rice Bran Oil into your kitchen to create mouthwatering festive delicacies that are light, heart-healthy, and non-greasy.</p>

<h2>Why Rice Bran Oil Belongs in Your Diwali Kitchen:</h2>
<p>* <b>14,000 PPM Gamma Oryzanol:</b> Protects heart health and balances cholesterol during festive indulgence.<br>* <b>Neutral Flavor:</b> Allows authentic spices, cardamom, and saffron to shine without oily aftertaste.<br>* <b>Higher Smoke Point:</b> Perfect for long festive frying sessions without smoking or charring.</p>` }} />
        </div>
      </div>
    </section>
  );
}
