const jsonfile = require('jsonfile');
const moment = require('moment')
const simpleGit = require('simple-Git')


const FILE_PATH = './data.json';

const DATE = moment().format();

const data = {
    date: DATE
}

jsonfile.writeFile(FILE_PATH, data);

simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE}).push();
