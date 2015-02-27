
var isNode = typeof window === 'undefined'

describe('Riotjs tests', function() {
  if (isNode) {

    global.compiler = require('../lib/compiler')
    global.expect = require('expect.js')
    require('./specs/compiler-cli') // TODO: fix some tests
    //require('./specs/compiler-browser')
    require('./specs/tmpl')
    require('./specs/observable')
    require('./specs/route')
    require('./specs/scoped-css')

  } else {
    mocha.run()
  }
})