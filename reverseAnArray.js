var n = -7545;

function reverseAnArray(integer) {
  let o = integer.toString().split("");
  console.log(o);
  let c = [];
  for (let i = o.length - 1; i >= 0; i--) {
    c.push(o[i]);
    console.log(c);
  }
  let x = c.join("");
  console.log(x);
  let b = parseInt(x);
  console.log(b);
}
reverseAnArray(n);
