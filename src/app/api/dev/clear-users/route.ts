import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/prisma/client';

export async function POST(request: NextRequest) {
  try {
    // Delete all related records first due to foreign key constraints
    await prisma.adminLog.deleteMany({});
    await prisma.feedback.deleteMany({});
    await prisma.surveyResponse.deleteMany({});
    await prisma.userFilmProgress.deleteMany({});
    await prisma.emailVerification.deleteMany({});
    await prisma.passwordReset.deleteMany({});
    
    // Delete all users (development only)
    await prisma.user.deleteMany({});
    
    return NextResponse.json({ message: 'All users deleted successfully' });
  } catch (error) {
    console.error('Error deleting users:', error);
    return NextResponse.json(
      { error: 'Failed to delete users', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
