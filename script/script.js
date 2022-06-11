"use strict";
// const numberOfFilms=+prompt("Skolko filmov vi uje prosmotreli",'');
// const personalMovieDB={
//     count:numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false
// };

// const a= prompt("Odin iz poslednix prosmotrennix filmov?",''),
//       b= prompt("Skolko otsenite ego?",''),
//       c= prompt("Odin iz poslednix prosmotrennix filmov?",''),
//       d= prompt("Skolko otsenite ego?",'');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
// var num=18;
// // (num===15) ? console.log("ok"): console.log("no");
// switch(num){
//         case '16':
//             console.log("not good");
//             break;
//         case '20':
//             console.log("wrong");
//             break;
//         case 18:
//             console.log("good");
//             break;
//         default:
//             console.log("xatooooo");

// }
// const hamburger = true;
// const fries = false;

// if(hamburger && fries){
//     console.log("i'm not hungary");
// } 
// else{
//     console.log("I have not money");
// }

// console.log(1 && 0);
// console.log(1 && "salom");
// console.log(1 && undefined);
// console.log(1 && null);
// console.log(1 && NaN);
// console.log(1 && true);
// console.log("salom" && "dunyo");
// console.log(1 && 15);
console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log(!1 && 2 && !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log(5 === 5 && 3>1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola =0;
// const nuggets=2;

// if(hamburger === 3 && cola || nuggets && fries ===3){
//     console.log("Done");
// }

// let  hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
// if(hamburger || cola || fries ===3 || nuggets){
//     console.log("Done!")
// }

// let hamburger;
// const fries =NaN;
// const cola = 0;
// const nuggets = 2;

// if(hamburger && cola || fries ===3 && nuggets){
//     console.log("Done!");
// } else {
//     console.log("go to home");
// }
let number = 15;
// while(number<21){
//     console.log(number);
//     number++;
// }

// do{
//     console.log(number);
//     number++;
// }
// while(number <25);
// for(var i=0;i<12;i++){
//     if(i === 7){
//         continue;
//     }
//     console.log(i);
// }
// let result='';
// const length=8;

// for(let i=1;i<length;i++){
//     for(j=0;j<i;j++){
//         result+='*';
//     }
//     result+='\n';
// }
// console.log(result);

// first: for(let i = 0;i<3;i++){
//     console.log(`First level:${i}`);
//     for(let j=0;j<3;j++){
//         console.log(`Second level:${j}`);
//         for(let k =0;k<3;k++){
//             if(k ===2) continue first;
//             console.log(`Third level:${k}`);
//         }
//     }
// }
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    result=[[arr]];
    
    // Не трогаем
    return result;
}
firstTask();