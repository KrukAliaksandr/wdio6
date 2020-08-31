class TopNavBar {
    constructor() {
        this.loginButton = "[applogevent=\"Login\"]";
        this.documentationButton = "[applogevent=\"Documentation\"]";
        this.helpButton = "[applogevent=\"Help\"]";
        this.helpButton = "[applogevent=\"About\"]";
    }

    async clickLoginBtn () {
        return $(this.loginButton).click();
    }
}

module.exports=TopNavBar;