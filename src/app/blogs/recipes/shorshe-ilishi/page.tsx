import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Shorshe Ilish | Jeevan Rekha",
  description: "The ultimate Shorshe Ilish recipe: fresh Hilsa fish in a pungent mustard gravy, perfected with premium Rice Bran Oil.",
  openGraph: {
    title: "Shorshe Ilish | Jeevan Rekha",
    description: "The ultimate Shorshe Ilish recipe: fresh Hilsa fish in a pungent mustard gravy, perfected with premium Rice Bran Oil.",
    url: "https://jeevanrekhafoods.com/blogs/recipes/shorshe-ilishi",
    siteName: "Jeevan Rekha",
    type: "article",
    images: [
      {
        url: "https://jeevanrekhafoods.com/og/og_shorshe-ilishi.jpg",
        secureUrl: "https://jeevanrekhafoods.com/og/og_shorshe-ilishi.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Shorshe Ilish Recipe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shorshe Ilish | Jeevan Rekha",
    description: "The ultimate Shorshe Ilish recipe: fresh Hilsa fish in a pungent mustard gravy.",
    images: ["https://jeevanrekhafoods.com/og/og_shorshe-ilishi.jpg"],
  },
};

export default function RecipePage() {
  return (
    <section id="view-blog-post" className="view-section post-main active">
      <div className="post-hero rv">
        <div className="post-meta">
          <span className="pm-tag">Recipe</span>
          <span className="pm-date">Apr 10, 2025 • 5 Min Read</span>
        </div>
        <h1 className="post-h1">Shorshe Ilish</h1>
        <div className="post-author">
          <div className="pa-avatar">JR</div>
          <div className="pa-name">By Jeevan Rekha Editorial Team</div>
          <div className="pa-name" style={{fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", marginTop: "4px"}}>Reviewed by Jeevan Rekha Quality Team</div>
        </div>
      </div>

      <div className="post-layout">
        <div className="post-content" data-d="1">
          <div dangerouslySetInnerHTML={{ __html: `<blockquote>"Hilsa is a delicate fish with its own rich oils. Cooking it in a light, neutral oil ensures the pungent mustard paste isn't overpowered, preserving the authentic taste of the Bengali monsoon."<br/><br/><strong>— The Jeevan Rekha Quality Team</strong></blockquote>` }} />
          <Image src="/blogs/shorshe-ilishi.jpg" alt="Shorshe Ilish" width={800} height={500} className="post-img object-cover" priority />
          <div className="rich-text" dangerouslySetInnerHTML={{ __html: `<p>Shorshe Ilish. The very name conjures the sharp, pungent aroma of freshly ground mustard and the unmatched, delicate flavor of Hilsa fish. It is a dish that sings of Bengali monsoons, where every bite is a celebration of heritage. Today, we are bringing this culinary crown jewel to life. By cooking it in premium Rice Bran Oil, you ensure the pungent mustard paste and the rich oils of the Hilsa aren't overpowered by heavy cooking mediums, allowing the pure, authentic flavors of the monsoon to take center stage.</p>

<h2>Ingredients:</h2>
<p>* 4 pieces Hilsa fish (Ilish), washed and drained<br>* 3 tablespoons black mustard seeds<br>* 2 tablespoons yellow mustard seeds<br>* 4-5 green chilies (adjust to heat preference)<br>* 1/2 teaspoon turmeric powder<br>* 1/2 teaspoon nigella seeds (kalo jeere)<br>* 3 tablespoons Rice Bran Oil<br>* Salt to taste<br>* 1 cup warm water</p>

<h2>Instructions:</h2>
<p>1. Soak black and yellow mustard seeds in warm water with a pinch of salt for 15 minutes. Grind with 2 green chilies into a smooth paste.<br>2. Marinate Hilsa pieces with turmeric and salt for 10 minutes.<br>3. Heat 2 tbsp Rice Bran Oil in a pan. Add kalo jeere and slit green chilies.<br>4. Add mustard paste, turmeric, and warm water. Simmer into a fragrant gravy.<br>5. Gently add Hilsa pieces. Cover and cook on low heat for 8-10 minutes.<br>6. Drizzle remaining 1 tbsp Rice Bran Oil on top before serving hot with steamed rice.</p>` }} />
        </div>
      </div>
    </section>
  );
}
