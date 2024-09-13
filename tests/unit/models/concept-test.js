import { module, test } from 'qunit';

import { setupTest } from 'hackathon-team-4-frontend-permits/tests/helpers';

module('Unit | Model | concept', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('concept', {});
    assert.ok(model);
  });
});
