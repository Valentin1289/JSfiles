var favoriteBook=
{
 title:"Artemis Fowl",
 author:"Eoin Colfer",
 year:2017,
 
 characters:["Artemis Fowl","Holly Short","Butler","Nguyen"],
 age:function setage(currentYear){
    return currentYear-this.year;
}
}

let ageOfMyFavBook=favoriteBook.age(2022);
console.log(ageOfMyFavBook);
console.log(console);
console.log(console.log);
for(let i=1;i<=5;i++)
{
    console.count();
}
Object={
keys:function (obj){
    let arr=[];
    for (const x in obj) {
        arr.push(x);
    }
    return arr;
}
};
console.log(Object.keys(favoriteBook));
let aNumber=123;
aNumber=aNumber.toString();
console.log(typeof aNumber);
let writers="George Orwell, Ernest Hemingway, Jane Austen, Agatha Christie, Oscar Wilde";
let writersArray=writers.split(", ");
writersArray.unshift("Walter Ernsting");
console.log(writersArray);
let writersString=writersArray.join(" + ");
console.log(writersString);
writersArray.push("Ed Gorman");
writersArray.push("James Herbert");

