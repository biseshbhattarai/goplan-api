import { EmployementStatus, PrismaClient } from '@prisma/client';
import { env } from 'process';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(env.PASSWORD, salt);
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
      employmentStatus: EmployementStatus.EMPLOYED,
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
