import { createTRPCReact } from '@trpc/react-query';
import { AppRouter } from '@monorepo/api';

export const trpc = createTRPCReact<AppRouter>();