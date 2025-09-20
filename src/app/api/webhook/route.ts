import { NextRequest } from 'next/server';

// Mock webhook handler that replaces Paddle integration
// Returns success without processing to maintain API compatibility
export async function POST(_request: NextRequest) {
  try {
    // Simply return success to maintain API structure
    return Response.json({ 
      status: 200, 
      eventName: 'mock-event',
      message: 'Webhook processing disabled - Paddle integration removed'
    });
  } catch (e) {
    console.log(e);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
