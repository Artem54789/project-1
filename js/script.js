"use strict";

// a= 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;


// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// *Интерплоляция//
// const category =  "toys";

// console.log(`http://localhost.com/${category}/5`);

// const user = "Ivan";
// alert(`Hello,${user}`);

//унарный плюс//
// console.log(4 + +"5")


// let incr = 10,
//     decr = 10;

// ++incr;//инкремент префексный
// --decr;//дикремент префексный

// incr++;//инкремент постфексный
// decr--;//дикремент постфексный

// console.log(incr);

// console.log(decr);

// console.log(5%2);

// console.log(2*2 == 4);

// console.log(2*2 == "4");

// console.log(2*2 === "4");

// console.log(2*2 != 5);
// console.log(2*2 !== "4");

// // && 
// // ||

// const inChecked = true,
//     inClose = false;;

// console.log(inChecked && inClose);

// const inChecked = true,
//     inClose = false;;

// console.log(inChecked || inClose);

// // !

// const inChecked = false,
//     inClose = false;;

// console.log(inChecked || !inClose);

//* первый проект *//

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

// const personalMovidDB = {
//     count:numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', ''); 

// personalMovidDB.movies[a] = b;
// personalMovidDB.movies[c] = d;

// console.log(personalMovidDB);

// ***условия ///

if (4 == 9) {
    console.log('Ok');
} else {
    console.log('Err');
}

// const num = 50;

// if (num < 49) {
//     console.log('Err');
// } else if (num > 100) {
//     console.log('много');
// }else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('Err');  // тернальный оператор

const num = 50;

switch (num) {  // стогое соответсвие
    case 49:
        console.log('err');
        break;
    case 100:
        console.log('err');
        break;
    case 50:
        console.log('в точку');
        break;
    default:
        console.log('не в этот раз');
        break;
}