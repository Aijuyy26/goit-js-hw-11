import{i as u,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();function h(r){return r=encodeURIComponent(r),i.innerHTML='<div class="loader"></div>',fetch(`https://pixabay.com/api/?key=42609290-856768105ab9e79485c69bf61&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function p(r){i.innerHTML="",console.log(r);const o=r.hits;o.length==0&&u.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});const n=o.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${e.likes}</p>
          </li>
          <li><h3>Views</h3><p>${e.views}</p>
            </li>
            <li><h3>Comments</h3><p>${e.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${e.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");i.insertAdjacentHTML("beforeend",n);const s={captionsData:"alt"};let t=new d(".gallery a",s);t.on("show.simplelightbox",function(){}),t.refresh()}const i=document.querySelector("ul.gallery");let c="";const a=document.getElementById("search-input");a.addEventListener("input",r=>{c=a.value.trim(),i.innerHTML=""});const f=document.getElementById("search-button");f.addEventListener("click",()=>{c&&(i.innerHTML='<div class="loader"></div>',h(c).then(r=>p(r)).catch(r=>{console.log(r),u.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}))});
//# sourceMappingURL=commonHelpers.js.map
