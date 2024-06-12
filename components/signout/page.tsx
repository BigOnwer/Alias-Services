'use client'

import { Button } from '@/components/ui/button';
import { LockKeyhole } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Logout() {
    const router = useRouter();
    const [loggingOut, setLoggingOut] = useState(false);

    async function logout() {
        setLoggingOut(true);
        router.push('/login');
        await signOut({ redirect: false });
        setLoggingOut(false);
    }

    return (
        <div className="">
            {loggingOut ? (
                <p className="text-gray-600">Por favor, aguarde...</p>
            ) : (
                <Button onClick={logout} className='w-full h-auto text-end' variant={'ghost'}>
                    <LockKeyhole className="w-3 h-3 mr-3" />
                    Logout
                </Button>
            )}
        </div>
    );
}
