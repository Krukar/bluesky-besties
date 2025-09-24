'use server';

import create_client from '@Lib/bluesky';

export async function sign_in(handle: string): Promise<string> {
    const client = await create_client();

    const state = '434321';

    const url = await client.authorize(handle, {
        state,
    });

    console.log('url', url);

    return '';
}
