let param;

if (process.argv[2] !== undefined) {
  param = process.argv[2];
} else {
  param = "World";
}

console.log(`Hello ${param}`);