let lines = gets().split("\n");

let N = parseInt(lines.shift());

for (let i = 1; i <= N; i++) {
  if (i % 2 == 0) {
    console.log(`${i}^2 = ${i ** 2}`);
  }
}
