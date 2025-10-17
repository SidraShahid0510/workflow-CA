import { test, expect } from "@playwright/test";

const EMAIL = process.env.E2E_EMAIL;
const PASSWORD = process.env.E2E_PASSWORD;

test.describe("login", () => {
  test("user can log in with valid credentials", async ({ page }) => {
    await page.goto("/login/index.html");

    await page.getByPlaceholder("Email").fill(EMAIL);
    await page.getByPlaceholder("Password").fill(PASSWORD);
    await page.getByRole("button", { name: /login/i }).click();
    await expect(page).toHaveURL(/\/(index\.html)?$/);
  });

  test("user sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login/index.html");

    await page.getByPlaceholder("Email").fill(EMAIL);
    await page.getByPlaceholder("Password").fill("definitely-wrong-password");
    await page.getByRole("button", { name: /login/i }).click();
    await expect(page.locator("#message-container")).toContainText(
      /(invalid|incorrect|wrong|not match)/i,
    );
  });
});
