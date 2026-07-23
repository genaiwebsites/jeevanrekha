import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Potoler Dorma | Jeevan Rekha",
  description: "Learn how to make authentic Potoler Dorma, a classic Bengali dish of stuffed pointed gourds, cooked in healthy Rice Bran Oil.",
  openGraph: {
    title: "Potoler Dorma | Jeevan Rekha",
    description: "Learn how to make authentic Potoler Dorma, a classic Bengali dish of stuffed pointed gourds, cooked in healthy Rice Bran Oil.",
    url: "https://jeevanrekhafoods.com/blogs/recipes/potoler-dorma",
    siteName: "Jeevan Rekha",
    type: "article",
    images: [
      {
        url: "https://jeevanrekhafoods.com/blogs/potoler-dorma.jpg",
        secureUrl: "https://jeevanrekhafoods.com/blogs/potoler-dorma.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Potoler Dorma Recipe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Potoler Dorma | Jeevan Rekha",
    description: "Learn how to make authentic Potoler Dorma cooked in healthy Rice Bran Oil.",
    images: ["https://jeevanrekhafoods.com/blogs/potoler-dorma.jpg"],
  },
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
          <div className="pa-name" style={{fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", marginTop: "4px"}}>Reviewed by Jeevan Rekha Quality Team</div>
        </div>
      </div>

      <div className="post-layout">
        <div className="post-content" data-d="1">
          <div dangerouslySetInnerHTML={{ __html: `<blockquote>"Pointed gourd (Potol) requires frying at medium heat to achieve a tender skin without scorching the delicate stuffing. Rice Bran Oil offers balanced heat distribution for perfect texture."<br/><br/><strong>— The Jeevan Rekha Quality Team</strong></blockquote>` }} />
          <Image src="/blogs/potoler-dorma.jpg" alt="Potoler Dorma" width={800} height={500} className="post-img object-cover" priority />
          <div className="rich-text" dangerouslySetInnerHTML={{ __html: `<p>Potoler Dorma is one of the most celebratory dishes in traditional Bengali cuisine. Pointed gourds are hollowed out, stuffed with spiced cottage cheese or minced coconut, shallow fried until tender, and then simmered in a rich, fragrant gravy. By using Rice Bran Oil for both frying and gravy preparation, you ensure the gourds absorb minimal oil while retaining their delicate flavors.</p>

<h2>Ingredients:</h2>
<p>* 6 large pointed gourds (Potol), ends trimmed, scraped and hollowed<br>* 150g chhena (paneer), crumbled<br>* 2 tablespoons grated coconut<br>* 1 tablespoon raisins and cashews, chopped<br>* 1/2 teaspoon ginger paste<br>* 1/2 teaspoon garam masala powder<br>* 1/2 teaspoon cumin powder<br>* 1/2 teaspoon coriander powder<br>* 2 tablespoons tomato puree<br>* 3 tablespoons Rice Bran Oil<br>* Salt and sugar to taste</p>

<h2>Instructions:</h2>
<p>1. In a bowl, mix chhena, coconut, raisins, cashews, salt, sugar, and a pinch of garam masala. Stuff this mixture tightly into the hollowed gourds.<br>2. Heat 2 tbsp Rice Bran Oil in a kadai. Shallow fry the stuffed gourds on medium heat until light golden. Set aside.<br>3. In the remaining oil, add ginger paste, tomato puree, cumin, coriander, and salt. Sauté until oil separates.<br>4. Add 1/2 cup water and bring to a gentle simmer.<br>5. Carefully place fried stuffed gourds into the gravy. Cover and cook on low heat for 10 minutes.<br>6. Garnish with garam masala and serve hot with steamed rice or parathas.</p>` }} />
        </div>
      </div>
    </section>
  );
}
