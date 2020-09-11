const {When} = require("cucumber");
const BasePage = require("../pageobjects/PagesAndCompontents/pages/BasePage");
const LoginPage = require("../pageobjects/PagesAndCompontents/pages/LoginPage");
const ExternalGitLoginPage = require("../pageobjects/PagesAndCompontents/pages/ExternalGitLoginPage");
const {username, password} = require("../../resource/credentials/credentials.json")

When(/^I open "([^"]+)" url/, async function (url) {
    this.info(`navigate to url`);
    return browser.url(url);
});

When("I click {helpButton} top navigation bar button", async function (button) {
    return (await $(new BasePage().topNavBar[`${button.toLowerCase()}Button`])).click();
});

When(/^I click Github login button/, async function () {
    return (await $(new LoginPage().loginBtn)).click();
});

When(/^I wait for (\d+) seconds/, async function (seconds) {
    return browser.pause(seconds * 1000)
});

When(/^I wait until "([^"])" element on "([^"])" page is (not)? (enabled|displayed|present|clickable)/, async function (element, page, not, validation) {
    return $(selector).waitForDisplayed(ms, !!falseCase);
});

When(/^I login in Github/, async function () {
    return await (new ExternalGitLoginPage().logIn(username, password));
});
