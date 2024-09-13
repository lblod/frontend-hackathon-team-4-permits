export default function getJsonWithId(id) {
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
    });
}
