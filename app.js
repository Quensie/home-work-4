
require("dotenv").config();

const args = process.argv;
const nameIndex = args.lastIndexOf("--name");

let name;

if (nameIndex !== -1 && args[nameIndex + 1]) {
    name = args[nameIndex + 1];
} else {
    name = process.env.NAME || "unknown user";
}

console.log(`Hello ${name}!`);
