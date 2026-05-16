const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
    const posts = await prisma.post.count();
    const academy = await prisma.academyArticle.count();
    const enquiries = await prisma.enquiry.count();
    console.log({ posts, academy, enquiries });
    process.exit(0);
}

check();
