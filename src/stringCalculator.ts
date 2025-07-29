export function add(numbers: string): number {
    // If the input is an empty string, return 0
    if (numbers === "") return 0;
    
    // handle new lines as delimiters in addition to commas
    const normalizedNumbers = numbers.replace(/\n/g, ",");
    // Split the string by commas to handle multiple numbers
    const parts = normalizedNumbers.split(",").map(Number);
    // if number is a single number, return it as an integer
    if (parts.length === 1) return parts[0];

    return parts.reduce((sum, val) => sum + val, 0);

}