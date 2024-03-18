import{i as u,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function h(t){return t=encodeURIComponent(t),i.innerHTML='<div class="loader"></div>',fetch(`https://pixabay.com/api/?key=42609290-856768105ab9e79485c69bf61&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function p(t){const o=t.hits;if(o.length===0){u.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});return}const n=document.createElement("div");n.classList.add("loader"),i.innerHTML="",i.appendChild(n);const s=o.map(e=>`<li class="gallery-item">
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
            <li><h3>Likes</h3><p>${e.likes}</p></li>
            <li><h3>Views</h3><p>${e.views}</p></li>
            <li><h3>Comments</h3><p>${e.comments}</p></li>
            <li><h3>Downloads</h3><p>${e.downloads}</p></li>
          </ul>
        </a>
      </li>`).join("");setTimeout(()=>{i.innerHTML=s,new d(".gallery a").on("show.simplelightbox",function(){})},1e3)}const i=document.querySelector("ul.gallery");let c="";const a=document.getElementById("search-input");a.addEventListener("input",t=>{c=a.value.trim(),i.innerHTML=""});const f=document.getElementById("search-button");f.addEventListener("click",()=>{c&&(i.innerHTML='<div class="loader"></div>',h(c).then(t=>p(t)).catch(t=>{console.log(t),u.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}))});
//# sourceMappingURL=commonHelpers.js.map
