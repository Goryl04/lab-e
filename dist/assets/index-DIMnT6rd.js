const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./style-1-DwbnU2wE.css","./style-2-zGguPtu9.css","./style-3-gJTxPdfe.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const S="modulepreload",P=function(e,n){return new URL(e,n).href},_={},g=function(n,c,o){let t=Promise.resolve();if(c&&c.length>0){let w=function(i){return Promise.all(i.map(a=>Promise.resolve(a).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const s=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),E=l?.nonce||l?.getAttribute("nonce");t=w(c.map(i=>{if(i=P(i,o),i in _)return;_[i]=!0;const a=i.endsWith(".css"),p=a?'[rel="stylesheet"]':"";if(o)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===i&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":S,a||(u.as="script"),u.crossOrigin="",u.href=i,E&&u.setAttribute("nonce",E),document.head.appendChild(u),a)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})}))}function r(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return t.then(s=>{for(const l of s||[])l.status==="rejected"&&r(l.reason);return n().catch(r)})};function x(){const e=document.createElement("style");e.innerHTML=`
        .styles_type {
            display: flex;
            justify-content: center; 
            align-items: center;
            gap: 15px;
            margin: 20px auto;       
            width: fit-content;      
            padding: 10px 25px;
            color: white;
        }
        
        .styles_type button {
            padding: 6px 16px;
            background: #444;
            color: white;
            border: 1px solid #666;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .styles_type button:hover {
            background: #666;
        }
    `,document.head.appendChild(e)}const O=Object.assign({"/public/style-1.css":()=>g(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url),"/public/style-2.css":()=>g(()=>Promise.resolve({}),__vite__mapDeps([1]),import.meta.url),"/public/style-3.css":()=>g(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url)}),m={};for(const e in O){let n=e.replace("/public/","").replace(".css","");n=n.replace(/_/g," ").toUpperCase();const c=e.replace("/public/","./");m[n]=c}const y=Object.keys(m);console.log("Lista styli:",y);y.length===0&&console.warn("Nie znaleziono żadnych plików CSS w folderze public!");let b=y[0],L=m[b],d=null;function v(e){m[e]&&(d&&d.remove(),b=e,L=m[e],d=document.createElement("link"),d.rel="stylesheet",d.href=L,document.head.appendChild(d))}function k(){const e=document.querySelector(".styles_type");if(!e){console.error("Nie znaleziono div w dokumencie HTML!");return}e.innerHTML="";const n=document.createElement("span");n.innerText="Wybierz styl: ",e.appendChild(n);for(const c of y){const o=document.createElement("button");o.innerText=c,o.style.marginLeft="10px",o.style.cursor="pointer",o.addEventListener("click",()=>{v(c)}),e.appendChild(o)}}document.addEventListener("DOMContentLoaded",()=>{y.length>0&&(k(),x(),v(b))});
