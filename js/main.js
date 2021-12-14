let skills = document.querySelector(".our-skills");
let span = document.querySelectorAll(".skills .skill span");
let stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .number");
let started = false;

let endDate = new Date("Dec 31 2021 23:59:59").getTime();

let timeCounter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = endDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".time .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".time .Hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".time .Minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".time .Seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff < 0) clearInterval(timeCounter);
}, 1000);

window.onscroll = () => {
  if (window.scrollY >= skills.offsetTop - 200) {
    span.forEach((e) => {
      e.style.width = `${e.dataset.width}%`;
    });
  }

  if (window.scrollY >= stats.offsetTop - 200) {
    if (!started) {
      numbers.forEach((number) => {
        let target = number.dataset.count;
        let counter = setInterval(() => {
          number.textContent++;
          if (number.textContent === target) {
            clearInterval(counter);
          }
        }, 2000 / target);
      });
      started = true;
    }
  }
};
