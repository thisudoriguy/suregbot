
// const { version } = require( '../../package.json');
 const { version } = require(__basedir + `${'/..'}` + '/package.json');


module.exports = (args) => {
  console.log(`v${version}`)
}