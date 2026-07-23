import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Cholar Daal and Luchi | Jeevan Rekha",
  description: "A classic Bengali breakfast recipe: Cholar Daal and Luchi, cooked beautifully with heart-healthy Rice Bran Oil.",
  openGraph: {
    title: "Cholar Daal and Luchi | Jeevan Rekha",
    description: "A classic Bengali breakfast recipe: Cholar Daal and Luchi, cooked beautifully with heart-healthy Rice Bran Oil.",
    url: "https://jeevanrekhafoods.com/blogs/recipes/cholar-daal-and-luchi",
    siteName: "Jeevan Rekha",
    type: "article",
    images: [
      {
        url: "https://jeevanrekhafoods.com/og/og_cholar-daal-and-luchi.jpg",
        secureUrl: "https://jeevanrekhafoods.com/og/og_cholar-daal-and-luchi.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "cholar-daal-and-luchi Banner",
      },
      {
        url: "https://jeevanrekhafoods.com/og/square/sq_cholar-daal-and-luchi.jpg",
        secureUrl: "https://jeevanrekhafoods.com/og/square/sq_cholar-daal-and-luchi.jpg",
        width: 800,
        height: 800,
        type: "image/jpeg",
        alt: "cholar-daal-and-luchi Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cholar Daal and Luchi | Jeevan Rekha",
    description: "A classic Bengali breakfast recipe: Cholar Daal and Luchi, cooked beautifully with heart-healthy Rice Bran Oil.",
    images: [
      {
        url: "https://jeevanrekhafoods.com/og/og_cholar-daal-and-luchi.jpg",
        secureUrl: "https://jeevanrekhafoods.com/og/og_cholar-daal-and-luchi.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "cholar-daal-and-luchi Banner",
      },
      {
        url: "https://jeevanrekhafoods.com/og/square/sq_cholar-daal-and-luchi.jpg",
        secureUrl: "https://jeevanrekhafoods.com/og/square/sq_cholar-daal-and-luchi.jpg",
        width: 800,
        height: 800,
        type: "image/jpeg",
        alt: "cholar-daal-and-luchi Thumbnail",
      },
    ],
  },
};


const recipeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Cholar Daal and Luchi',
  image: ['https://jeevanrekhafoods.com/og/og_cholar-daal-and-luchi.jpg'],
  author: { '@type': 'Organization', name: 'Jeevan Rekha Editorial Team' },
  datePublished: '2025-04-12',
  description: 'A classic Bengali breakfast recipe: Cholar Daal and Luchi, cooked beautifully with heart-healthy Rice Bran Oil.',
  prepTime: 'PT20M',
  cookTime: 'PT30M',
  totalTime: 'PT50M',
  recipeCategory: 'Breakfast',
  recipeCuisine: 'Bengali',
  recipeYield: '4 servings',
  recipeIngredient: [
    'Chana Dal (Bengal Gram)', 'Maida (All-Purpose Flour)', 'Jeevan Rekha Rice Bran Oil', 'Coconut', 'Raisins', 'Sugar', 'Salt', 'Turmeric', 'Bay Leaf', 'Ghee',
  ],
  recipeInstructions: [
    { '@type': 'HowToStep', text: 'Soak chana dal for 2 hours, then pressure cook with turmeric and salt until soft.' },
    { '@type': 'HowToStep', text: 'Heat Rice Bran Oil in a pan, add bay leaf and temper. Add coconut, raisins, and sugar to the dal.' },
    { '@type': 'HowToStep', text: 'For Luchi, knead maida with salt and Rice Bran Oil into a soft dough. Rest for 15 minutes.' },
    { '@type': 'HowToStep', text: 'Roll small puris and deep-fry in hot Rice Bran Oil until they puff up and are golden.' },
    { '@type': 'HowToStep', text: 'Serve Cholar Daal with hot Luchis immediately.' },
  ],
  publisher: { '@type': 'Organization', name: 'Jeevan Rekha', logo: { '@type': 'ImageObject', url: 'https://jeevanrekhafoods.com/jeevan-rekha-logo.png' } },
};

export default function RecipePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }} />

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

<p>* 2 cups maida (all-purpose flour)<br>* 2 tablespoons Rice Bran Oil for dough (moyen)<br>* Water as needed to knead soft dough<br>* Rice Bran Oil for deep frying</p>

<h2>Instructions:</h2>

<p><b>Prepare the Cholar Daal:</b><br>1. In a pressure cooker, combine daal, water, bay leaf, turmeric, ginger paste, and salt. Pressure cook for 4-5 whistles until tender.<br>2. In a small pan, heat 1 tbsp Rice Bran Oil. Add cumin seeds and hing. When seeds splutter, add slit green chili.<br>3. Pour this tempering into cooked daal and simmer for 5 minutes. Garnish with coriander.</p>

<p><b>Prepare the Luchi:</b><br>1. In a bowl, mix maida and 2 tbsp Rice Bran Oil until crumbly. Gradually add water to form a soft, smooth dough. Cover and rest for 15 minutes.<br>2. Divide dough into small lemon-sized balls. Roll each into thin circles.<br>3. Heat Rice Bran Oil in a deep kadai. Deep fry each Luchi on medium-high heat, pressing gently until fully puffed and golden.<br>4. Serve hot with warm Cholar Daal.</p>` }} />
        </div>
      </div>
      </section>
    </>
  );
}
