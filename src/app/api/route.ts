import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ message: 'You are authed!' }, { status: 200 });
}
