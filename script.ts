import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.findMany();
    // const user = await prisma.user.create({data: {name: 'Alice 2'}});
    console.log(user)
}

main().catch(e => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect();
})
