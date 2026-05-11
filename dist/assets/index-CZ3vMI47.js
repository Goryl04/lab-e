const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/style-1-DwbnU2wE.css","assets/style-2-zGguPtu9.css","assets/style-3-gJTxPdfe.css"])))=>i.map(i=>d[i]);
(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const y of n.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&i(y)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const P="modulepreload",S=function(e){return"/"+e},E={},h=function(r,o,i){let t=Promise.resolve();if(o&&o.length>0){let b=function(s){return Promise.all(s.map(a=>Promise.resolve(a).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var y=b;document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),c=u?.nonce||u?.getAttribute("nonce");t=b(o.map(s=>{if(s=S(s),s in E)return;E[s]=!0;const a=s.endsWith(".css"),p=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${p}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":P,a||(l.as="script"),l.crossOrigin="",l.href=s,c&&l.setAttribute("nonce",c),document.head.appendChild(l),a)return new Promise((L,w)=>{l.addEventListener("load",L),l.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${s}`)))})}))}function n(u){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u}return t.then(u=>{for(const c of u||[])c.status==="rejected"&&n(c.reason);return r().catch(n)})};function x(){const e=document.createElement("style");e.innerHTML=`
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
    `,document.head.appendChild(e)}const O=Object.assign({"/public/style-1.css":()=>h(()=>Promise.resolve({}),__vite__mapDeps([0])),"/public/style-2.css":()=>h(()=>Promise.resolve({}),__vite__mapDeps([1])),"/public/style-3.css":()=>h(()=>Promise.resolve({}),__vite__mapDeps([2]))}),f={};for(const e in O){let r=e.replace("/public/","").replace(".css","");r=r.replace(/_/g," ").toUpperCase();const o=e.replace("/public","");f[r]=o}const m=Object.keys(f);console.log("Lista styli:",m);m.length===0&&console.warn("Nie znaleziono żadnych plików CSS w folderze public!");let g=m[0],_=f[g],d=null;function v(e){f[e]&&(d&&d.remove(),g=e,_=f[e],d=document.createElement("link"),d.rel="stylesheet",d.href=_,document.head.appendChild(d))}function C(){const e=document.querySelector(".styles_type");if(!e){console.error("Nie znaleziono div w dokumencie HTML!");return}e.innerHTML="";const r=document.createElement("span");r.innerText="Wybierz styl: ",e.appendChild(r);for(const o of m){const i=document.createElement("button");i.innerText=o,i.style.marginLeft="10px",i.style.cursor="pointer",i.addEventListener("click",()=>{v(o)}),e.appendChild(i)}}document.addEventListener("DOMContentLoaded",()=>{m.length>0&&(C(),x(),v(g))});
