import 'dotenv/config';
import { prisma } from '../src/prisma/client';

async function clearUsers() {
  try {
    // Delete all users
    await prisma.user.deleteMany({});
    console.log('All users deleted successfully');
  } catch (error) {
    console.error('Error deleting users:', error);
  } finally {
    await prisma.$disconnect();
  }
}

clearUsers();
