import { test as driver } from "@playwright/test";
import { DemoPage } from "./pages/DemoPage";
const test = driver.extend<{
    demo: DemoPage;
}>({
    demo: async ({ page }, use) => await use(new DemoPage(page)),
});

export { test }