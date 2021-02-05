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
    onclick: function () {
      //Line needs to be Fixed! Line does not express what we had in mind-philipp
      upperDisplay.value = upperDisplay.value += 1;
    },
  });

  const numberFieldTwo = createElement("button", {
    innerText: "2",
    onclick: function () {
      upperDisplay.value = upperDisplay.value += 2;
    },
  });

  const numberFieldThree = createElement("button", {
    innerText: "3",
    onclick: function () {
      upperDisplay.value = upperDisplay.value += 3;
    },
  });

  const numberFieldFour = createElement("button", {
    innerText: "4",
    onclick: function () {
      upperDisplay.value = upperDisplay.value += 4;
    },
  });

  const numberFieldFive = createElement("button", {
    innerText: "5",
    onclick: function () {
      upperDisplay.value = upperDisplay.value += 5;
    },
  });

  const numberFieldSix = createElement("button", {
    innerText: "6",
    onclick: function () {
      upperDisplay.value = upperDisplay.value += 6;
    },
  });

  const numberFieldSeven = createElement("button", {
    innerText: "7",
    onclick: function () {
      upperDisplay.value = upperDisplay.value += 7;
    },
  });

  const numberFieldEight = createElement("button", {
    innerText: "8",
    onclick: function () {
      upperDisplay.value = upperDisplay.value += 8;
    },
  });

  const numberFieldNine = createElement("button", {
    innerText: "9",
    onclick: function () {
      upperDisplay.value = upperDisplay.value += 9;
    },
  });

  const numberFieldZero = createElement("button", {
    innerText: "0",
    onclick: function () {
      upperDisplay.value = upperDisplay.value += 0;
    },
  });

  //numbers end here!!!!!!!!!!!!!!!!!

  const result = createElement("button", {
    innerText: "=",
    onclick: function () {
      upperDisplay.value = upperDisplay.value = 1;
    },
  });

  const reset = createElement("button", {
    innerText: "C",
    onclick: function () {
      upperDisplay.value = upperDisplay.value = "";
    },
  });

  const PlusButton = createElement("button", {
    innerText: "+",
    onclick: function () {
      upperDisplay.value = upperDisplay.value += "+";
    },
  });

  const MinusButton = createElement("button", {
    innerText: "-",
    onclick: function () {
      upperDisplay.value = upperDisplay.value += "-";
    },
  });

  const MultiButton = createElement("button", {
    innerText: "x",
    onclick: function () {
      upperDisplay.value = upperDisplay.value += "x";
    },
  });

  const DivideButton = createElement("button", {
    innerText: "÷",
    onclick: function () {
      upperDisplay.value = upperDisplay.value += "÷";
    },
  });

  return createElement("div", {
    className: "calculator",
    children: [
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
      upperDisplay,
      result,
      reset,
      PlusButton,
      MinusButton,
      DivideButton,
      MultiButton,
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
