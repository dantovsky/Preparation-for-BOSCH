import { test, expect } from '@playwright/test';

// Playwright API Testing with TypeScript (from scratch in 10 minutes)
// https://www.youtube.com/watch?v=P4Hswlt-KrI

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Simple Get Request', async ({ request }) => {
  const response = await request.get('https://conduit.bondacademy.com/') // https://api.infermedica.com
  const responseObject = await response.json()
  console.log(responseObject)
  expect(responseObject.tags[0]).toEqual('Test')
  expect(responseObject.tags).toHaveLength(10)
});

test('Simple POST Request', async ({ request }) => {
  const response = await request.get('https://conduit.bondacademy.com/', {
    headers: {
      Authorization: 'Token adsfasdfsfsafsdf...' // Copiar do Network do site após enviar uma mensagem em "New Article"
    },
    data: {
      "article": {"title":"TESTEEE", "description":"Some text", "body":"The body for the article", "tagList":[]} // Payload
    }
  })
  const responseObject = await response.json()
  console.log(responseObject)
  // expect(responseObject.tags[0]).toEqual('Test')
  // expect(responseObject.tags).toHaveLength(10)
});