import{i as s}from"./vendor-77e16229.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const t={icon:"",messageColor:"white",timeout:2e3,position:"topRight",close:!1,closeOnEscape:!0,closeOnClick:!0,displayMode:"replace"},u=()=>s.error({title:"Error",message:"Please choose a date in the future",backgroundColor:"#CB1E1E",...t}),d=()=>s.success({title:"Success",message:"Countdown finished!",backgroundColor:"#1ECB75",...t}),f=o=>s.error({message:`❌ Rejected promise in ${o}ms`,backgroundColor:"#CB1E1E",...t}),p=o=>s.success({message:`✅ Fulfilled promise in ${o}ms`,backgroundColor:"#1ECB75",...t});export{p as a,f as b,u as e,d as s};
//# sourceMappingURL=iziToast-4259b0f6.js.map
