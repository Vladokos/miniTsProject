import {increase} from "./increase";

const element = document.getElementById("number") as HTMLElement;
const amount = document.getElementById("amount") as HTMLInputElement;
const button = document.getElementById("startIncrease") as HTMLButtonElement;

let value: number = Number(element.innerText);

button.addEventListener("click", () => {
    if (Number(amount.value)) {
        increase(value, Number(amount.value), element);
    } else {
        alert('enter a number');
    }
})

