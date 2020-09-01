class TopNavBar {
    constructor() {
        this.loginButton = "[applogevent=\"Login\"]";
        this.documentationButton = "[applogevent=\"Documentation\"]";
        this.helpButton = "[applogevent=\"Help\"]";
        this.aboutButton = "[applogevent=\"About\"]";
        this.userDropdown = "#dropdownMenu2";
    }

    async clickLoginBtn () {
        return $(this.loginButton).click();
    }
}

module.exports=TopNavBar;