import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
export const galleryList = document.querySelector('ul.gallery');
export let query = '';
const inputQuery = document.getElementById('search-input');

inputQuery.addEventListener('input', e => {
  query = inputQuery.value.trim();
  
  galleryList.innerHTML = '';
});

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
  if (query) {
    
    galleryList.innerHTML = '<div class="loader"></div>';
    fetchImages(query)
      .then(data => renderImages(data))
      .catch(error => {
        console.log(error);
        
        iziToast.error({
          title: 'Error',
          message: `Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.`,
          position: 'topRight',
        });
      });
  }
});