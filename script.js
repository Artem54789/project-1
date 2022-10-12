
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
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

//     while (numberOfFilms == ""|| numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
//     }
// }

// start();

// const personalMovidDB = {
//     count:numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//         if (a != null && a!= "" && a.length < 50 && b != null && b != "" ) {
//             personalMovidDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
    
//             if (a != null && a!= "" && a.length < 50 && b != null && b != "" ) {
//                 personalMovidDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }    
// }

// rememberMyFilms();


// if (personalMovidDB.count < 10){
//     console.log ("Просмотрено довольно мало фильмов");
// } else if (personalMovidDB.count >= 10 && personalMovidDB.count < 30){
//     console.log ("Вы классический зритель");
// }else if (personalMovidDB.count >= 30 && personalMovidDB.count < 50) {
//     console.log ("Вы киноман");
// }else {
//     console.log ("Err");
// }

// function detectPersonalLevel() {
//     if (personalMovidDB.count < 10){
//         console.log ("Просмотрено довольно мало фильмов");
//     } else if (personalMovidDB.count >= 10 && personalMovidDB.count < 30){
//         console.log ("Вы классический зритель");
//     }else if (personalMovidDB.count >= 30 && personalMovidDB.count < 50) {
//         console.log ("Вы киноман");
//     }else {
//         console.log ("Err");
//     }
// }

// detectPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log (personalMovidDB);
//     }
// }

// showMyDB(personalMovidDB.privat);

// function writeYourGenres () {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovidDB.genres[i-1] = genre;
//     }
// }

// writeYourGenres ();

//** */ callback функцию **//

// function first () {
//     setTimeout(function() {
//         console.log (1);
//     }, 500);
// }

// function second () {
//     console.log (2);
// }

// first ();
// second ();

// function learnJs (lang, callback) {
//     console.log (`Я учу ${lang}`);
//     callback();
// }

// function done () {
//     console.log ('я прошел этот урок');
// }

// learnJs('JavaScript', done);


// объекты, деструктиризация объектов //

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log ('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors; //деструктиризация
// console.log (border);

// console.log(Object.keys(options).length); // считает сколько ключей кратко

// console.log(options.name);


// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Cвойство ${i} имеет значения ${options[key][i]}`);
//             counter ++;
//         }
        
//     }else {
//         console.log(`Cвойство ${key} имеет значения ${options[key]}`);
//         counter ++;
//     }
// }
// console.log(counter);


//*** массивы и псевдомассивы  ***//

// const arr = [11,22,4,5,12];
// arr.sort(compateNum);
// console.log(arr);

// function compateNum (a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length); // последний индекс +1
// console.log(arr);

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массва ${arr}`);
// });

// arr.pop(); // удалить
// arr.push(1); // добавить в конец

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("","");
// const products = str.split(", "); 
// products.sort();
// // console.log(products);
// console.log(products.join(";"));

// *** передача по ссылке или по значению ,Spread оператор *** //

// let a = 5,
//     b = a;
// b = b + 5;

// console.log(a);

// console.log(b);


// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Cсылку передали

// copy.a = 10;

// console.log(copy);

// console.log(obj);

// function copy(mainObj){
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers ={
//     a:2,
//     b:5,
//     c: {
//         x:7,
//         y:4
//     }
// };

// const newNumbers = copy(numbers);// поверхностная копия 

// newNumbers.a= 10;
// newNumbers.c.x= 10;

// console.log(newNumbers);
// console.log(numbers);


// const add = {
//     d: 17,
//     e: 20
// };
// const clone = Object.assign({},add);

// clone.d =20;

// console.log(add);

// console.log(clone);

// const oldArray = ["a", "c", "d"];
// const newArray = oldArray.slice();

// newArray[1] = 'фывфыв';

// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube','vimeo','rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk'];

// console.log(internet);


// function log (a,b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2,3,6];

// log(...num);

// const array = ['a','b'];

// const newAarray = [...array];

// const q = {
//     one:1, 
//     two:2
// };

// const newObj = {...q};

//***  сосновы ООП, прототипно принетированное наследование ***//

// let str ="test";
// let strObj = new String();

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const solfier = {
//     health: 400,
//     armor: 100,
//     sayHello : function() {
//         console.log("hello");
//     }
// };

// const jonh = Object.create(solfier);// создание прототипных связей

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = solfier; //старая версия

// Object.setPrototypeOf(jonh,solfier);//новая версия

// console.log(jonh.armor);
// jonh.sayHello();


//***Практика 4ч. Используем объекты***//

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovidDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovidDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        while (personalMovidDB.count == ""|| personalMovidDB.count == null || isNaN(personalMovidDB.count)) {
            personalMovidDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },
    rememberMyFilms: function()  {
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
    },
    detectPersonalLevel: function() {
        if (personalMovidDB.count < 10){
            console.log ("Просмотрено довольно мало фильмов");
        } else if (personalMovidDB.count >= 10 && personalMovidDB.count < 30){
            console.log ("Вы классический зритель");
        }else if (personalMovidDB.count >= 30 && personalMovidDB.count < 50) {
            console.log ("Вы киноман");
        }else {
            console.log ("Err");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log (personalMovidDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovidDB.privat) {
            personalMovidDB.privat = false;
        }else {
            personalMovidDB.privat = true;
        }
    },
    writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);

        if(genre === ''|| genre === null){
            console.log('вы ввели некорректные данные')
            i--
        }else{
            personalMovidDB.genres[i-1] = genre;
        }
    }
    personalMovidDB.genres.forEach((item, i) => {
        console.log(`"Любимый жанр ${i + 1}- это ${item}"`)
    });
}
};

