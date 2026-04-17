import { test, expect } from '@playwright/test';

test.describe('Table E2E', () => {
  test('renders table and opens MUI picker', async ({ page }) => {
    await page.goto('/');
    // Check table is rendered
    await expect(page.getByRole('table')).toBeVisible();

    // Try to find the hireDate header cell and open the picker
    const hireDateHeaderCell = await page.locator('[data-testid="mtt-table-header-cell.hireDate"]').first();
    const pickerButton = hireDateHeaderCell.getByRole('button', { name: /choose date/i }).first();
    await pickerButton.click();

    // The picker should open as a dialog or tooltip
    const pickerSurface = page.getByRole('dialog').or(page.getByRole('tooltip'));
    await expect(pickerSurface).toBeVisible();
    await expect(pickerSurface.getByRole('button', { name: /previous month/i })).toBeVisible();
    await expect(pickerSurface.getByRole('button', { name: /next month/i })).toBeVisible();
  });
});
