export function add(numbers: string): number {
    // If the input is an empty string, return 0
    if (numbers === "") return 0;
    
    let delimiter = /,|\n/;
    let nums = numbers;

    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
        if (delimiterMatch) {
            delimiter = new RegExp(delimiterMatch[1]);
            nums = numbers.substring(delimiterMatch[0].length);
        }
    }
    // Split the string by commas to handle multiple numbers
    const parts = nums.split(delimiter).map(Number);
    // if number is a single number, return it as an integer
    if (parts.length === 1) return parts[0];

    return parts.reduce((sum, val) => sum + val, 0);

}