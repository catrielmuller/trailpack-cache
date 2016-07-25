# trailpack-cache
###### WARING : The current version of this trailpack is not available

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-download]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

:package: Cache Trailpack


## Install
### With yeoman :

```sh
npm install -g yo generator-trails
yo trails:trailpack trailpack-cache
```
### With npm (you will have to create config file manually) :
```sh
$ npm install --save trailpack-cache
```

## Configure

```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-cache')
  ]
}
```

## Configuration

```
// config/caches.js
module.exports = {
  stores: [
  // Example for redis Store
  {
    name: 'my-redis-store',
    type: 'redis',
    host: 'localhost',
    auth_pass: ''
    db: 0,
    ttl: 600 // Default TTL
  },
  // Example for memory store
  {
    name: 'memory-store',
    type: 'memory',
    max: 100,
    ttl: 60
  },
  // Example for mongo store
  {
    name: 'mongo-store',
    type: 'mongo',
    host: 'loclahost',
    port: '27017',
    username: 'username',
    password: 'password',
    database: 'mymondodb',
    collection: 'cacheManager',
    compression: false,
    server: {
      poolSize: 5,
      auto_reconnect: true
    },
    ttl = 60
  }],

  defaults: ['memory-store']
}
```

[npm-image]: https://img.shields.io/npm/v/trailpack-cache.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-cache
[npm-download]: https://img.shields.io/npm/dt/trailpack-cache.svg
[ci-image]: https://img.shields.io/travis/trailsjs/trailpack-cache/master.svg?style=flat-square
[ci-url]: https://travis-ci.org//trailpack-cache
[daviddm-image]: http://img.shields.io/david/trailsjs/trailpack-cache.svg?style=flat-square
[daviddm-url]: https://david-dm.org/trailsjs/trailpack-cache
[codeclimate-image]: https://img.shields.io/codeclimate/github/trailsjs/trailpack-cache.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github//trailpack-cache
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails
