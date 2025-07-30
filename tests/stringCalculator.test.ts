import { add } from '../src/stringCalculator';

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test("returns the number itself when one number is provided", () => {
    expect(add("5")).toBe(5);
});

test("returns sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
});

test("returns sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
});

test("supports new lines as delimiter in addition to commas", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiters like //;\\n1;2", () => {
    expect(add("//;\n1;2")).toBe(3);
});
