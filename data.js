var movie1={
  title:"Fall" ,
  year: 2022,
  rating: 6.4, 
  description:"Best friends Becky and Hunter find themselves at the top of a 2,000-foot radio tower.",
  directors:["Scott Mann"],
  writers:["Scott Mann","Jonathan Frank"],
  stars:["Grace Caroline Currey","Virginia Gardner","Mason Gooding"],
  genres:["Thriller"],
}
var movie2={
  title:"Fast and furios 5" ,
  year: 2011,
  rating: 7.3, 
  description:"Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom while in the sights of a powerful Brazilian drug lord and a dangerous federal agent.",
  directors:[" Justin Lin"],
  writers:["Chris Morgan","Gary Scott Thompson"],
  stars:["Vin Diesel","Paul Walker","Jordana Brewster","Dwayne Johnson"],
  genres:["Action","Crime","Thriller"],
}
var movie3={
  title:"Sonic the Hedgehog 2" ,
  year: 2022,
  rating: 6.5, 
  description:"When the manic Dr Robotnik returns to Earth with a new ally, Knuckles the Echidna, Sonic and his new friend Tails is all that stands in their way.",
  directors:["Jeff Fowler"],
  writers:["Pat Casey","Josh Miller","John Whittington"],
  stars:["James Marsden","Jim Carrey","Ben Schwartz","Tika Sumpter"],
  genres:["Action","Adventure","Fantasy","Sci-Fi"],
}
var movie4={
  title:"Spider-Man: No Way Home" ,
  year: 2021,
  rating: 8.3, 
  description:"With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
  directors:["Jon Watts"],
  writers:["Chris McKenna","Erik Sommers"],
  stars:["Tom Holland","Zendaya","Benedict Cumberbatch","Jacob Batalon","Andrew Garfield","Tobey Maguire"],
  genres:["Action","Adventure","Fantasy","Sci-Fi","Family","Comedy"],
}
var averageRating;
var favMovies=[movie1,movie2,movie3,movie4];
console.log("The first movie's title is: ",favMovies[0].title,"\n","The second movie's release year is:",favMovies[1].year,"\n","The third movie's IMDB rating is: ",favMovies[2].rating,"\n","The fourth movie's short description is: ",favMovies[3].description);
console.log("The first movie's lead director is: ",favMovies[0].directors[0]);
console.log("The second movie's lead writer is: ",favMovies[1].writers[0]);
console.log("The third movie's lead star is: ",favMovies[2].stars[0]);
console.log("The fourth movie's main genre is: ",favMovies[3].genres[0]);
averageRating=(movie1.rating+movie2.rating+movie3.rating+movie4.rating)/4;
var averageAge=(2022-(movie1.year+movie2.year+movie3.year+movie4.year)/4);