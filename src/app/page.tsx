import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1>Bluesky Besties</h1>

            <p>
                <Link href="/oauth/login">Login</Link>
            </p>
        </div>
    );
}
