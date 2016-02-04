import chai from 'chai'
import sinon from 'sinon'

require('sinon-as-promised')

chai.use(require('sinon-chai'))

Object.assign(global, {
  expect: chai.expect,
  sinon: sinon
})
