console.log(
  "1-й - 3-й примеры: понятия самые-самые базовые.. не так важны. здесь не привёл"
);
console.log("собственно, здесь - вывод. код - смотреть в джс-файле.");
// var - obsolete. Use "let" instead.
// при объявлении переменной с помощью var, он использует несколько механизмов, которые делают их очень неочевидными - см ниже. 10 пример.
// console.log() лучше использовать вместо alert. хорошие программисты так делают и алерт не используют.

// 4-й пример.
console.log("4-й пример");

let asf = "fabcadas";

//asf = 0.1 + 0.2;    //в сумме даёт 0.30000000000000004, т.к. компьютер всё считает в 16-ричной системе
//1/10 + 2/10
//?/16 + ?/16 - это иллюстрация того, что, если число 2/10 записать в равное ему число .../16, то в числителе .../16 получится явно не целое число...

// что в связи с этим делать в джаваскрипте - ничего страшного. просто берут умножают на 10 (смотря какая
// точность вам нужна), а потом делят на 10.:
asf = (1 + 2) / 10;
// таким образом справляются с этой проблемой. но о ней надо знать. т.е. с десятичными дробями надо быть аккуратными.

console.log(asf);
console.log(asf);

// 5-й пример.
console.log("");
console.log("5-й пример");

let dfdf = "asdf";

let a = 0.1;
let b = 0.2;

dfdf = (a * 10 + b * 10) / 10; //я умножение брал в (), но при записи - редактор убирает скобки... автор их на всякий случай ставил, хоть и ясен приоритет операций и в математике тем более, но программирование - не математика, поэтому на всякий. причём везде-везде :)

console.log(dfdf);

// 6-й пример.
console.log("");
console.log("6-й пример");

let str1 = "FFF";
let str2 = "GGG";
let str3 = "HHH + str2";

//let str = str1 + str2 + str3;
// стринговое выражение:
let str = `asdfaf${str1}`; //более читабельная конструкция (программист читает в 10 раз больше, чем пишет), чем str1 + str2 + str3;, к тому же не ошибёшься, если вдруг выражение в скобках окажется цифрой, а ты там каким-то образом подразумевал именно цифру и никакой конкатенации. Кавычки - именно косые (буква ё)!!! т.к. иначе не поймёт эти "вставные" переменные (при присваивании переменной строкового значения, оно записывается в обычные кавычки ""). К тому же, в случае соединения таким способом в одной строке  нескольких строковых значений со значениями нескольких переменных, так будет меньше по символам.

console.log(str);

// 7-й пример.
console.log("");
console.log("7-й пример");

let name = "Alex";
let atr1 = `Возможно, ${name} у вас есть код, который сейчас выполняется в .NET Framework, и вы хотите перенести его в .NET Core. Эта статья содержит...`;

let atr = `asdfaf${atr1}`;

console.log(atr);

// 8-й пример.
console.log("");
console.log("8-й пример");

let el = document.querySelector(".test");
//el.innerHTML = "asdfasddssdf"; //=>ДжаваСкрипт может менять ХТМЛ и ЦСС.
const ftr = el.innerHTML; // const - это те же самые let, только их нельзя менять.

console.log(ftr);

// 9-й пример. Булевый тип данных
console.log("");
console.log("9-й пример");

let c = 10;
let d = "10";
let result = c >= d; //как я понял из лекции, "===" сравнивает и значение и тип данных (знак "строгое равенство", а по Фленагану "оператор идентичности"), а "==" - только значение (можно сравнить числовую переменную со строковой, в которой также записано число - но как текст "оператор равенства").

console.log(result);

// 10-й пример. Булевый тип данных
console.log("");
console.log("10-й пример");

let e = 12;
let f = 13;

if (e !== f) {
  // = "if (!(e === f))"
  console.log("ok:", f);
}

// кстати "{}" - это блочная область видимости в джаваскрипте.
// scope - все переменные и функции, которые доступны вам в текущей области видимости. частый вопрос на собеседовании. термин. непонятно зачем спрашивать. главное знать как работает. можно знать как работает, но не знать термина.
// Замыкание (или closure) - механизм, когда программа ищет переменную в одном scope, если не находит - то в scope на уровень выше, если там не находит - то в scope ещё на уровень выше и т.д. (тоже вопрос на собеседовании)

// если использовать var в объявлении переменной в каком-нибудь scope, то его недостаток и неочевидность в том числе и в том, что он будет виден за пределами этого scope... в scope`ах на уровень выше и т.п. Ничего плохого в var`ах нету, но let`ы более очевидны, поэтому с ними легче работать.

// 11 пример. Цикл фор.
console.log("");
console.log("11 пример. Цикл For");

let str4 = ``;

for (let i = 0; i <= 10; i++) {
  // или, что чаще i += 1, как ни странно.
  console.log(i);

  str4 = `${str4}<li>${i}</li>`; //кавычки обязательно косые! иначе он не схавает, что мы в строку переменные с каким-то значением вставляем.
}

const elList = document.querySelector(".list");
elList.innerHTML = str4;

const elList1 = document.querySelector(".list1");
elList1.innerHTML = str4;

// 12 пример. Массивы.
console.log("");
console.log("12 пример. Массивы");

let arr = ["one", "two", "three", "adfadffsd" /*, false, 123*/]; //в массиве могут быть значения разных (!) типов. но обычно кладут один.

console.log(arr);
console.log("done");

const elList2 = document.querySelector(".list2");
elList2.innerHTML = arr;

let arr1 = [
  "C++ дайджест #26: StayAtHome та вивчай Machine Learning",
  "Product Marketing дайджест #3: стратегия роста во времена неопределенности, путь с $0 до $1,3M MRR",
  "Строка < 25 символов",
  "BA дайджест #8: мастерство работы со стейкхолдерами, прокачиваем модель Kano",
  "Как начинающему разработчику избежать безудержной отладки, красных глаз и испорченного настроения ",
];

const elList3 = document.querySelector(".list3");
elList3.innerHTML = arr1[2];

let str5 = ``;
for (let item of arr1) {
  //так перечисляется for`ом массив.
  if (item.length < 25) {
    continue;
  }
  str5 = `${str5}<li>${item}</li>`; //кавычки обязательно косые!
}

console.log("asddasfasffadf".length);

const elList4 = document.querySelector(".list4");
elList4.innerHTML = str5;

let arr2 = [1234124, true, "asdafasffs"];

console.log(arr2);

// 13 пример. Объекты.
console.log("");
console.log("13 пример. Объекты");

// скалярные типы данных.
let g = 10;
let h = 15;

console.log(g);
console.log(h);

g = h;
// g = 15

h = 20;
console.log("g:", g);
console.log("h:", h);

//ссылочные типы данных

let arr3 = ["asdfasdf 1", "asdf 1"];
let arr4 = ["asdf 2", "asdfa 2"];

console.log(arr3);
console.log(arr4);

arr3 = arr4;

console.log(arr3);
console.log(arr4);

arr4[0] = 123;

console.log("arr3:", arr3);