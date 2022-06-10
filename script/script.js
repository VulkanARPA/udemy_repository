const numberOfFilms=+prompt("Skolko filmov vi uje prosmotreli",'');
const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const a= prompt("Odin iz poslednix prosmotrennix filmov?",''),
      b= prompt("Skolko otsenite ego?",''),
      c= prompt("Odin iz poslednix prosmotrennix filmov?",''),
      d= prompt("Skolko otsenite ego?",'');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
