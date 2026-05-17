import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeFirestore, getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAxD0ncgLn7kCSH-9vPkc-NSQA3NiAhToA",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "foxplayer-algo-technologies.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "foxplayer-algo-technologies",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "foxplayer-algo-technologies.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "405976626891",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:405976626891:web:981455f2751012a3560d4e"
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


