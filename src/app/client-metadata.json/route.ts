import { NextResponse } from 'next/server';

import { blueskyClientMetadata } from '@Lib/bluesky';

export async function GET(): Promise<NextResponse> {
    return NextResponse.json(blueskyClientMetadata(), {
        status: 200,
    });
}
