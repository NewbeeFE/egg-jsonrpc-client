'use strict';

exports.keys = '123456';

exports.jsonrpcClient = {
  default: {
    getHeaders(ctx) {
      return {
        'X-Token': 'foo',
        'X-Operator': ctx.user.workid,
      };
    },
  },
  clients: {
    foo: {
      host: 'http://localhost:7001/rpc/v1',
      timeout: 8000,
      headers: {
        'X-Country-Line': 'foo',
      },
    },
  },
};
