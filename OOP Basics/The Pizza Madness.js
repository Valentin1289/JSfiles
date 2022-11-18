// String repeat
function  stringRepeat(x,str){
    let n="";
for(let i=1;i<=x;i++)
n+=str;
return n;
}
console.log(stringRepeat(2,"HawaiiPizza"));

//No whitespaces

function noSpace(str){
    return str.split(" ").join("");
}
console.log(noSpace("Our pizza is the best!"));

//Number to string

function numberToString(int){
 return ""+int;
}
console.log( numberToString(5));

//Boolean to string

function booleanToString(bool){
return (bool)?"true":"false";
}
console.log( booleanToString(true));

//Abbreviate a Pizza name

function abbrevName(txt)
{let arr=txt.split(" ");
for (let i=0;i<arr.length;i++) 
{
 arr[i]=arr[i][0]; 
 
}txt=arr.join(".");  
 return txt;
}
console.log(abbrevName("Hawaii Pizza"));

//Pizza length

function nameLength(str)
{
return str.split(" ").map((x)=>{return x+=" "+x.length;})
}
console.log(nameLength("hawaii pizza"));

//Remove the first and last element

function removeOrders(txt)
{
    return txt.slice(2,txt.length-2);
}
console.log(removeOrders("1,2,3,4"));

//The menu

function foodMenu(arr)
{
return arr.map((x,i)=>{return i+1+". "+x; })
}
console.log(foodMenu(["Hawaii Pizza", "Diablo Pizza"]));