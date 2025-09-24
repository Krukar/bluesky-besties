'use client';

import { sign_in } from '@Actions';

export default function Page() {
    const handle_submit = async () => {
        console.log('foo');

        await sign_in('hillary.pizza');
    };

    return (
        <div>
            <button onClick={handle_submit}>login</button>
        </div>
    );
}
