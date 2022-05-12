/* FIRST WAY
const decreamentBtn = document.querySelector(".decreament");
const increamentBtn = document.querySelector(".increament");
const resetBtn = document.querySelector(".reset");

const counterValue = document.querySelector(".counter span");
let counter = 0;
resetBtn.addEventListener("click", reset);
increamentBtn.addEventListener("click", increament);
decreamentBtn.addEventListener("click", decreament);

function increament() {
    counter++;
    counterValue.textContent = counter;
}

function decreament() {
    counter--;
    counterValue.textContent = counter;
}

function reset() {
    counterValue.textContent = 0;
}
*/
const buttons = document.querySelectorAll(".btn");
const counterValue = document.querySelector(".counter-text h2 span");
let count = 0;

buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
        const classList = btn.classList;
        if (classList.contains("increament")) {
            count++;
            console.log(count);
        } else if (classList.contains("decreament")) count--;
        else count = 0;
        if (count > 0) counterValue.style.color = "green";
        else if (count < 0) counterValue.style.color = "red";
        else counterValue.style.color = "yellow";

        counterValue.textContent = count;
    })
);