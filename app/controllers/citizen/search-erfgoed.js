import Controller from '@ember/controller';

export default class SearchErfgoedController extends Controller {
  get ids(){
    const url = '/id-search?search=Bredabaan';

    fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
    })
    .then(data => {
      const ids = data.data.attributes.ids;
      console.log('IDs:', ids);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

    this.getJsonWithId('98888')
  }

  getJsonWithId(id) {
    return fetch(`https://inventaris.onroerenderfgoed.be/aanduidingsobjecten/${id}`, {
      headers: {
          "Accept": "application/json"
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      console.log('Data:', data);
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
  });
  }
}
