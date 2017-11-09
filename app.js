'use strict';

const createJsonRpcClient = require('./lib/jsonrpcClient');

module.exports = app => {
  app.addSingleton('jsonrpcClient', createJsonRpcClient);
};
