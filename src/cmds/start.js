const ora = require('ora');


module.exports = (args) => {
    console.log('Starting bot...')
    const spinner = ora().start();
    try {

        spinner.stop();
    } catch (error) {
        spinner.stop();
        
        console.log(error)
    }
  }