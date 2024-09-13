import { module, test } from 'qunit';
import { setupRenderingTest } from 'hackathon-team-4-frontend-permits/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | concept-checkbox-tree', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ConceptCheckboxTree />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ConceptCheckboxTree>
        template block text
      </ConceptCheckboxTree>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
