let lines = gets().split("\n");

let N = parseInt(lines.shift());

for (let i = 1; i < 10000; i++) {
  if (i % N == 2) {
    console.log(`O número ${i} dividido por ${N} tem o resto 2`);
  }
}
