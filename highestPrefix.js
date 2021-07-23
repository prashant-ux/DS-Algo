var a = ["flower","flu","flow","flush"]
var b = "";
for(let i = 0; i < a.length; i++)
{
    for(let j = i+1; j < a.length; j++)
    {
        if(a[i][i] !== a[j][i])
        {
            b = a[i][i],a[j][i];
        }
         console.log(a[i][i],a[j][i]);
        
    }
        
    }