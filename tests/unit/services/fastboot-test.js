import { module, test } from 'qunit';
import { setupTest } from 'hackathon-team-4-frontend-permits/tests/helpers';

module('Unit | Service | fastboot', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:fastboot');
    assert.ok(service);
  });
});
