var n = 7545;

function reverseAnArray1(integ) {
  let g,
    rev = 0,
    h;
  g = integ;
  while (integ !== 0) {
    h = integ % 10;
    rev = rev * 10 + h;
    integ = Math.floor(integ / 10);
  }
  console.log(g);
  console.log(rev);
  // console.log("h", Math.floor(7545 / 10));
}
reverseAnArray1(n);
