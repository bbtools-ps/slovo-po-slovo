const e=(e,t)=>{const n=t.toLowerCase().split("").reduce(((e,t)=>{const n=e[t]??0;return{...e,[t]:n+1}}),{});return e.filter((e=>{const t={...n};return[...e].every((e=>t[e]--))&&e})).sort(((e,t)=>t.length-e.length))},t=async e=>{try{document.querySelector("main").style.display="none";const t=document.createElement("div");t.classList.add("loading"),t.innerHTML="<h1>Учитавам речник...</h1>",document.body.appendChild(t);const n=await fetch(e);return await n.json()}catch(e){console.log(e)}},n=e=>e[Math.floor(Math.random()*e.length)],c=e=>[...e].findLastIndex((e=>e.value));!async function(){const o=document.querySelectorAll(".char"),r=document.querySelector(".solution"),l=document.querySelector(".other-solutions"),a=document.querySelector(".btn-search"),s=document.querySelector(".btn-reset"),u=document.querySelector(".btn-random"),d=(await t("https://raw.githubusercontent.com/bbtools-ps/slagalica/main/dict/sr-rs.json"))?.words.split(" ");d?.length?(document.body.removeChild(document.querySelector(".loading")),document.querySelector("main").style.display="block",o.forEach((e=>e.addEventListener("input",(function(e){this.value=e.target.value.replace(/[^абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ]/g,"");let t=c(o);o[t!==o.length-1&&-1!==t?t+1:-1!==t?o.length-1:0].focus()})))),document.addEventListener("keydown",(e=>{if("Backspace"===e.key){let e=c(o);e=-1!==e?e:0,o[e].value="",o[e].focus()}})),u.addEventListener("click",(()=>{o.forEach((e=>{e.value=n("абвгдђежзијклљмнњопрстћуфхцчџш")}))})),s.addEventListener("click",(()=>{o.forEach((e=>{e.value=""})),r.value="",l.classList.remove("active")})),a.addEventListener("click",(t=>{t.preventDefault();const n=(c=o,[...c].reduce(((e,t)=>t.value?e+t.value:e),""));var c;const a=e(d,n);if(!a.length)return r.value="",l.classList.remove("active"),void alert("Нема такве речи у речнику.");r.value=a[0];const s=[...a].splice(1,5).reduce(((e,t)=>e+`<li>${t}</li>`),"");l.classList.add("active"),l.querySelector("ul").innerHTML=s}))):document.body.innerHTML='<div class="loading"><h1>Грешка приликом учитавања речника!</h1></div>'}();
//# sourceMappingURL=index.d372dacb.js.map
