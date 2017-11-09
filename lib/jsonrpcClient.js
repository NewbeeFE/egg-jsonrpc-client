'use strict';

class JsonRpcClient {
  constructor(config, app) {
    this.config = config;
    this.app = app;
  }

  * invoke(method, params, ctx) {
    let { getHeaders, headers, host, timeout, beforeRequest } = this.config;

    if (getHeaders) {
      if (!ctx) {
        this.app.logger.warn('`getHeader` is provided but `ctx` was not passed when invoke RPC method');
      } else {
        headers = Object.assign({}, headers, getHeaders(ctx));
      }
    }

    console.log(headers);

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
