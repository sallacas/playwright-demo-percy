import { test } from "../../TestBase";
import percySnapshot from "@percy/playwright";

test.describe('Demo Test Suite', () => {
    test('Login change form test', { tag: '@percy' }, async ({ demo }) => {
        await demo.goToHome();

        await percySnapshot(demo.page, 'Login form')
        await demo.doSuccessLogin()

        demo.expect(true).toBeTruthy();
    });
});