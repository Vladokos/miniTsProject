import {increase} from "../src/increase";

jest.useFakeTimers();

describe('testing increase', () => {
    it('should increase value to 100', () => {
        const element = document.createElement('div') as HTMLElement;
        const amount = 100;

        increase(0, amount, element);

        expect.assertions(2);
        jest.advanceTimersByTime(amount * 20)

        expect(element).toBeDefined();
        expect(element.innerHTML).toBe(amount.toString());
    });
    it('should increase value to 1000', () => {
        const element = document.createElement('div') as HTMLElement;
        const amount = 1000;

        increase(0, amount, element);

        expect.assertions(2);
        jest.advanceTimersByTime(amount * 20)

        expect(element).toBeDefined();
        expect(element.innerHTML).toBe(amount.toString());
    });
    it('should increase value to 10', () => {
        const element = document.createElement('div') as HTMLElement;
        const amount = 10;

        increase(0, amount, element);

        expect.assertions(2);
        jest.advanceTimersByTime(amount * 20)

        expect(element).toBeDefined();
        expect(element.innerHTML).toBe(amount.toString());
    });
    it('should increase value to 1', () => {
        const element = document.createElement('div') as HTMLElement;
        const amount = 1;

        increase(0, amount, element);

        expect.assertions(2);
        jest.advanceTimersByTime(amount * 20)

        expect(element).toBeDefined();
        expect(element.innerHTML).toBe(amount.toString());
    });
    it('should increase value to 20000', () => {
        const element = document.createElement('div') as HTMLElement;
        const amount = 20000;

        increase(0, amount, element);

        expect.assertions(2);
        jest.advanceTimersByTime(amount * 20)

        expect(element).toBeDefined();
        expect(element.innerHTML).toBe(amount.toString());
    });
    it('should increase value to 234', () => {
        const element = document.createElement('div') as HTMLElement;
        const amount = 234;

        increase(0, amount, element);

        expect.assertions(2);
        jest.advanceTimersByTime(amount * 20)

        expect(element).toBeDefined();
        expect(element.innerHTML).toBe(amount.toString());
    });
    it('should increase value to 43', () => {
        const element = document.createElement('div') as HTMLElement;
        const amount = 43;

        increase(0, amount, element);

        expect.assertions(2);
        jest.advanceTimersByTime(amount * 20)

        expect(element).toBeDefined();
        expect(element.innerHTML).toBe(amount.toString());
    });
    it('should increase value to 12345', () => {
        const element = document.createElement('div') as HTMLElement;
        const amount = 12345;

        increase(0, amount, element);

        expect.assertions(2);
        jest.advanceTimersByTime(amount * 20)

        expect(element).toBeDefined();
        expect(element.innerHTML).toBe(amount.toString());
    });
    it('should increase value to 32', () => {
        const element = document.createElement('div') as HTMLElement;
        const amount = 32;

        increase(0, amount, element);

        expect.assertions(2);
        jest.advanceTimersByTime(amount * 20)

        expect(element).toBeDefined();
        expect(element.innerHTML).toBe(amount.toString());
    });
    it('should increase value to 948', () => {
        const element = document.createElement('div') as HTMLElement;
        const amount = 948;

        increase(0, amount, element);

        expect.assertions(2);
        jest.advanceTimersByTime(amount * 20)

        expect(element).toBeDefined();
        expect(element.innerHTML).toBe(amount.toString());
    });
});