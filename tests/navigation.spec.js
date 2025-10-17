import { test, expect } from "@playwright/test";

test('navigation: home to first venue shows "Venue details" heading', async ({
  page,
}) => {
  //  Go to home
  await page.goto("/");

  // Wait for the venue list to load (anchors pointing to /venue/...)
  await page.waitForSelector('a[href*="/venue/"]', { timeout: 15000 });

  // Click the first venue
  const firstVenueLink = page.locator('a[href*="/venue/"]').first();
  await firstVenueLink.click();

  // wait until URL includes /venue/
  await page.waitForURL(/\/venue\//, { timeout: 15000 });

  //  Verify heading contains the words "Venue details"
  await expect(
    page.getByRole("heading", { name: /venue details/i }),
  ).toBeVisible();
});
