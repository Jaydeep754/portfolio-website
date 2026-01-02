// Get command-line arguments
const args = process.argv.slice(2);

// Check minimum arguments
if (args.length !== 3) {
    console.error("Usage: node calc.js <add|subtract|multiply|divide> <num1> <num2>");
    process.exit(1);
}

const operation = args[0];
const num1 = Number(args[1]);
const num2 = Number(args[2]);

// Validate numbers
if (isNaN(num1) || isNaN(num2)) {
    console.error("Error: Please provide valid numbers.");
    process.exit(1);
}

let result;

// Perform operation
switch (operation) {
    case "add":
        result = num1 + num2;
        break;

    case "subtract":
        result = num1 - num2;
        break;

    case "multiply":
        result = num1 * num2;
        break;

    case "divide":
        if (num2 === 0) {
            console.error("Error: Division by zero is not allowed.");
            process.exit(1);
        }
        result = num1 / num2;
        break;

    default:
        console.error("Error: Invalid operation. Use add, subtract, multiply, or divide.");
        process.exit(1);
}

console.log(`Result: ${result}`);
