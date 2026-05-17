import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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

const contentDir = path.join(process.cwd(), "content/blog");

async function migrate() {
  console.log("Starting migration to Firebase...");

  if (!fs.existsSync(contentDir)) {
    console.log("Content directory not found.");
    return;
  }

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".mdx"));

  for (const file of files) {
    const slug = file.replace(".mdx", "");
    const fullPath = path.join(contentDir, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    console.log(`Migrating: ${slug}`);
    
    // Instead of auto-generating ID, use slug as ID so we don't duplicate
    const docRef = doc(db, "posts", slug);
    await setDoc(docRef, {
      slug,
      title: data.title,
      content: content,
      excerpt: data.excerpt,
      author: data.author || "Raffiq SR",
      category: data.category || "Trading",
      date: data.date ? new Date(data.date) : new Date(),
      readTime: data.readTime || "5 min read",
      metaTitle: data.title,
      metaDescription: data.excerpt,
      published: true,
      createdAt: new Date(),
    });
  }

  console.log("Migration finished!");
}

migrate().catch(console.error);
