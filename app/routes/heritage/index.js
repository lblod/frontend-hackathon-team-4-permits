import Route from '@ember/routing/route';

export default class HeritageRoute extends Route {
  model() {
    return [
      {
        title: 'Gewad',
        date: '01/02/2024',
        decision: 'Goedgekeurd',
        id: 1
      },
      {
        title: 'Belfort',
        date: '03/02/2024',
        decision: 'Geen',
        id: 1
      },
      {
        title: 'Belfort',
        date: '03/02/2024',
        decision: 'Geen',
        id: 1
      },
      {
        title: 'Belfort',
        date: '03/02/2024',
        decision: 'Geen',
        id: 1
      },
    ];
  }
}
