var book1=
{
 title:"Artemis Fowl",
 author:"Eoin Colfer",
 year:2017,
 
 isNewerThan2000: function()
 {
    return this.year>2000;
},
 characters:["Artemis Fowl","Holly Short","Butler","Nguyen"],
 age:2022-this.year,
}
var book2=
{
 title:"Umbra Sarpelui",
 author:"Rick Riordan",
 year:2016,
 isNewerThan2000: function()
 {
    return this.year>2000;
},
 characters:["Carter Ken","Sadie Kane","Apophis","Setne"],
 age:2022-this.year,
}
var favoriteBooks=[book1,book2];
var text1="This book is newer than 2000:",text2="This book is older than 2000:";

for(let i=0;i<=1;i++)
{
    if(favoriteBooks[i].year>2000) console.log(text1+favoriteBooks[i].title);
    else console.log(text2+favoriteBooks[i].title);
}

/*
var text1="This book is newer than 2000:",text2="This book is older than 2000:";

if(book1.year>2000) console.log(text1+book1.title);
else console.log(text2+book1.title);
if(book2.year>2000)console.log(text1+book2.title);
else console.log(text2+book2.title);
*/

/*
var text1="This book is newer than 2000:",text2="This book is older than 2000:";

if(book1.isNewerThan2000!==false) console.log(text1+book1.title);
else console.log(text2+book1.title);
if(book2.isNewerThan2000!==false)console.log(text1+book2.title);
else console.log(text2+book2.title);
*/

/*
var text1="This book is newer than 2000:",text2="This book is older than 2000:";

if(book1.isNewerThan2000===true) console.log(text1+book1.title);
else console.log(text2+book1.title);
if(book2.isNewerThan2000===true)console.log(text1+book2.title);
else console.log(text2+book2.title);
*/

/*
if(favoriteBooks[0].isNewerThan2000) console.log(favoriteBooks[0].title);
*/

/*
let i=0;
for(;i<=1;i++)
{
    console.log( favoriteBook[i].author);
}
*/

/*
let x;
for (const x of favoriteBooks) {
    console.log(x.title);
    
}
*/