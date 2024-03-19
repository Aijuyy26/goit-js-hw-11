import{S as p,i as c}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function y(s){l.innerHTML="";const t=d.map(r=>`<li class="img-blok">
        <a href="${r.largeImageURL}">     
    <img  src="${r.webformatURL}"
    data-source="${r.largeImageURL}"
    alt="${r.tags}">
   
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${r.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${r.views}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${r.comments}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${r.downloads}</p>
  </li>
    </ul>
  </a></li>`).join("");l.insertAdjacentHTML("beforeend",t),new p(".gallery a",{captionsData:"alt"}).refresh()}function g(){const t=`https://pixabay.com/api/?${new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(t).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const l=document.querySelector("ul.gallery");let d,n;const u=document.querySelector("input"),f=document.querySelector("button");document.querySelector("form");const h=document.querySelector(".preloader"),L=()=>{h.style.display="flex"},w=()=>{h.style.display="none"},m=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=m;f.addEventListener("click",async s=>{if(s.preventDefault(),n=u.value.trim().toLowerCase(),!n){c.error({color:"yellow",message:" Please fill in the field for search query.",position:"topRight"}),l.innerHTML="";return}L(),l.innerHTML="";try{const t=await g(n);d=t.hits,d.length?y(t):c.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(t){c.error({color:"red",message:`:x: ${t.message}`,position:"topRight"})}finally{w(),m()}});u.addEventListener("keydown",s=>{s.key==="Enter"&&f.click()});
//# sourceMappingURL=commonHelpers.js.map
