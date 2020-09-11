const { defineParameterType } = require('cucumber');

defineParameterType({name: "helpButton", regexp: /About|Help|Documentation|Login/, transformer: (s) => s});