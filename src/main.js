let counter = 0;
let c = 0;
let count = document.getElementById("count");
function increment() {
  counter = Number(count.innerText) + 1;
  count.innerText = counter;
  if (counter >= 1) {
    let negative = document.getElementById("negative");
    negative.classList.remove("hidden");
  }
  let limit = document.getElementById("limit");
  let isChecked = document.getElementById("switch").checked;
  if (counter > c && isChecked) {
    counter = c;
    limit.classList.add("hidden");
    count.innerText = c;
  } else if (counter < c) {
    limit.classList.add("hidden");
  }
}

function decrement() {
  if (counter >= 1) {
    counter--;
    count.innerText = counter;
  }
  if (counter === 0) {
    let negative = document.getElementById("negative");
    negative.classList.add("hidden");
  }
  let limit = document.getElementById("limit");
  if (counter < c) {
    limit.classList.add("hidden");
  }
}

function resetCounter() {
  let reseter = document.getElementById("reseter");
  reseter.classList.remove("hidden");
}

function backtomain() {
  let reseter = document.getElementById("reseter");
  reseter.classList.add("hidden");
  let reseterr = document.getElementById("reseterr");
  reseterr.classList.add("hidden");
}

function counterreset() {
  let reseter = document.getElementById("reseter");
  let count = document.getElementById("count");
  count.innerText = 0;
  counter = 0;
  let negative = document.getElementById("negative");
  negative.classList.add("hidden");
  reseter.classList.add("hidden");
}

function design() {
  let reseterr = document.getElementById("reseterr");
  reseterr.classList.remove("hidden");
}

function setcounter(value) {
  counter = value;
  let count = document.getElementById("count");
  count.innerText = value;
  if (value >= 1) {
    let negative = document.getElementById("negative");
    negative.classList.remove("hidden");
  } else {
    let negative = document.getElementById("negative");
    negative.classList.add("hidden");
  }
}

function switchh() {
  let switc = document.getElementById("switch");
  let max = document.getElementById("maximum");
  if (switc.checked) {
    max.classList.remove("hidden");
  } else {
    max.classList.add("hidden");
  }
}

function setmax(v) {
  c = v;
}

function info() {
  let infoo = document.getElementById("info");
  infoo.classList.remove("hidden");
}

function closeInfo() {
  let infoo = document.getElementById("info");
  infoo.classList.add("hidden");
}

function bydefault() {
  let maindiv = document.getElementById("maindiv");
  maindiv.classList.remove("bg-white");
  maindiv.classList.add("bg-black");
  let count = document.getElementById("count");
  count.classList.remove("text-black");
  count.classList.add("text-white");
  let limit = document.getElementById("limit");
  limit.classList.remove("text-black");
  limit.classList.add("text-white");
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("border-black", "text-black");
    buttons[i].classList.add("border-white", "text-white");
    buttons[i].classList.remove("hover:border-black", "text-black");
    buttons[i].classList.add("hover:border-white", "text-white");
  }
  let svgs = document.querySelectorAll("svg");

  svgs.forEach((svg) => {
    svg.classList.remove("fill-black");
    svg.classList.add("fill-white");
  });
  let reseter = document.getElementById("reseter");
  reseter.classList.remove("bg-white", "text-black");
  reseter.classList.add("bg-black", "text-white");
  let reseterr = document.getElementById("reseterr");
  reseterr.classList.remove("bg-white", "text-black");
  reseterr.classList.add("bg-black", "text-white");
  let divs = document.getElementsByTagName("div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.remove("border-black");
    divs[i].classList.add("border-white");
  }
  let spane = document.getElementById("spane");
  spane.classList.remove("text-black");
  spane.classList.add("text-white");
  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("border-black", "text-white");
    inputs[i].classList.add("border-white", "text-black");
  }
  let infoo = document.getElementById("info");
  infoo.classList.remove("bg-white", "text-black");
  infoo.classList.add("bg-black", "text-white");
  let spa = document.getElementById("spa");
  spa.classList.remove("text-black");
  spa.classList.add("text-white");
  maindiv.classList.remove("bg-white");
  maindiv.classList.remove("bg-yellow-300");
  maindiv.classList.remove("bg-red-500");
  maindiv.classList.remove("bg-green-400");
  maindiv.classList.remove("bg-blue-600");
  maindiv.classList.remove("bg-purple-600");
  maindiv.classList.remove("bg-sky-950");
  maindiv.classList.remove("bg-gray-700");

  reseter.classList.remove("bg-white");
  reseter.classList.remove("bg-yellow-300");
  reseter.classList.remove("bg-red-500");
  reseter.classList.remove("bg-green-400");
  reseter.classList.remove("bg-blue-600");
  reseter.classList.remove("bg-purple-600");
  reseter.classList.remove("bg-sky-950");
  reseter.classList.remove("bg-gray-700");

  reseterr.classList.remove("bg-white");
  reseterr.classList.remove("bg-yellow-300");
  reseterr.classList.remove("bg-red-500");
  reseterr.classList.remove("bg-green-400");
  reseterr.classList.remove("bg-blue-600");
  reseterr.classList.remove("bg-purple-600");
  reseterr.classList.remove("bg-sky-950");
  reseterr.classList.remove("bg-gray-700");

  infoo.classList.remove("bg-white");
  infoo.classList.remove("bg-yellow-300");
  infoo.classList.remove("bg-red-500");
  infoo.classList.remove("bg-green-400");
  infoo.classList.remove("bg-blue-600");
  infoo.classList.remove("bg-purple-600");
  infoo.classList.remove("bg-sky-950");
  infoo.classList.remove("bg-gray-700");
}

function white() {
  let maindiv = document.getElementById("maindiv");
  maindiv.classList.add("bg-white");
  let count = document.getElementById("count");
  count.classList.remove("text-white");
  count.classList.add("text-black");
  let limit = document.getElementById("limit");
  limit.classList.remove("text-white");
  limit.classList.add("text-black");
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("border-white", "text-white");
    buttons[i].classList.add("border-black", "text-black");
    buttons[i].classList.remove("hover:border-white", "text-white");
    buttons[i].classList.add("hover:border-black", "text-black");
  }
  let svgs = document.querySelectorAll("svg");

  svgs.forEach((svg) => {
    svg.classList.remove("fill-white");
    svg.classList.add("fill-black");
  });
  let reseter = document.getElementById("reseter");
  reseter.classList.remove("bg-black", "text-white");
  reseter.classList.add("bg-white", "text-black");
  let reseterr = document.getElementById("reseterr");
  reseterr.classList.remove("bg-black", "text-white");
  reseterr.classList.add("bg-white", "text-black");
  let divs = document.getElementsByTagName("div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.remove("border-white");
    divs[i].classList.add("border-black");
  }
  let spane = document.getElementById("spane");
  spane.classList.remove("text-white");
  spane.classList.add("text-black");
  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("border-white", "text-black");
    inputs[i].classList.add("border-black", "text-black");
  }
  let infoo = document.getElementById("info");
  infoo.classList.remove("bg-black", "text-white");
  infoo.classList.add("bg-white", "text-black");
  let spa = document.getElementById("spa");
  spa.classList.remove("text-white");
  spa.classList.add("text-black");
}

function black() {
  bydefault();
}

function red() {
  bydefault();
  let maindiv = document.getElementById("maindiv");
  let reseter = document.getElementById("reseter");
  let reseterr = document.getElementById("reseterr");
  maindiv.classList.add("bg-red-500");
  reseter.classList.add("bg-red-500");
  reseterr.classList.add("bg-red-500");
  let infoo = document.getElementById("info");
  infoo.classList.add("bg-red-500");
}
function yellow() {
  bydefault();
  let maindiv = document.getElementById("maindiv");
  let reseter = document.getElementById("reseter");
  let reseterr = document.getElementById("reseterr");
  maindiv.classList.add("bg-yellow-300");
  reseter.classList.add("bg-yellow-300");
  reseterr.classList.add("bg-yellow-300");
  let infoo = document.getElementById("info");
  infoo.classList.add("bg-yellow-300");
}
function green() {
  bydefault();
  let maindiv = document.getElementById("maindiv");
  let reseter = document.getElementById("reseter");
  let reseterr = document.getElementById("reseterr");
  maindiv.classList.add("bg-green-400");
  reseter.classList.add("bg-green-400");
  reseterr.classList.add("bg-green-400");
  let infoo = document.getElementById("info");
  infoo.classList.add("bg-green-400");
}
function blue() {
  bydefault();
  let maindiv = document.getElementById("maindiv");
  let reseter = document.getElementById("reseter");
  let reseterr = document.getElementById("reseterr");
  maindiv.classList.add("bg-blue-600");
  reseter.classList.add("bg-blue-600");
  reseterr.classList.add("bg-blue-600");
  let infoo = document.getElementById("info");
  infoo.classList.add("bg-blue-600");
}
function purple() {
  bydefault();
  let maindiv = document.getElementById("maindiv");
  let reseter = document.getElementById("reseter");
  let reseterr = document.getElementById("reseterr");
  maindiv.classList.add("bg-purple-600");
  reseter.classList.add("bg-purple-600");
  reseterr.classList.add("bg-purple-600");
  let infoo = document.getElementById("info");
  infoo.classList.add("bg-purple-600");
}
function sky() {
  bydefault();
  let maindiv = document.getElementById("maindiv");
  let reseter = document.getElementById("reseter");
  let reseterr = document.getElementById("reseterr");
  maindiv.classList.add("bg-sky-950");
  reseter.classList.add("bg-sky-950");
  reseterr.classList.add("bg-sky-950");
  let infoo = document.getElementById("info");
  infoo.classList.add("bg-sky-950");
}
function grey() {
  bydefault();
  let maindiv = document.getElementById("maindiv");
  let reseter = document.getElementById("reseter");
  let reseterr = document.getElementById("reseterr");
  maindiv.classList.add("bg-gray-700");
  reseter.classList.add("bg-gray-700");
  reseterr.classList.add("bg-gray-700");
  let infoo = document.getElementById("info");
  infoo.classList.add("bg-gray-700");
}
