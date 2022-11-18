function sum(a,b) 
{
    return a+b;
}
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
var averageSale=0,x;
for (const x of bestSellingAlbums)
{
 averageSale+=x.sale;   
}
averageSale/=bestSellingAlbums.length;
var currentYear,averageAge=0;
for (const x of bestSellingAlbums) 
{
    currentYear=x.year;
    averageAge+=2022-currentYear;
}
averageAge/=bestSellingAlbums.length;
var newestAlbum=bestSellingAlbums[0], oldestAlbum=bestSellingAlbums[0];
for (const x of bestSellingAlbums) 
{
 if(x.year>newestAlbum.year) newestAlbum=x;
 if(x.year<oldestAlbum.year) oldestAlbum=x;   
}
var albumsOfEagles={};
albumsOfEagles.sales=sum(bestSellingAlbums[4].sale,bestSellingAlbums[5].sale);
albumsOfEagles.isBothSoftRock=bestSellingAlbums[4].genres[1]==bestSellingAlbums[5].genres[0];
albumsOfEagles.isBothSoftRock=false;
var wellcomeToTheJungle=
{
    artist: "Riles",
    title: "wellcomeToTheJungle",
    year: 2019,
    genres: ["rap"],
    sale: 700000,
};
bestSellingAlbums[8]=wellcomeToTheJungle;
bestSellingAlbums[0].iLikeIt=true;
bestSellingAlbums[1].iLikeIt=false;
bestSellingAlbums[2].iLikeIt=true;
bestSellingAlbums[3].iLikeIt=true;
bestSellingAlbums[4].iLikeIt=false;
bestSellingAlbums[5].iLikeIt=false;
bestSellingAlbums[6].iLikeIt=false;
bestSellingAlbums[7].iLikeIt=true;
bestSellingAlbums[8].iLikeIt=true;
console.log(albumsOfEagles);