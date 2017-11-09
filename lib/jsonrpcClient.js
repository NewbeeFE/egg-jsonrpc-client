'use strict';

class JsonRpcClient {
  constructor(config, app) {
    this.config = config;
    this.app = app;
  }

  * invoke(method, params) {
    let { headers, host, timeout, beforeRequest } = this.config;
    headers = headers || {};
    try {
      const res = yield this.app.curl(host, {
        timing: true,
        method: 'POST',
        contentType: 'json',
        data: {
          jsonrpc: '2.0',
          method,
          params,
        },
        dataType: 'json',
        headers,
        timeout,
        beforeRequest,
      });
      const rpcResponse = res.data;
      if (rpcResponse.error) {
        throw rpcResponse.error;
      }
      return rpcResponse.result;
    } catch (e) {
      throw e;
    }
  }
}

function createJsonRpcClient(config, app) {
  return new JsonRpcClient(config, app);
}

module.exports = createJsonRpcClient;
