import { appRouter } from '@monorepo/api';
import { createNextApiHandler } from '@trpc/server/adapters/next';

export const GET = createNextApiHandler({ router: appRouter });
export const POST = createNextApiHandler({ router: appRouter });