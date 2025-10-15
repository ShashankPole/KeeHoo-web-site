import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    // Initialize client lazily only when key is present to avoid build-time errors
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Create a streaming response
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: `You are a helpful AI assistant for KheeHoo, a technology company that provides innovative business solutions including web development, mobile apps, AI solutions, and cloud services. 

Your role is to:
- Help visitors understand KheeHoo's services and capabilities
- Answer questions about technology solutions, web development, mobile apps, AI, and cloud services
- Provide helpful information about business technology trends
- Be professional, friendly, and knowledgeable
- If asked about specific pricing or detailed project requirements, encourage them to contact the team directly
- Keep responses concise but informative
- Always be helpful and positive about KheeHoo's services

Company information:
- KheeHoo is a technology company specializing in innovative business solutions
- Services include: Web Development, Mobile App Development, AI Solutions, Cloud Services, Business Intelligence, Cybersecurity
- They have 500+ completed projects, 98% client satisfaction, 50+ team members
- Located at 123 Business Street, Suite 100, City, State 12345
- Contact: info@kheehoo.com, +1 (555) 123-4567
- Website: kheehoo.com`
              },
              {
                role: 'user',
                content: message
              }
            ],
            stream: true,
            max_tokens: 1000,
            temperature: 0.7,
          });

          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              const data = `data: ${JSON.stringify({ content })}\n\n`;
              controller.enqueue(new TextEncoder().encode(data));
            }
          }

          // Send completion signal
          controller.enqueue(new TextEncoder().encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error('OpenAI API error:', error);
          const errorData = `data: ${JSON.stringify({ 
            error: 'Sorry, I encountered an error. Please try again later.' 
          })}\n\n`;
          controller.enqueue(new TextEncoder().encode(errorData));
          controller.close();
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
