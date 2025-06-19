'use client';

import Image from "next/image";
import { trpc } from '@/lib/trpc';
import { greet } from '@monorepo/ui';

export default function Home() {
  const { data } = trpc.greet.useQuery({ name: 'World' });

  return (
    <main>
      <h1>{greet('World')}</h1>
      <p>tRPC: {data}</p>
    </main>
  );
}