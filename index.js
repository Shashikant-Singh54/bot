const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

// Use dynamic import for ES module 'random'
import('random').then(({ default: Random }) => {
  const FILE_PATH = './data.json';
  const random = new Random(); // Create an instance of Random

  const makeCommit = n => {
    const x = random.int(0, 54);
    const y = random.int(0, 6);
    const DATE = moment().subtract(1, 'y').add(1, 'd')
                  .add(x, 'w').add(y, 'd').format();

    const data = {
      date: DATE
    };

    jsonfile.writeFile(FILE_PATH, data, () => {
      simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE},
        makeCommit.bind(this, --n)
      );
    });
  }; 
  
  makeCommit(100);
}).catch(error => {
  // Handle any errors that may occur during the import
});
