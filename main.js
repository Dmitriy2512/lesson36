// while - это цикл "ПОКА"

// первоначальное значение
// while(условие){
//     инструкция
//     счетчик
// }

// let a = 0;
// while(a < 8){
//     console.log(a) // 0, 1, 2, 3, 4, 5
//     a++; // 1, 2, 3, 4, 5, 6, 7, 8
// }

// let a = 1 // превоначальное значение
// let p = 1 // первоначальное хначение умножения 
// let k = Number(prompt("Введите факториал числа k!= ")) // 5
// while (a <= k) {
//     p*= a // p = p*a --1, 2, 6 , 24, 120
//     a++; // 2, 3, 4, 5, 6
// }
// console.log(p)

// for - цикл "ДЛЯ"

// for(переменная;условие;шаг){
//     инструкция
// }

// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// for(let a = 0; a < 101; a++){
//     if(a % 2 == 1) continue;
//     console.log(a)
// }

// DZ
// n = 1+2+3+4+..+n
// n = 1+3+5+7+..+n
// y = x**2 , x = 1,2,3,..,n
// создать таблицу умножения с 2 до 10 ----- вложеный цикл

//i*j=mull
//1*2=2
// табоицу умножения
// for(let i = 1; i < 11; i++){
//     console.log(`Таблица умножения на ${i}`)
//     for(let j = 1; j < 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
//     console.log("-------------")
// }

// let a = Number(prompt("Выберите таблицу умножения"))
// for(let i = 1; i < 11; i++){
//     if (a == i){
//         console.log(`Таблица умножения на ${i}`)
//         for(let j = 1; j < 11; j++){
//             console.log(`${i} * ${j} = ${i*j}`)
//         }
//         console.log("---------------")
//     }
// }

// let a = Number(prompt("Введите конечное число"))
// let sum = 0
// for(let i = 1; i <= a; i++){
//     sum += i
// }
// console.log(sum)

// let a = Number(prompt("Введите конечное число"))
// let sum = 0
// for(let i = 1; i <= a; i++){
//     if (i % 2 == 0) continue
//     sum += i
//     console.log(sum)
// }

// for(let i = 1; i < 11; i++){
//     console.log(`Таблица степеней на ${i}`)
//     for(let j = 1; j < 11; j++){
//         console.log(`${i} * ${j} = ${i**j}`)
//     }
//     console.log("---------------")
// }

DZ

// let a = Number(prompt("Выберите таблицу умножения"))
// for(let i = 1; i < 11; i++){
//     if (a == i){
//         console.log(`Таблица умножения на ${i}`)
//         for(let j = 1; j < 11; j++){
//             console.log(`${i} * ${j} = ${i*j}`)
//         }
//         console.log("---------------")
//     }
// }

// let a = Number(prompt("Введите конечное число"))
// let sum = 0
// for(let i = 1; i <= a; i++){
//     sum += i
// }
// console.log(sum)

// let a = Number(prompt("Введите конечное число"))
// let sum = 0
// for(let i = 1; i <= a; i++){
//     if (i % 2 == 0) continue
//     sum += i
//     console.log(sum)
// }

// for(let i = 1; i < 11; i++){
//     console.log(`Таблица степеней на ${i}`)
//     for(let j = 1; j < 11; j++){
//         console.log(`${i} * ${j} = ${i**j}`)
//     }
//     console.log("---------------")
// }
