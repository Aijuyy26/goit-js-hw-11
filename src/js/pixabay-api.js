import { galleryList } from '../main';
import { query } from '../main';

export function fetchImages(query) {
  
  query = encodeURIComponent(query);
  galleryList.innerHTML = `<div class="loader"></div>`;
  return fetch(
    `https://pixabay.com/api/?key=42609290-856768105ab9e79485c69bf61&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}