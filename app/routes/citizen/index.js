import Route from '@ember/routing/route';

export default class CitizenIndexRoute extends Route {
  model() {
    return [
      { title: 'Gewad', date: '01/02/2024', decision: 'Goedgekeurd', id: 2 },
      { title: 'Belfort', date: '03/02/2024', decision: 'Geen', id: 3 },
    ];
  }
}
