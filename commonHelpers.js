import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";const a=document.querySelector("#datetime-picker"),s=document.querySelector("button"),h=document.querySelector("[data-seconds]"),y=document.querySelector("[data-minutes]"),b=document.querySelector("[data-hours]"),S=document.querySelector("[data-days");s.setAttribute("disabled",!0);s.addEventListener("click",q);let r,o,u;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],o=Date.now(),r<o&&(s.setAttribute("disabled",!0),f.error({title:"",message:"Please choose a date in the future",position:"bottomLeft"})),r>o&&s.removeAttribute("disabled",!0)}};m(a,p);function q(){a.setAttribute("disabled",!0),u=setInterval(()=>{o=Date.now();const t=r-o,e=R(t);h.textContent=e.seconds,y.textContent=e.minutes,b.textContent=e.hours,S.textContent=e.days,t<1e3&&clearInterval(u)},1e3)}function n(t){return String(t).padStart(2,"0")}function R(t){const c=n(Math.floor(t/864e5)),i=n(Math.floor(t%864e5/36e5)),d=n(Math.floor(t%864e5%36e5/6e4)),l=n(Math.floor(t%864e5%36e5%6e4/1e3));return{days:c,hours:i,minutes:d,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map
