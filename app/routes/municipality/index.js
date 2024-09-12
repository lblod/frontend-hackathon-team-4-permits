import Route from '@ember/routing/route';

export default class MunicipalityRoute extends Route {
  model() {
    return [{ title: 'Gravensteen', date: '03/02/2024', decision: 'Geen' }];
  }
}
