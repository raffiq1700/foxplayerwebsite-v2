import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeFirestore, getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxD0ncgLn7kCSH-9vPkc-NSQA3NiAhToA",
  authDomain: "foxplayer-algo-technologies.firebaseapp.com",
  projectId: "foxplayer-algo-technologies",
  storageBucket: "foxplayer-algo-technologies.firebasestorage.app",
  messagingSenderId: "405976626891",
  appId: "1:405976626891:web:981455f2751012a3560d4e"
};

// Global augmentation for TypeScript
declare global {
  var firebaseApp: any;
  var firebaseDb: Firestore;
}

// Initialize Firebase App
const app = global.firebaseApp || (getApps().length > 0 ? getApp() : initializeApp(firebaseConfig));
if (process.env.NODE_ENV !== "production") global.firebaseApp = app;

// Initialize Firestore with long-polling (Crucial for Vercel stability)
let db: Firestore;

if (global.firebaseDb) {
  db = global.firebaseDb;
} else {
  try {
    db = initializeFirestore(app, {
      experimentalForceLongPolling: true,
    });
  } catch (e) {
    db = getFirestore(app);
  }
  if (process.env.NODE_ENV !== "production") global.firebaseDb = db;
}

export { app, db };


