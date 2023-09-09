const day =  document.querySelector(".today");
 const sec =  document.querySelector(".utc");

setInterval(() => {
    const time = new Date().getTime();
    sec.innerText = time;
}, 1);

const options = {weekday: 'long'};
const currdate = new Date();
const currday = currdate.toLocaleDateString(undefined, options);
day.innerText = currday;
