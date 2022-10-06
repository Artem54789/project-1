
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

// if (4 == 9) {
//     console.log('Ok');
// } else {
//     console.log('Err');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Err');
// } else if (num > 100) {
//     console.log('много');
// }else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('Err');  // тернальный оператор

// const num = 50;

// switch (num) {  // стогое соответсвие
//     case 49:
//         console.log('err');
//         break;
//     case 100:
//         console.log('err');
//         break;
//     case 50:
//         console.log('в точку');
//         break;
//     default:
//         console.log('не в этот раз');
//         break;
// }


//**** */ циклы***//

// let num = 50;
// //     while (num <= 55) {
// //         console.log(num);
// //         num++;
// //     }

//     do {
//         console.log(num);
//         num++;
//     }
//     while (num <= 55);

    // for (let i = 1; i < 8; i++) {
    //     console.log(num);
    //     num++;
    // }

    // for (let i = 1; i < 8; i++) {
    //     if (i === 6){
    //     break;
    //     }
    //     console.log(i);
    // }

    // for (let i = 1; i < 8; i++) {
    //     console.log(num);
    //     num++;
    // }

    // for (let i = 1; i < 10; i++) {
    //     if (i === 6){
    //     continue; // пропускает 6
    // }
    //     console.log(i);
    // }


    // *Практика 2*////////////////////////////////

    
    /* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

// const personalMovidDB = {
//     count:numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// // 1 способ
// // // for (let i = 0; i < 2; i++) {
// //     const a = prompt('Один из последних просмотренных фильмов?', ''),
// //         b = prompt('На сколько оцените его?', '');

// //         if (a != null && a!= "" && a.length < 50 && b != null && b != "" ) {
// //             personalMovidDB.movies[a] = b;
// //             console.log('done');
// //         } else {
// //             console.log('error');
// //             i--;
// //         }
// // }
// // 2 способ
// let i = 0;
//     while (i < 2) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//         i++;
//         if (a != null && a!= "" && a.length < 50 && b != null && b != "" ) {
//             personalMovidDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
// }
// 3 способ
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');
//     i++;
//     if (a != null && a!= "" && a.length < 50 && b != null && b != "" ) {
//                 personalMovidDB.movies[a] = b;
//                 console.log('done');
//     } else {
//                 console.log('error');
//                 i--;
// }
//             }

// while (i < 2);


// if (personalMovidDB.count < 10){
//     console.log ("Просмотрено довольно мало фильмов");
// } else if (personalMovidDB.count >= 10 && personalMovidDB.count < 30){
//     console.log ("Вы классический зритель");
// }else if (personalMovidDB.count >= 30 && personalMovidDB.count < 50) {
//     console.log ("Вы киноман");
// }else {
//     console.log ("Err");
// }

// console.log(personalMovidDB);

// ************ функции стрелочные ф-ции************//

// let num = 20; // глобальная переменнная

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;// локальная переменнная
//     console.log(num);
// }

// showFirstMessage("Hello world!");
// console.log(num);

// function calc (a,b) {
//     return (a+b); // окончание фунции
// }

// console.log(calc(4, 5));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function () {
//     console.log("Hello world!");
// };

// const calcs = (a,b) => a+b;
// const calcv =(a,b) => {a+b}; // стрелочная фунция

// *** Методы и свойства строк и чисел ***//

// const str = "test";
// console.log(str.length);

// const arr = [1,2,4];
// console.log(arr.length);

// const str = "teSt";
// // console.log(str[2]);
// // console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));  // ПОИСК  подстроки

// const logg ="Hello world";
// console.log(logg.slice(6,11));

// console.log(logg.substring(6,11));

// console.log(logg.substr(6,5));

// const num = 12.2;
// console.log(Math.round(num));


// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));

// 3 практика
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == ""|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}

start();

const personalMovidDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

        if (a != null && a!= "" && a.length < 50 && b != null && b != "" ) {
            personalMovidDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
    
            if (a != null && a!= "" && a.length < 50 && b != null && b != "" ) {
                personalMovidDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }    
}

rememberMyFilms();


if (personalMovidDB.count < 10){
    console.log ("Просмотрено довольно мало фильмов");
} else if (personalMovidDB.count >= 10 && personalMovidDB.count < 30){
    console.log ("Вы классический зритель");
}else if (personalMovidDB.count >= 30 && personalMovidDB.count < 50) {
    console.log ("Вы киноман");
}else {
    console.log ("Err");
}

function detectPersonalLevel() {
    if (personalMovidDB.count < 10){
        console.log ("Просмотрено довольно мало фильмов");
    } else if (personalMovidDB.count >= 10 && personalMovidDB.count < 30){
        console.log ("Вы классический зритель");
    }else if (personalMovidDB.count >= 30 && personalMovidDB.count < 50) {
        console.log ("Вы киноман");
    }else {
        console.log ("Err");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log (personalMovidDB);
    }
}

showMyDB(personalMovidDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovidDB.genres[i-1] = genre;
    }
}

writeYourGenres ();