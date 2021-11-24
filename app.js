let newYear = "1 Jan 2022";
let now = new Date();
let Month = document.getElementById("Month");
let Days = document.getElementById("Days");
let Hours = document.getElementById("Hours");
let Minutes = document.getElementById("Minutes");
let Second = document.getElementById("Second");

const getTime = () => {
  let newYearsDate = new Date(newYear);
  let now = new Date();
  let saniye = parseInt(newYearsDate - now) / 1000;
  /*1sn 1000ms  */
  let dakka = Math.floor(saniye / 60) % 24;
  let saat = Math.floor(saniye / 3600) % 24;
  let gun = Math.floor(saniye / 3600 / 24);
  let ay = Math.floor(saniye / 3600 / 24 / 30);
  Month.innerHTML = ay;
  Days.innerHTML = gun;
  Hours.innerHTML = saat;
  Minutes.innerHTML = dakka;
  Second.innerHTML = Math.floor(saniye % 60);
};

getTime();

setInterval(() => {
  getTime();
}, 1000);
