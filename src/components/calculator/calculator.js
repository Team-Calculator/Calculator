import { createElement } from "../utils/createElement";

export function createCalculator() {
  const upperDisplay = createElement("input", {
    type: "text",
    value: "",
    max: "",
  });

  //numbers start here!!!!!!!!!!!!!!!!!!!!!!!!

  const numberFieldOne = createElement("button", {
    innerText: "1",
    className: "numberButton",
    onclick: function () {
      //Line needs to be Fixed! Line does not express what we had in mind-philipp
      upperDisplay.value += 1;
    },
  });

  const numberFieldTwo = createElement("button", {
    innerText: "2",
    className: "numberButton",
    onclick: function () {
      upperDisplay.value += 2;
    },
  });

  const numberFieldThree = createElement("button", {
    innerText: "3",
    className: "numberButton",
    onclick: function () {
      upperDisplay.value += 3;
    },
  });

  const numberFieldFour = createElement("button", {
    innerText: "4",
    className: "numberButton",
    onclick: function () {
      upperDisplay.value += 4;
    },
  });

  const numberFieldFive = createElement("button", {
    innerText: "5",
    className: "numberButton",
    onclick: function () {
      upperDisplay.value += 5;
    },
  });

  const numberFieldSix = createElement("button", {
    innerText: "6",
    className: "numberButton",
    onclick: function () {
      upperDisplay.value += 6;
    },
  });

  const numberFieldSeven = createElement("button", {
    innerText: "7",
    className: "numberButton",
    onclick: function () {
      upperDisplay.value += 7;
    },
  });

  const numberFieldEight = createElement("button", {
    innerText: "8",
    className: "numberButton",
    onclick: function () {
      upperDisplay.value += 8;
    },
  });

  const numberFieldNine = createElement("button", {
    innerText: "9",
    className: "numberButton",
    onclick: function () {
      upperDisplay.value += 9;
    },
  });

  const numberFieldZero = createElement("button", {
    innerText: "0",
    className: "numberButton",
    onclick: function () {
      upperDisplay.value += 0;
    },
  });

  //numbers end here!!!!!!!!!!!!!!!!!

  const resultButton = createElement("button", {
    innerText: "=",
    className: "operationButton",
    onclick: function () {
      upperDisplay.value = 42;
    },
  });

  const resetButton = createElement("button", {
    innerText: "C",
    className: "operationButton",
    onclick: function () {
      upperDisplay.value = "";
    },
  });

  const plusButton = createElement("button", {
    innerText: "+",
    className: "functionButton",
    onclick: function () {
      upperDisplay.value += "+";
    },
  });

  const minusButton = createElement("button", {
    innerText: "-",
    className: "functionButton",
    onclick: function () {
      upperDisplay.value += "-";
    },
  });

  const multiButton = createElement("button", {
    innerText: "x",
    className: "functionButton",
    onclick: function () {
      upperDisplay.value += "x";
    },
  });

  const divideButton = createElement("button", {
    innerText: "÷",
    className: "functionButton",
    onclick: function () {
      upperDisplay.value += "÷";
    },
  });

  return createElement("div", {
    className: "calculator",
    children: [
      upperDisplay,
      numberFieldOne,
      numberFieldTwo,
      numberFieldThree,
      numberFieldFour,
      numberFieldFive,
      numberFieldSix,
      numberFieldSeven,
      numberFieldEight,
      numberFieldNine,
      numberFieldZero,

      resultButton,
      resetButton,
      plusButton,
      minusButton,
      divideButton,
      multiButton,
    ],
  });
}

/* <input ="upper display"></input>

<div class="Number-Field">
<button class="Number">1</button>
<button class="Number">2</button>
<button class="Number">3</button>
<button class="Number">4</button>
<button class="Number">5</button>
<button class="Number">6</button>
<button class="Number">7</button>
<button class="Number">8</button>
<button class="Number">9</button>
<button class="Number">0</button>
</div>

<div class="Result">
     <button class="result">=</button>
     <button class="clear">C</button>
</div>

<div class="Operations">
<button class="Plus">+</button>
<button class="Plus">-</button>
<button class="Plus">x</button>
<button class="Plus">÷</button>
</div>
 
 */
