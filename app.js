document.addEventListener("DOMContentLoaded", function () {
    console.log("document is ready");
    const display = document.getElementById("calc-display");
    const buttons = document.getElementsByClassName("btn");

    let currentValue = "";
    let x = "";

    function evaluateResult() {
        console.log("currentvalue", currentValue)
        const convertedValue = currentValue
            .replace("÷", "/")
            .replace("×", "*")
            .replace("%", "*0.01")
            .replace("sin", "Math.sin")
            .replace("cos", "Math.cos")
            .replace("π", "Math.PI")
            .replace("log", "Math.log10")
            .replace("e^", "")
            .replace("e", "Math.E")
            .replace("tan", "Math.tan")
            .replace("√", "Math.sqrt")
            .replace("ln", "Math.log")
            .replace("E", "Math.exp")
            .replace("!", `*${factorial()}`);
        function factorial() {
            let n = currentValue.slice(0, currentValue.length - 1) - 1;
            if (n === 0) {
                return 1;
            }

            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }

            return result;
        }

        console.log("convertedValue", convertedValue);
        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;
    }




    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener("click", function () {
            const value = button.innerText;
            function changebtn() {
                let changebtn2 = document.getElementsByClassName("bts");
                let changebtn1 = document.getElementsByClassName("bts0");
                for (let i = 0; i < changebtn2.length; i++) {
                    changebtn1[i].classList.toggle("hide");
                    changebtn2[i].classList.toggle("hide");
                }

            }
            try {
                if (value == "AC") {
                    currentValue = "";
                    display.value = currentValue;
                }
                else if (value == "=") {
                    evaluateResult();
                }
                else if (i == 2) {
                    currentValue += "";
                    changebtn()
                }
                else if (i == 0) {
                    currentValue += "";
                    display.value = currentValue;
                } else if (i == 1) {
                    currentValue += "!";
                    display.value = currentValue;
                } else if (value == "Xy") {
                    currentValue += "□";
                    display.value = currentValue;
                } else if (value == "EXP") {
                    currentValue += "E";
                    display.value = currentValue;
                }
                else {
                    currentValue += value;
                    display.value = currentValue;
                }
            }
            catch (error) {
                console.error(error);
                currentValue = "ERROR";
                display.value = currentValue;
            }
        })
    }
})
let button1 = document.querySelector(".num");
let button2 = document.querySelector(".alpha");
let prop = document.querySelector(".logs");
let prop1 = document.querySelector(".numeric");

let y = 1;
let x = 0;
document.querySelector(".num").addEventListener("click", rim);
function rim() {
    if (y == 0) {
        button1.classList.toggle("num1")
        button2.classList.toggle("num1")
        prop.classList.toggle("gx-2");
        prop1.classList.toggle("gx-2");
        x = 0;
    }
    else {
    }
} 

document.querySelector(".alpha").addEventListener("click", rim1);
function rim1() {
    if (x == 0) {
        button1.classList.toggle("num1");
        button2.classList.toggle("num1");
        prop1.classList.toggle("gx-2");
        prop.classList.toggle("gx-2");

        x = 1;
        y = 0;
    }
    else {
    }

}
let but = document.querySelector(".colgrey1");
let but1 = document.querySelector(".colgrey2");
document.querySelector("#deg").addEventListener("click", rim2);
function rim2() {
    but.classList.toggle("grey1");
    but1.classList.toggle("grey1");

}









//   document.addEventListener("DOMContentLoaded", function () {
//     console.log("document is ready");
//     const display = document.getElementById("calc-display");
//      const buttons = document.getElementsByClassName("btn");

//      let currentValue = "";

//      function evaluateResult() {
//          console.log("currentvalue", currentValue)
//        const convertedValue = currentValue
//            .replace("÷", "/")
//             .replace("×", "*")
//             .replace("%", "*0.01")
//              .replace("sin","Math.sin")
//              .replace("cos","Math.cos")
//             .replace("ln","Math.log")
//             .replace("𝝅","Math.PI")
//             .replace("log","Math.log10")
//             .replace("e","Math.E")
//             .replace("tan","Math.tan")
//             .replace("√","Math.sqrt")
//          console.log("convertedValue", convertedValue);
//          const result = eval(convertedValue);
//         currentValue = result.toString();
//          display.value = currentValue;
//      }




//      for (let i = 0; i < buttons.length; i++) {
//          const button = buttons[i];
//          button.addEventListener("click", function () {
//              const value = button.innerText;

//              try{
//              if (value == "AC") {
//                  currentValue = "";
//                  display.value = currentValue;
//              }
//             else if (value == "=") {
//                 evaluateResult();
//              }
//              else {
//                  currentValue += value;
//                  display.value = currentValue;
//          } catch(error) {
//              console.error(error);
//             currentValue = "ERROR";
//              display.value = currentValue;
//          }
//          })
//      }
// })
