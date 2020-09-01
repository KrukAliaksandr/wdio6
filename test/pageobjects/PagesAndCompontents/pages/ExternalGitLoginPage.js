class ExternalGitLoginPage {
    constructor() {
        this.name = "[name='login']";
        this.password = "[name='password']";
        this.signInBtn = "[name='commit']";
    }

    async logIn(username, password) {

        await (await $(this.name)).setValue(username);
        await (await $(this.password)).setValue(password);
        await (await $(this.signInBtn)).click();
    }
}

module.exports = ExternalGitLoginPage;