const ora = require('ora');
const getTelegram = require('../utils/getTelegram');


module.exports = async (args) => {
    console.log('Starting bot...')
    const spinner = ora().start();
    try {
        const foo = args.start || args.s
        const intent = await getTelegram(foo)
        spinner.stop();

        console.log(`Your message ${intent}`)
    } catch (error) {
        spinner.stop();

        console.log(error)
    }
  }