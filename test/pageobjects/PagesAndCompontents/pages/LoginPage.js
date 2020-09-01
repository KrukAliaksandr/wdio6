const BasePage = require("./BasePage");

class LoginPage extends BasePage {
    constructor() {
        super();
        this.loginBtn = ".fa-github";
    }

}

module.exports = LoginPage;