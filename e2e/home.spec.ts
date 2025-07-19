import { test, expect } from "@playwright/test";

test.describe("Task Manager App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("displays the header and initial UI", async ({ page }) => {
    await expect(page.getByText("Task Manager")).toBeVisible();
    await expect(page.getByPlaceholder("Add a new task")).toBeVisible();
  });

  test("adds a new task", async ({ page }) => {
    const input = page.getByPlaceholder("Add a new task");
    const addButton = page.getByRole("button", { name: /add task/i });

    await input.fill("E2E Test Task");
    await addButton.click();

    await expect(page.getByText("E2E Test Task")).toBeVisible();
  });

  test("marks a task as completed", async ({ page }) => {
    const input = page.getByPlaceholder("Add a new task");
    const addButton = page.getByRole("button", { name: /add task/i });

    await input.fill("Complete Me");
    await addButton.click();

    const taskCheckbox = page.locator("input[type='checkbox']").last();
    await taskCheckbox.check();

    const taskText = page.getByText("Complete Me");
    await expect(taskText).toHaveCSS("text-decoration-line", "line-through");
  });

  test("deletes a task", async ({ page }) => {
    const input = page.getByPlaceholder("Add a new task");
    const addButton = page.getByRole("button", { name: /add task/i });

    await input.fill("Delete Me");
    await addButton.click();

    const taskText = page.getByText("Delete Me");
    await taskText.waitFor();

    const taskRow = page.locator("text=Delete Me").locator("..").locator("..");

    const deleteButton = taskRow.getByRole("button", { name: /close task/i });

    page.once("dialog", dialog => dialog.accept());

    await deleteButton.click();

    await expect(page.getByText("Delete Me")).not.toBeVisible();
  });
});
