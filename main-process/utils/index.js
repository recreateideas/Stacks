const dockerCli = require('./docker-cli');
const compose = require('./compose');

module.exports = {
    ...compose,
    ...dockerCli,
};
