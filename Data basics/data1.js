
var book1=
{
 title:"Artemis Fowl",
 author:"Eoin Colfer",
 year:2017,
 
 isNewerThan2000:true,
 characters:["Artemis Fowl","Holly Short","Butler","Nguyen"],
 age:2022-this.year,
}
var book2=
{
 title:"Umbra Sarpelui",
 author:"Rick Riordan",
 year:2016,
 isNewerThan2000:true,
 characters:["Carter Ken","Sadie Kane","Apophis","Setne"],
 age:2022-this.year,
}
var favoriteBook=[book1,book2];
console.log("The value of the title key of the second object in the favoriteBooks array:",favoriteBook[1].title);
console.log("The value of the first item of characters array from the favoriteBooks array's second object:",favoriteBook[1].characters[0]);
console.log("The age difference between the two books is:",favoriteBook[0].year-favoriteBook[1].year);
var bool=book1.isNewerThan2000;
console.log(book1);

/*
var favoriteBook=
{
 title:"Artemis Fowl",
 author:"Eoin Colfer",
 year1:2017,
 year2:2016,
 isNewerThan2000: function()
 {
    return this.year1>2000;
},
 characters:["Artemis Fowl","Holly Short","Butler","Nguyen"],
 age:2022-this.year1,
}
console.log(favoriteBook.title,"was published in",favoriteBook.year1);
console.log("First item from favoriteBook's characters array is:" ,favoriteBook.characters[0]);
*/

/*
var title="Artemis Fowl", author="Eoin Colfer",age1=2022-2017, year1=2017, year2=2016, characters=["Artemis Fowl","Holly Short","Butler","Nguyen"];
 var isNewerThan2000= year1>2000;
 
console.log(title,"by",author,"first publicated in",year1,);
console.log("Is Newer Than 2000:",isNewerThan2000);
console.log("The book is",age1,"years old");
console.log("The main characters are:",characters,"\n","First and second item:",characters[0],",",characters[1],);
//",",characters[2],",",characters[3]
*/
console.log(book2);
