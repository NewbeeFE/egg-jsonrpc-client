'use strict';

const mm = require('egg-mock');
const assert = require('power-assert');

describe('test/jsonrpc-client.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/jsonrpc-client-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should work', function* () {
    try {
      const res = yield app.jsonrpcClient.invoke('recoitem.offline', { itemId: 'foo' });
      assert(res);
    } catch (e) {
      throw e;
    }
  });
});
