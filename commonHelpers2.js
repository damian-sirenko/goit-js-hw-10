import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const r=document.querySelector(".form");r.addEventListener("submit",m);function n(e,o){return new Promise((i,t)=>{setTimeout(()=>{o==="fulfilled"?i(e):t(e)},e)})}function m(e){e.preventDefault();const o=e.target.elements.delay.value,i=e.target.elements.state.value;n(o,i).then(function(t){s.success({message:`✅ Fulfilled promise in ${t}ms`,position:"topRight",backgroundColor:"#59A10D",messageColor:"white",icon:""})}).catch(function(t){s.error({message:`❌ Rejected promise in ${t}ms`,position:"topRight",backgroundColor:"#EF4040",messageColor:"white",icon:""})})}
//# sourceMappingURL=commonHelpers2.js.map
