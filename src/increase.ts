export const increase = (value: number, amount: number, element:HTMLElement): void => {
    if (value < amount) {
        element.innerHTML = (++value).toString();

        setTimeout(() => increase(value, amount, element), 20);
    } else {
        clearTimeout();
    }
}
