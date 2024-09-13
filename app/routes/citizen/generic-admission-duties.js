import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class CitizenGenericAdmissionDutiesRoute extends Route {
  @service store;

  async model() {
    return (
      await this.store.query('concept-scheme', {
        filter: {
          ':id:': 'a8c81c38-7d79-4c5f-94a7-92af9eb8f3b0',
        },
        include: 'children,children.children,children.children.children',
      })
    ).firstObject;
  }
}
