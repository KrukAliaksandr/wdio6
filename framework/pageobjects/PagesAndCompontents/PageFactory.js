const LoginPage = require("../PagesAndCompontents/pages/LoginPage");
const StartingPage = require("../PagesAndCompontents/pages/StartingPage");
const ExternalGitLoginPage = require("../PagesAndCompontents/pages/ExternalGitLoginPage");

//TODO implement better getPage method and implement pageFactory properly
class PageFactory {
    constructor() {
    }

    static get pageMap() {
        return new Map(
            [['Login', {expectedUrl: /^https:\/\/galaxy\.ansible\.com\/login\?/, po: new LoginPage()}],
                ['Starting', {expectedUrl: /^https:\/\/galaxy\.ansible\.com$/, po: new StartingPage()}],
                ["ExternalGitLogin", {expectedUrl: /^https:\/\/github\.com\/login\?/, po: new ExternalGitLoginPage()}]
            ]);
    }

    static getPage(url) {
        for (const [key, pageObject] of this.pageMap) {
            if (url.search(pageObject.expectedUrl) !== -1) {
                return pageObject.po
            }
        }
        throw new Error("page object not found by url");
    }
}

module.exports = PageFactory