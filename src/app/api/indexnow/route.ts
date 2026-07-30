import { NextResponse } from 'next/server';

const INDEXNOW_KEY = '9f8e7d6c5b4a39281706f5e4d3c2b1a0';
const HOST = 'jeevanrekhafoods.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const urls: string[] = Array.isArray(body.urls) 
      ? body.urls 
      : body.url 
        ? [body.url] 
        : [];

    if (urls.length === 0) {
      return NextResponse.json({ error: 'No URLs provided' }, { status: 400 });
    }

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    };

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      return NextResponse.json({ success: true, submittedUrls: urls });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText, status: response.status }, { status: response.status });
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
