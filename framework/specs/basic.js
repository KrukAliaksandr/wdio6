describe("webdriver.io page", () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation framework framework for Node.js')
    });
});