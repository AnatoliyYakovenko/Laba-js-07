// Завдання №1
function addNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Це не число!";
  }
  return a + b;
}
function subNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Це не число!";
  }
  return a - b;
}
function multiplyNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Це не число!";
  }
  return a * b;
}
function divideNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Це не число!";
  }
  if (b === 0) {
    return "На нуль ділити не можна!";
  }
  return a / b;
}

const sum = addNumbers(2, 45);
const sub = subNumbers(-2, 3);
const multiply = multiplyNumbers(2, 4);
const division = addNumbers(2, "Laba");

const operations = [
  {
    name: "Сума:",
    result: `${sum}`,
  },
  {
    name: "Різниця:",
    result: `${sub}`,
  },
  {
    name: "Добуток:",
    result: `${multiply}`,
  },
  {
    name: "Ділення:",
    result: `${division}`,
  },
];

const operationsMarkup = operations
  .map(({ name, result }) => {
    let color = "black";
    if (result >= 0) {
      color = "green";
    } else if (result < 0) {
      color = "red";
    }
    color = color;
    return `<li>
    <p class="operations-name">${name}</p>
  <p class="operations-result" style="color:${color}">${result}</p>
  </li>`;
  })
  .join("");

let container = document.getElementById("operations");
container.insertAdjacentHTML("beforeend", operationsMarkup);

// Завдання №2

function getMinNumber(arr) {
  let minNumber = Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNumber && typeof arr[i] === "number") {
      minNumber = arr[i];
    }
  }

  return minNumber;
}

function getMaxNumber(arr) {
  let maxNumber = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber && typeof arr[i] === "number") {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
}

let arr = ["robot", 245, -15, "Laba", 23, false, 46, 79, " ", null, 15];
const min = getMinNumber(arr);
const max = getMaxNumber(arr);

let minColor = "";

if (min >= -50 && min <= 0) {
  minColor = "rgb(0, 150, 255 )";
} else if (min >= -300 && min <= -51) {
  minColor = "rgb(0, 80, 180 )";
} else if (min < -301) {
  minColor = "rgb(0, 0, 100)";
}
const minMarkup = `<li>
<p class="operations-name">Мінімальне значення масиву:</p>
<p class="operations-result" style="color:${minColor}">${min}</p>
</li>`;

let maxColor = "";

if (max >= 0 && max <= 50) {
  maxColor = "rgb(0, 150, 255 )";
} else if ((max) => 51 && max <= 300) {
  maxColor = "rgb(0, 80, 180 )";
} else if (max > 301) {
  maxColor = "rgb(0, 0, 100)";
}
const maxMarkup = `<li>
<p class="operations-name">Максимальне значення масиву:</p>
<p class="operations-result" style="color:${maxColor}">${max}</p>
</li>`;

let maxMinContainer = document.getElementById("max-min");
maxMinContainer.insertAdjacentHTML("beforeend", minMarkup);
maxMinContainer.insertAdjacentHTML("beforeend", maxMarkup);
