# egg-jsonrpc-client

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-jsonrpc-client.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-jsonrpc-client
[travis-image]: https://img.shields.io/travis/eggjs/egg-jsonrpc-client.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-jsonrpc-client
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-jsonrpc-client.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-jsonrpc-client?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-jsonrpc-client.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-jsonrpc-client
[snyk-image]: https://snyk.io/test/npm/egg-jsonrpc-client/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-jsonrpc-client
[download-image]: https://img.shields.io/npm/dm/egg-jsonrpc-client.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-jsonrpc-client

<!--
Description here.
-->

## Install

```bash
$ npm i egg-jsonrpc-client --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.jsonrpcClient = {
  enable: true,
  package: 'egg-jsonrpc-client',
};
```

## Configuration

Single instance:

```js
exports.jsonrpcClient = {
  client: {
    foo: {
      host: '', // required
      timeout: 5000, // default
      headers: {
        // custom headers
      },
      getHeaders(ctx) {
        return {
          // return custom headers
        }
      },
      beforeRequest(options) {
        // before request hook
      },
    }
  }
};
```

Multiple instance:

```js
exports.jsonrpcClient = {
  clients: {
    foo: {
      // ...
    },
    bar: {
      // ...
    }
  }
}
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

Single instance:

```js
yield app.jsonrpcClient.invoke('foo.bar', { /** params */ })
```

Multiple instance:

```js
yield app.jsonrpcClient.get('foo').invoke('foo.bar', {  })
```

> When `getHeaders` is set, you need to pass `ctx` as the third argument when invoke the method.

# License

MIT License

