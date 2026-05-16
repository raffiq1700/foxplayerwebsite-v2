const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

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

async function listSlugs() {
    console.log("Checking Academy Slugs in Firestore...");
    const querySnapshot = await getDocs(collection(db, "academy"));
    querySnapshot.forEach((doc) => {
        console.log(`ID: ${doc.id}, Slug: ${doc.data().slug}, Status: ${doc.data().status}`);
    });
    process.exit(0);
}

listSlugs();
