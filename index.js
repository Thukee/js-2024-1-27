let i = 0;
let a = 0;
let naturalNumbers = [];
while (i < 1000) {
  if (i % 3 == 0) {
    naturalNumbers[a] = i;
    a++;
  } else if (i % 5 == 0) {
    naturalNumbers[a] = i;
    a++;
  }
  i++;
}
console.log(naturalNumbers);

let b = 0;
let total = 0;

while (b < a) {
  total = total + naturalNumbers[b];
  b++;
}
console.log(total);
