var q = [ 2,24,4, 3, 5, 7, 9, 32, 5, 75, 6];
var s = 38;


function targetSum (u,target)
{

  for(let i = 0; i < u.length; i++)
  {
    for(let j = i+1; j < u.length; j++)
    {
      if(u[i]+ u[j] === target )
      console.log(i,j);

    }
    // console.log (IndexOf u[i]);
  }
}
targetSum (q,s);