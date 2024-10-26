'use client';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    return (
        <div>
            Clinet page
            <button onClick={() => router.push('/')}>CLick</button>
        </div>
    );
}
