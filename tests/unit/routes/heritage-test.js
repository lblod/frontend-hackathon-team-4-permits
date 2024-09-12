import { module, test } from 'qunit';
import { setupTest } from 'hackathon-team-4-frontend-permits/tests/helpers';

module('Unit | Route | heritage', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:heritage');
    assert.ok(route);
  });
});
