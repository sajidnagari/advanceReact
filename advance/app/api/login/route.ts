import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (!password) {
      return NextResponse.json(//-
        { message: 'Invalid username or password' },
        { status: 401 }
      );
    }
    const token = jwt.sign(
      { userId: 1},
      'secretkey',
      {
        expiresIn: '1h',
      }
    );

    cookies().set('token', token, {//+
      path: '/',//+
      httpOnly: true,//+
      secure: process.env.NODE_ENV === 'production',//+
      sameSite: 'strict',//+
    });//+

    return NextResponse.json({
      token,
      user: {
        id: 'ali',
        email: 'admin1@gmail.com',
        userName: 'ali',
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
