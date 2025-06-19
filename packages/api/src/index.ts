import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import prisma from 'apps/web/src/lib/prisma';


const t = initTRPC.create();

export const appRouter = t.router({
  greet: t.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello, ${input.name}!`;
    }),
    getUsers: t.procedure.query(async () => {
      return prisma.user.findMany();
    }),
});

export type AppRouter = typeof appRouter;