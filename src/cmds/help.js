const menus = {
    main: `
      outside [command] <options>
  
      start .............. starts the bot
      version ............ show package version
      help ............... show help menu for a command`,
  
    start: `
      outside today <options>
  
      --start, -s ..... starts the bot`,
  }
  
  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus.main)
  }