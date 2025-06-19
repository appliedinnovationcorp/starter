'use client';

import Image from "next/image";
import { trpc } from '@/lib/trpc';
import { greet } from '@monorepo/ui';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: greeting } = trpc.greet.useQuery({ name: 'World' });
  const { data: users } = trpc.getUsers.useQuery();
  const { data: session } = useSession();

  return (
    <main>
      <h1>{greet('World')}</h1>
      <p>tRPC: {greeting}</p>
      {session ? (
        <div>
          <p>Welcome, {session.user?.name}</p>
          <Button onClick={() => signOut()} variant="secondary">
            Sign Out
          </Button>
        </div>
      ) : (
        <Button onClick={() => signIn('google')}>Sign In with Google</Button>
      )}
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </main>
  );
}