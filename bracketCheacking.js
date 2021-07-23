a = "{}";
function praenthesisChecker(q) 
{
  let s = [];
  let x;
  for (let i = 0; i < q.length; i++) 
  {
    if (q[i] == "{" || q[i] == "[" || q[i] == "(") s.push(q[i]);
            
    switch (q[i]) 
    {
      case "}":
        x = s[s.length-1];             // s[s.length - 1]
        s.pop();
        if (x == "[" || x == "(") return false;
        break;

      case "]":
        x = s[s.length-1];
        s.pop();
        if (x == "{" || x == "(") return false;
        break;

      case ")":
        x = s[s.length-1];
        s.pop();
        if (x == "{" || x == "[") return false;
        break;
    }

    if (s.length == 0) console.log("check");
  }
        // console.log(true);
}
praenthesisChecker(a);
