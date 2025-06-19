'use client';

import Image from "next/image";
import { trpc } from '@/lib/trpc';
import { greet } from '@monorepo/ui';

export default function Home() {
  const { data: greeting } = trpc.greet.useQuery({ name: 'World' });
  const { data: users } = trpc.getUsers.useQuery();

  return (
    <main>
      <h1>{greet('World')}</h1>
      <p>tRPC: {greeting}</p>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </main>
  );
}