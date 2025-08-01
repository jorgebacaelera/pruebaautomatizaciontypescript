import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './features',
  timeout: 60000,
  use: {
    headless: false,
    screenshot: 'only-on-failure'
  }
});
