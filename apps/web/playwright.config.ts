import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'pnpm build && pnpm start',
    port: 3000,
  },
  testDir: 'e2e',
});