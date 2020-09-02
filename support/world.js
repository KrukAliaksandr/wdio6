const {setWorldConstructor, setDefaultTimeout} = require('cucumber');
const path = require("path");
const winston = require("../config/winston.config");

class World {
    constructor({attach, parameters}) {
        this.attach = attach;
        this.parameters = parameters;
    }

    info(text) {
        winston.info(text);
    }

    error(text) {
        winston.error(text);
    }

}

setDefaultTimeout(60 * 1000);
setWorldConstructor(World);