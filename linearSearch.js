var q = [ 2,24,4, 3, 5, 7, 9, 32, 5, 75, 6];
var n = 7545;

function linearSearch(a, num) {
  console.log(a, num);
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] === num) console.log(true);
  }
}
linearSearch(q, n);

