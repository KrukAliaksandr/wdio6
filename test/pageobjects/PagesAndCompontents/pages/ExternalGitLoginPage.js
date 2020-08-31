class ExternalGitLoginPage {
    constructor() {
        this.name = "[name='login']";
        this.password = "[name='password']";
        this.signin = "[name='commit']";
    }

    async logIn(username, password) {
        await $(this.name).setValue(username)
        await $(this.password).setValue(password)
        await $(this.signin).click();
    }
}

module.exports = ExternalGitLoginPage;