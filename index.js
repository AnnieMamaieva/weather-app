let form = document.querySelector("#weater-form");
form.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  let result = document.querySelector("#input-text-search");
  let h1 = document.querySelector("h1");
  h1.innerHTML = result.value;
}

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

let changeDate = document.querySelector("#change-date");
changeDate.innerHTML = `${day} ${hour}:${minutes}`;
