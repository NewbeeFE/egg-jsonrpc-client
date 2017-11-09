'use strict';

exports.keys = '123456';

exports.jsonrpcClient = {
  client: {
    host: 'http://raas.test.uae.cn:7001/rpc/v1',
    timeout: 8000,
    headers: {
      'X-Country-Line': 'india',
    },
  },
};
