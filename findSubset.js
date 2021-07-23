var a = [1,2,3,4,5];
var b = [];
for(let i = 0; i < a.length; i++)
{
    for(let j = i+1; j < a.length; j++)
    {
        console.log(a[i],a[j]);
    }
}

