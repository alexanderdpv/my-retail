const api = "http://localhost:3000/CatalogEntryView";

const headers = {
  'Accept': 'application/json',
  'Authorization': 'none'
}

export const get = () =>
  fetch(`${api}`)
    .then(data => data.items);
