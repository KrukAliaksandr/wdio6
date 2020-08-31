const BasePage = require("./BasePage")

class StartingPage extends BasePage {
    constructor() {
        super();
        this.pageHeader = '.page-header';
        this.cathegories = '.popular-body>.category';
        this.homeCards = '.home-card';

    }

}