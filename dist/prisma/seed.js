"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const process_1 = require("process");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function main() {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(process_1.env.password, salt);
    await prisma.user.upsert({
        where: {
            email: 'admin@goplan.com',
        },
        update: {},
        create: {
            fullName: 'Bishesh Bhattarai',
            email: 'admin@goplan.com',
            dob: new Date('2000-01-10'),
            password: encryptedPassword,
            phoneNumber: '+9779869195575',
            employmentStatus: client_1.EmployementStatus.EMPLOYED,
        },
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map