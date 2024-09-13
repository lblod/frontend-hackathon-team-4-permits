import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SearchErfgoedController extends Controller {
  @tracked heritageInformation = [];
  @tracked searchTerm = '';

  get ids() {
    const encodedSearchTerm = encodeURIComponent(this.searchTerm.trim());
    const url = `/id-search?search=${encodedSearchTerm}`;
    console.log(url);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        const ids = data.data.attributes.ids;
        this.heritageInformation = [];
        ids.forEach(id => {
          this.getJsonWithId(id);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
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
        this.heritageInformation = [...this.heritageInformation, data];
        console.log(`Data for ID ${id}:`, data);
      })
      .catch(error => {
        console.error(`There was a problem with the fetch operation for ID ${id}:`, error);
      });
  }

  @action
  updateSearchTerm(event) {
    this.searchTerm = event.target.value;
  }

  @action
  getImageUrl(info) {
    const primaryImageUri = info.relaties[0].primaire_foto;
    if (primaryImageUri) {
      const photoId = primaryImageUri.replace('https://id.erfgoed.net/afbeeldingen/', '');
      return `https://beeldbank.onroerenderfgoed.be/images/${photoId}/content/small`;
    }
    return 'https://via.placeholder.com/150';
  }

  @action
  performSearch() {
    this.ids;
  }
}
