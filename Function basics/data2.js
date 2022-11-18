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
var favoriteBooks=[book1,book2];

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
  var favMovies=[movie1,movie2,movie3,movie4];
  let bestSellingAlbums = [
    {
        artist: "Michael Jackson",
        title: "Thriller",
        year: 1982,
        genres: ["pop", "post-disco", "funk", "rock"],
        sale: 70000000,
    },
    {
        artist: "AC/DC",
        title: "Back in Black",
        year: 1980,
        genres: ["hard rock"],
        sale: 50000000,
    },
    {
        artist: "Whitney Houston",
        title: "The Bodyguard",
        year: 1992,
        genres: ["r&b", "soul", "pop", "soundtrack"],
        sale: 45000000,
    },
    {
        artist: "Pink Floyd",
        title: "The Dark Side of the Moon",
        year: 1973,
        genres: ["progressive rock"],
        sale: 45000000,
    },
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock"],
        sale: 42000000,
    },
    {
        artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
    },
    {
        artist: "Fleetwood Mac",
        title: "Rumours",
        year: 1977,
        genres: ["soft rock"],
        sale: 40000000,
    },
];
 console.log(averageAge(favoriteBooks,2022));
 console.log(averageAge(favMovies,2022));
 console.log(averageAge(bestSellingAlbums,2022)+"\n");
 console.log(average(bestSellingAlbums,"sale"));
 console.log(average(favMovies,"rating")+"\n");
 console.log(latestOrOldest(favoriteBooks,false));
 console.log(latestOrOldest(favMovies,true));
 console.log(latestOrOldest(bestSellingAlbums,false));

function averageAge(arr,currentYear){
    let sum=0;
   for (let x of arr) {
    sum+=currentYear-x.year;
   }
   return sum/arr.length;

}
function average(arr,key){
    if(typeof arr[0][key]!="number") return key+" is not a number.";
    let sum=0;
    for (let x of arr) {
     sum+=x[key];
    }
    return sum/arr.length;
}
function latestOrOldest(arr,k){
    let t=(k)?1:-1;
    let max=-3000,im;
    for(let i=0;i<arr.length;i++){ 
        if(t*arr[i].year>max){max=t*arr[i].year;im=i;}
    }
    return arr[im].title;
}