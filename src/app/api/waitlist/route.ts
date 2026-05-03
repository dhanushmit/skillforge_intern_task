import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (for demo - in production use real database)
let waitlistEntries: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, interest } = body;

    // Validation
    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check for duplicates
    if (waitlistEntries.some(entry => entry.email === email)) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    // Create entry
    const newEntry = {
      id: Date.now(),
      name,
      email,
      interest,
      created_at: new Date().toISOString(),
    };

    waitlistEntries.push(newEntry);

    return NextResponse.json(
      { 
        message: 'Successfully joined the waitlist!',
        data: newEntry 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  // Simple admin authentication
  if (secret !== process.env.ADMIN_SECRET && secret !== 'admin') {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    total: waitlistEntries.length,
    entries: waitlistEntries.sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    ),
  });
}
