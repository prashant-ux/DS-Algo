var q = [ 2,24,4, 3, 5, 7, 9, 32, 5, 75, 6];

function additionOfAllNo(z)
{
  sum = 0;
  for(let i = 0; i < z.length; i++)
  {
    sum += z[i];
  }
  console.log(sum);
}
additionOfAllNo(q);