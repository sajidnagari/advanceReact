import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    cookies().delete('token');
    return NextResponse.json(
      { message: 'Token deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting token:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
