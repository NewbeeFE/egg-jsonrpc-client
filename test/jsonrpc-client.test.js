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
    const ctx = app.mockContext({
      user: {
        workid: 'foo',
      },
    });
    try {
      const res = yield app.jsonrpcClient.get('foo').invoke('recoitem.offline', { itemId: 'foo' }, ctx);
      assert(res);
    } catch (e) {
      assert(e.code);
    }
  });
});
