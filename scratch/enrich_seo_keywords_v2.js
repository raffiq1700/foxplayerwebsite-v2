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
    slug: "broker-api-integration-basics",
    content_append: "\n\nMany traders searching for **Alice Blue free algo trading** or **Shoonya free algo trading** are looking for reliable ways to automate their strategies without paying high platform fees. FoxPlayer Algo Technologies develops custom **automated trading software**, **broker API integrations**, and **white label trading platforms** for traders and businesses across Chennai, Bengaluru, Hyderabad, and throughout India."
  },
  {
    slug: "what-are-call-and-put-options",
    content_append: "\n\nWhen implementing a **Nifty option selling strategy** or **Bank Nifty algo trading** logic, understanding Call and Put options is the first step. Using our **options trading automation** software, you can manage these multi-leg positions with institutional-grade precision."
  },
  {
    slug: "intraday-trading-method",
    content_append: "\n\nFor those focused on **intraday trading automation**, having a robust **trading bot for the Indian market** is essential. Whether you are using **Zerodha free algo trading** tools or custom **MCX trading automation**, consistency is built on rule-based execution and institutional-grade custom trading bot development."
  },
  {
    slug: "building-a-trading-plan",
    content_append: "\n\nA professional trading plan is the **holy grail trading strategy** that many seek. By combining a solid plan with **algorithmic trading software development India**, you can scale your trading business effectively. We serve clients from Coimbatore to Trichy, providing the **best algo trading platforms** for every type of market condition."
  }
];

async function enrich() {
    console.log("Enriching Academy articles with high-intent SEO keywords (Round 2)...");
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
            } else {
                console.log(`Not found: ${update.slug}`);
            }
        } catch (e) {
            console.error(`Error enriching ${update.slug}:`, e);
        }
    }
    console.log("Enrichment complete!");
    process.exit(0);
}

enrich();
