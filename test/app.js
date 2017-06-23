'use strict'

const defaultsDeep = require('lodash.defaultsdeep')
const smokesignals = require('smokesignals')
const fsStore = require('cache-manager-fs')

module.exports = defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: {
    models: {},
    controllers: {},
    services: {}
  },
  config: {
    caches: {
      stores: [
        {
          name: 'memory',
          store: 'memory',
          max: 100,
          ttl: 0
        }, {
          name: 'fs',
          store: fsStore
        }
      ],
      defaults: ['memory']
    },
    main: {
      packs: [
        require('../')
      ]
    }
  }
}, smokesignals.FailsafeConfig)


