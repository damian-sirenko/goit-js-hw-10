import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as a}from"./assets/vendor-77e16229.js";const t={startBtn:document.querySelector("button[data-start]"),dateTimePicker:document.querySelector("#datetime-picker"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};function m(e){const d=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:u,seconds:l}}function s(e){return String(e).padStart(2,"0")}let o=null;t.startBtn.disabled=!0;const y={enableTime:!0,time_24hr:!0,dateFormat:"Y-m-d H:i",defaultDate:new Date,minuteIncrement:1,onClose(e){o=e[0],o<new Date?(a.error({title:"Error",message:"Please choose a date in the future"}),t.startBtn.disabled=!0,t.startBtn.style.backgroundColor="#cfcfcf",t.startBtn.style.color="#989898"):(t.startBtn.disabled=!1,t.startBtn.style.backgroundColor="#4e75ff",t.startBtn.style.color="#fff")}};f(t.dateTimePicker,y);t.startBtn.addEventListener("click",()=>{if(!o)return;t.dateTimePicker.disabled=!0,t.startBtn.style.backgroundColor="#cfcfcf",t.startBtn.style.color="#989898",t.dateTimePicker.disabled=!0;const e=setInterval(()=>{const n=o-new Date;if(n<=0){clearInterval(e),a.success({title:"Success",message:"Timer stoped"}),t.startBtn.disabled=!1,t.startBtn.style.backgroundColor="#4e75ff",t.startBtn.style.color="#fff",t.dateTimePicker.disabled=!0;return}const r=m(n);t.days.textContent=s(r.days),t.hours.textContent=s(r.hours),t.minutes.textContent=s(r.minutes),t.seconds.textContent=s(r.seconds)},1e3);t.startBtn.disabled=!0,t.dateTimePicker.disabled=!0});
//# sourceMappingURL=commonHelpers.js.map