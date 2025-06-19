import Image from "next/image";
import { greet } from '@monorepo/ui';

export default function Home() {
  return (
    <main>
      <h1>{greet('World')}</h1>
    </main>
  );
}