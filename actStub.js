'use strict'

const Sinon = require('sinon')

/**
 *
 *
 * @class ActStub
 */
class ActStub {

  /**
   * Creates an instance of ActStub.
   *
   * @memberOf ActStub
   */
  constructor () {
    this.s = null
  }

  /**
   *
   *
   * @param {any} hemera
   * @param {any} pattern
   * @param {any} error
   * @param {any} args
   * @returns
   *
   * @memberOf ActStub
   */
  stub (hemera, pattern, error, args) {
    if (!this.s) {
      this.s = Sinon.stub(hemera, 'act')
    }
    return this.s.withArgs(pattern).callsFake(function (pattern, cb) {
      // respect act calls without a callback
      if (cb) {
        return cb.call(hemera, error, args)
      }
    })
  }

  /**
   *
   *
   *
   * @memberOf ActStub
   */
  restore () {
    if (this.s) {
      this.s.restore()
    }
  }
}

module.exports = ActStub
