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

test("throws exception when negative number is present", () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed -2");
});

test("throws exception listing all negative numbers", () => {
    expect(() => add("1,-2,3,-5")).toThrow("negative numbers not allowed -2,-5");
});

test("ignores numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("2,1000")).toBe(1002); // 1000 should be included
    expect(add("1001")).toBe(0);
});

test("supports custom delimiter of any length like [***]", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
});

test("supports custom delimiter of any length like [abc]", () => {
    expect(add("//[abc]\n2abc3abc4")).toBe(9);
});

test("supports multiple delimiters of single character", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
});

test("supports multiple delimiters of any length", () => {
    expect(add("//[***][%%]\n1***2%%3")).toBe(6);
});

test("supports multiple delimiters mixed length", () => {
    expect(add("//[a][bbb][##]\n1a2bbb3##4")).toBe(10);
});
