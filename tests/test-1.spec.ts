import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('chrome-error://chromewebdata/');
  await page.goto('https://www.google.com/search?q=fpune&oq=fpune&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDExMTFqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Facultad Politécnica - Universidad Nacional del Este fpune https://www.fpune.' }).click();
  await page.getByRole('link', { name: 'Ingeniería de Sistemas' }).click();
  await page.getByRole('heading', { name: 'PLANTEL DE COORDINACIÓN DE' }).click();
  await page.getByRole('heading', { name: 'PLANTEL DE COORDINACIÓN DE' }).click();
});