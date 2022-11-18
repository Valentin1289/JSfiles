//Even or Odd

function evenOrOdd(x)
{
return ((x*1)%2==0)?"Even":"Odd";
}
console.log(evenOrOdd("3"));

//Basic operations
function basicOperations(o,n1,n2)
{
if(o==="+") return n1+n2;
else if(o==="-") return n1-n2;
else if(o==="*") return n1*n2;
else if(o==="/") return n1/n2;
}
console.log(basicOperations("+",3,4));

//Total Points

function  totalPoints(str)
{   
    let score=0;
    for (const x in str) 
    {  
        if(str[x][0]*1>str[x][2]*1) score+=3;
        else if(str[x][0]*1===str[x][2]*1) score +=1;
    }
    return score;
}
console.log(totalPoints({match1: "2:1", match2: "3:0", match3: "0:0" }));

//The largest number

function largestNumber(a,b,c)
{
    return Math.max((a+b)*c,a*(b+c),a*b*c,a+b*c ); 
}
console.log(largestNumber(1,2,3));

//Power of N-th

function index(arr,n)
{
    if(n<arr.length)
    return Math.pow( arr[n],n);
    return -1;
}
console.log(index([1, 2, 3, 4],2));

//Quater of the year

function quaterOfTheYear(x)
{
    return Math.ceil(x/3);
}
console.log(quaterOfTheYear(4));

//Century from year 

function whichCentury(y)
{
    return Math.ceil(y/100);
}
console.log(whichCentury(2001));

//Form the minimum

function formTheMinimum(arr)
{   
    arr=arr.sort((a,b)=>a-b);
   return arr.reduce((t,v)=>t*10+v);
}
console.log(formTheMinimum([3,2,6,4,1,1]));