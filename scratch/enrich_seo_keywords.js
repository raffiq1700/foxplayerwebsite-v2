const { initializeApp } = require('firebase/app');
const { getFirestore, doc, updateDoc, getDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAxD0ncgLn7kCSH-9vPkc-NSQA3NiAhToA",
  authDomain: "foxplayer-algo-technologies.firebaseapp.com",
  projectId: "foxplayer-algo-technologies",
  storageBucket: "foxplayer-algo-technologies.firebasestorage.app",
  messagingSenderId: "405976626891",
  appId: "1:405976626891:web:981455f2751012a3560d4e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const updates = [
  {
    slug: "what-is-algo-trading",
    content_append: "\n\nMany traders searching for **Alice Blue free algo trading** or **Shoonya free algo trading** are looking for reliable ways to automate their strategies without paying high platform fees. FoxPlayer Algo Technologies develops custom **automated trading software**, **broker API integrations**, and **white label trading platforms** for traders and businesses across Chennai, Bengaluru, Hyderabad, and throughout India."
  },
  {
    slug: "short-straddle-strategy",
    content_append: "\n\nWhen implementing a **Nifty option selling strategy** or **Bank Nifty algo trading** logic, the Short Straddle is often considered the **best trading strategy** for range-bound markets. Using our **options trading automation** software, you can manage these multi-leg positions with institutional-grade precision."
  },
  {
    slug: "intraday-trading-basics",
    content_append: "\n\nFor those focused on **intraday trading automation**, having a robust **trading bot for the Indian market** is essential. Whether you are using **Zerodha free algo trading** tools or custom **MCX trading automation**, consistency is built on rule-based execution and strict risk management."
  }
];

async function enrich() {
    console.log("Enriching Academy articles with high-intent SEO keywords...");
    for (const update of updates) {
        try {
            const docRef = doc(db, "academy", update.slug);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const existingContent = docSnap.data().content;
                await updateDoc(docRef, {
                    content: existingContent + update.content_append,
                    updatedAt: new Date()
                });
                console.log(`Enriched: ${update.slug}`);
            }
        } catch (e) {
            console.error(`Error enriching ${update.slug}:`, e);
        }
    }
    console.log("Enrichment complete!");
    process.exit(0);
}

enrich();
