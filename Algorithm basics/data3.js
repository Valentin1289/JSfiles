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
  var averageSales=0,x,averageAge=0;
  var newestAlbum=bestSellingAlbums[0],oldestAlbum=bestSellingAlbums[0];
  for (const x of bestSellingAlbums) 
  {
    averageSales+=x.sale;
    averageAge+=2022-x.year;
    if(x.year<oldestAlbum.year) oldestAlbum=x;
    if(x.year>newestAlbum.year) newestAlbum=x;
    if(x.artist=="Michael Jackson"||x.artist=="Shania Twain"||x.artist=="Fleetwood Mac")x.iLikeIt=true;
    else x.iLikeIt=false;
  }
  averageSales/=bestSellingAlbums.length;
  averageAge/=bestSellingAlbums.length;
  var albumsOfEagles={};
albumsOfEagles.sales=sum(bestSellingAlbums[4].sale,bestSellingAlbums[5].sale);
albumsOfEagles.isBothSoftRock=bestSellingAlbums[4].genres[1]==bestSellingAlbums[5].genres[0];
albumsOfEagles.isBothSoftRock=false;