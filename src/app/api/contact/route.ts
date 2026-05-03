import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (for demo - in production use real database)
const contactMessages: {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
  status: string;
}[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
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

    // Message length validation
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Create message entry
    const messageEntry = {
      id: Date.now(),
      name,
      email,
      message,
      created_at: new Date().toISOString(),
      status: 'unread',
    };

    contactMessages.push(messageEntry);

    return NextResponse.json(
      { 
        message: 'Message sent successfully!',
        data: messageEntry 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
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
    total: contactMessages.length,
    unread: contactMessages.filter(msg => msg.status === 'unread').length,
    messages: contactMessages.sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    ),
  });
}
