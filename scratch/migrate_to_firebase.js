const { PrismaClient } = require('@prisma/client');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, serverTimestamp, setDoc, doc } = require('firebase/firestore');

const prisma = new PrismaClient();

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

async function migrate() {
    console.log("Starting migration...");

    // 1. Migrate Blogs (Posts)
    const posts = await prisma.post.findMany();
    console.log(`Found ${posts.length} blogs. Migrating...`);
    for (const post of posts) {
        try {
            await addDoc(collection(db, "posts"), {
                ...post,
                date: post.date ? post.date : new Date(),
                createdAt: post.createdAt || new Date(),
                updatedAt: post.updatedAt || new Date(),
                // Ensure tags are parsed if they were JSON strings
                tags: post.tags ? (typeof post.tags === 'string' ? JSON.parse(post.tags) : post.tags) : []
            });
            console.log(`Migrated blog: ${post.title}`);
        } catch (e) {
            console.error(`Failed to migrate blog ${post.title}:`, e);
        }
    }

    // 2. Migrate Academy
    const articles = await prisma.academyArticle.findMany();
    console.log(`Found ${articles.length} academy articles. Migrating...`);
    for (const article of articles) {
        try {
            await addDoc(collection(db, "academy"), {
                ...article,
                createdAt: article.createdAt || new Date(),
                updatedAt: article.updatedAt || new Date(),
                publishedAt: article.publishedAt || new Date()
            });
            console.log(`Migrated article: ${article.title}`);
        } catch (e) {
            console.error(`Failed to migrate article ${article.title}:`, e);
        }
    }

    // 3. Migrate Enquiries
    const enquiries = await prisma.enquiry.findMany();
    console.log(`Found ${enquiries.length} enquiries. Migrating...`);
    for (const enquiry of enquiries) {
        try {
            await addDoc(collection(db, "enquiries"), {
                ...enquiry,
                createdAt: enquiry.createdAt || new Date()
            });
            console.log(`Migrated enquiry from: ${enquiry.email}`);
        } catch (e) {
            console.error(`Failed to migrate enquiry ${enquiry.email}:`, e);
        }
    }

    console.log("Migration complete!");
    process.exit(0);
}

migrate();
