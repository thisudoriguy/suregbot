const minimist = require('minimist');
global.__basedir = __dirname;

module.exports = () => {
    const args = minimist(process.argv.slice(2));

    let cmd = args._[0] || 'help'

    if (args.version || args.v) {
        cmd = 'version'
    }

    if (args.help || args.h) {
        cmd = 'version'
    }


    switch (cmd) {
        case 'start':
            require('./cmds/start')(args)
            break;
        // case 'start':
        //     require('./cmds/save')(args)
        //     break;
        // case 'start':
        //     require('./cmds/time')(args)
        //     break;
        case 'version':
            require('./cmds/version')(args)
            break;
        case 'help':
            require('./cmds/help')(args)
            break;
        default:
            console.error(`"${cmd}" is not a valid command!`);
            break;
    }

    console.log(args)
}