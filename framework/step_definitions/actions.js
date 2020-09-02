const {When} = require("cucumber");
const BasePage = require("../pageobjects/PagesAndCompontents/pages/BasePage");
const LoginPage = require("../pageobjects/PagesAndCompontents/pages/LoginPage");
const ExternalGitLoginPage = require("../pageobjects/PagesAndCompontents/pages/ExternalGitLoginPage");

When(/^I open "([^"]+)" url/, async url => {
    this.info(`navigate to url`);
    return browser.url(url);
});

When(/^I click (About|Help|Documentation|Login) top navigation bar button/, async button => {
    return (await $(new BasePage().topNavBar[`${button.toLowerCase()}Button`])).click();
});

When(/^I click Github login button/, async () => {
    return (await $(new LoginPage().loginBtn)).click();
});

When(/^I wait for (\d+) seconds/, async seconds => {
    return browser.pause(seconds * 1000)
});

When(/^I wait until "([^"])" element on "([^"])" page is (not)? (enabled|displayed|present|clickable)/, async (element, page, not, validation) => {
    return $(selector).waitForDisplayed(ms, !!falseCase);
});

When(/^I login in Github/, async () => {
    return await (new ExternalGitLoginPage().logIn("testautomationuser990", "jaDYGVrfGz8zEh9"));
});
