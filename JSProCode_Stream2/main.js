// 1-й пример. различия циклов for of и for in.
console.log("1-й пример. различия циклов for of и for in");
console.log("");

let arr = ["green", "red", "blue"];

for (let idx of arr) {
  console.log(idx); // for of выведет значения элементов массива. for in - их индексы.
}

for (let idx; idx < arr.length; idx++) {
  //устаревшая конструкция. сейчас используют предыдущую. в старой конструкции можно писать, например arr[idx].author, а в новой - только idx.author. Само условие цикла в скобках в новой короче. Бывают случаи, когда индексы пропускаются - такое можно сотворить. В таком сл. старая конструкция будет работать неверно. Т.к. она не предусматривает, что индекс может быть пропущен. Он тут просто на +1 увеличивается. Новая конструкция более современная и предназначена как раз чтобы перебрать массив. Старая как бы соответствует конструкции for in. А если бы из неё попытаться сделать for of, то пришлось бы дописать ещё что-то типа let item = arr[idx], что было бы дополнительным кодом.
}

// следить за пробелами - не должно быть лишних символов. Это очень мешает в случае сравнения кодов. это для Гита важно.

// 2-й пример. Разбор домашнего задания. Объекты.
console.log("");
console.log("2-й пример. Разбор домашнего задания. Объекты");
console.log("");

const arr1 = ["asdffda111", "asdffda222"];

const obj = {
  title: "моя статья",
  content: "текст статьи",
  author: "Vova",
};

// arr[0];
const title = obj.title; //стандартный способ обращения к свойству объекта.
console.log(title);

// можно ещё написать следующим образом:
const title1 = obj["title"];
console.log(title1);

// Или
console.log(obj["title"]);

// обратиться к свойству объекта как к элементу массива можно в том случае, если мне прислали какие-то переменные, которые содержат названия этих ключей, а самих этих названий я сам не знаю. тогда можно записать так:
const keyName = "title";
const field = obj[keyName];

const articles = [
  {
    title: "моя статья1",
    content: "текст статьи1",
    author: "Vova1",
  },
  {
    title: "моя статья2",
    content: "текст статьи2",
    author: "Vova2",
  },
  {
    title: "моя статья3",
    content: "текст статьи3",
    author: "Vova3",
  },
  "test",
];

const val = articles[1].author;
console.log(val);

const val1 = articles[3].rrr;
console.log(val1); // shows 'undefined' in console. Undefined - это значит "ничего". т.е. он говорит, что этого значения просто не существует. Этого ключа.

let val2; // - это не пустая переменная. там реально ничего нет. Если приравнять к null, то null означает пустоту. Но null - это тип данных, который означает пустоту. А Undefined - это, когда реально ничего нету.

// 2-й пример. Функции
console.log("");
console.log("2-й пример. Функции");
console.log("");

// Функции. С т.зр. Джаваскрипта функции - это такой же тип данных, как и строка и всё остальное, а это значит, что функцию можно положить в переменную.
// Есть 2 определения функции: классическое и более новое.
// 1) Классическое (ещё называется Function Declaration):
ClassicFunction(); //вызов

function ClassicFunction() {
  console.log("text from classic function");
}

//причём можно сначала вверху вызов написать, а определение внизу. Это очень не удобно, потому, что это семантически не очевидно
// такие функции в современном джаваскрипте не используют. Но не надо про них забывать. просто надо знать где они нужны. Современный способ отличается от классического

// 2) есть Стрелочные функции. В них никогда не бывает названий. потому их кладут в переменные.

// т.е. если я хочу создать ф-ю наподобие вышеуказанной, то я пишу имя переменной...:
const variableFunction = () => {
  console.log("text from 'modern' arrow-function");
};

// единственное, что - это она не "всплывает", т.е. её нельзя вызвать до того, как вы её объявили. Поэтому:
variableFunction(); //(только после объявления variableFunction)

// анонимная функция (не вызовется)
() => {
  console.log("text from anonyme function");
};
// она должна быть куда-то сохранена, чтобы вы потом могли её использовать
// если мы запишем классическую функцию, как анонимную функцию и соответственно, она будет сохранена в какой-то переменной, то правила вызова этой функции будут уже зависеть не от самой функции, а от доступности переменной. Переменная не может быть вызвана до того, как вы её объявите.

// т.е.
const varAnonymeFunc = function () {
  console.log("text from anonyme function");
};

varAnonymeFunc(); //вызванная до объявления - работать не будет.
// это по сути 3-й способ - анонимные функции. Он тоже используется.

const objectWithFunc = {
  ShowName: () => {
    console.log("содержание функции");
  },
};

objectWithFunc.ShowName(); // если скобки - это означает: функция.

console.log(objectWithFunc.ShowName); // без скобок - просто выведет содержание свойства ShowName, не вызвав никакой функции.

// Аргументы и возвращаемое значение функции.
const a = 100;
b = 12;

const sum = (firstArgument, secondArgument) => {
  console.log(
    "значение первого аргумента: ",
    firstArgument,
    "\n",
    "значение второго аргумента: ",
    secondArgument
  );
  const result = firstArgument + secondArgument;
  console.log("сумма двух аргументов: ", result);
  return result;
};

console.log("результат стандартного вызова функции:");
sum(a, b);
console.log("");

console.log("результат вывода возвращаемого значения функции:");
console.log("возвращаемое значение функции: ", sum(a, b));

//не старайтесь вызубрить все функции. всё, с чем вы работаете постоянно - вы будете помнить. А так, MDN - ваш друг.

// 3-й пример. События, Асинхронность, Observer, Listener`ы.
console.log("");
console.log("3-й пример. События, Асинхронность, Observer, Listener`ы.");
console.log("");
// Как работает асинхронность в ДжаваСкрипте. То что отличает его от всех других языков.

const elBtn1 = document.querySelector(".test1"); //elBtn1 - это объект.
console.log(elBtn1);
console.log(elBtn1.innerHTML); //innerHTML - свойство объекта elBtn.

//свойство addEventListener - это добавление Listener`а. Это свойство может называться по-разному, т.к. есть разные реализации этого паттерна Observer. Но конкретно, когда мы работаем с HTML, когда мы находим какие-то теги - там addEventListener написано. Это функция, мы в первом аргументе сообщаем название события, и втормым аргументом передаём функцию, которая будет вызвана, когда произойдёт это событие, так называемая CallBack-функция. CallBack - это тоже есть такой паттерн.
elBtn1.addEventListener("click", (ev) => {
  let a = ev.target.innerHTML;
  console.log(a);
  console.log("ok");
});
//когда кнопка выбросит событие "click", будет запущена функция.
//в аргументе ev записана вся информация о том, на что конкретно кликнули - о событии (в документации есть описание всех этих ивентов, что в них содержится (справочник по событиям MDN: https://developer.mozilla.org/ru/docs/Web/Events)), куда кликнули, координаты мышки и т.п.
//свойство target - это будет конкретно тот элемент, на который кликнули (элемент, на котором произошло событие).

//поместим функцию в переменную (так же, как раньше):
const cb = (ev) => {
  let a = ev.target.innerHTML;
  console.log(a);
};

// создаём ещё один объект, который хранит всю информацию о классе test2 из HTML-кода (о второй кнопке)
const elBtn2 = document.querySelector(".test2");

// добавим Event Listener для второй кнопки.
elBtn2.addEventListener("click", cb);

// добавим второй Event Listenet для первой (elBtn1) кнопки.
elBtn1.addEventListener("click", (ev) => {
  console.log("evrika!");
});

// теперь то же самое через onclick:
elBtn1.onclick = cb; //запустится определённая выше функция cb, которая выводит текст на кнопке.
elBtn1.onclick = () => {
  console.log("enother text"); //соответственно, перезапишет значение предыдущего свойства onclick - поэтому неудобно. на него нельзя "навешать" много функций.
};

//пример разницы между console.log() и console.dir() - разный вывод в косоли:
console.log({ key: "evrika!" });
console.dir({ key: "evrika!" });

//список тегов и список CSS-свойств и прочее - это называется DOM-дерево

//вам jquery не нужен он не делает ничего на сегодняшний день, что не может делать нативный джаваскрипт. Вообще ничего. Единственное его преимущество, что у него немножко короче функции. Но это не всегда актуально. Например, если вы используете React. В нём функции такие же короткие, как и в jquery, и они все будут присутствовать. (соответсвенно, использовать вместе оба эти фреймворка - абсолютно бессмысленно..)

//прослушивание и обработка других событий:
elBtn1.addEventListener("mouseenter", (ev) => {
  ev.target.classList.add("active"); // classList - свойство, которое меняет классы.
});
elBtn1.addEventListener("mouseleave", (ev) => {
  ev.target.classList.remove("active");
});
//(scss - базовый навык для джс на сегодняшний день. удобный, например, автоматически изменяет имена селекторов (в т.ч. вложенных) в css-файле при изменении scss-файла. В вёрстке его необходимо использовать, упрощает работу.)
//при наведении мышки - код просто меняет классы. Разные классы - разные стили. Менять напрамую CSS-свойства (т.е. без использования добавления-удаления классов) очень нежелательно, потому, что тогда вы мешаете вместе логику и отображение. А когда вы просто меняете классы и класс соответствует просто какому-то там статусу элемента, то это гораздо получается более удобная система, т.е. не надо привязываться к визуальщине, т.е. вы знаете что есть, допустим, у элемента состояние "active", т.е. вас не должно даже волновать, как этот "active" выглядит, вы просто назначаете класс "active" и там уже верстальщик или вы сами напишете как этот "active" выглядит (там height и т.д.). Реальный пример - шапка сайта, которая постепенно убирается, когда происходит скролл (доходя до определённых координат) и т.п.
//(scss - это некое подобие sass. у них компилятор один и тот же. даже в вакансиях, когда пишут sass, подразумевают scss. scss - полностью подразумевает синтаксис обычного css. поэтому scss более популярный и его легче изучить. css можно легко перекинуть в scss, но scss кроме этого ещё имеет дополнительную функциональность - вложенность, переменные и др.)

// 4-й пример. Потоки.
console.log("");
console.log("4-й пример. Потоки.");
console.log("");

//здесь начинается 1-й поток
console.log("start1");

//по причине потоков в том числе не используется alert - т.к. это блокирующая функция: выскочит окно с запросом подтвердить действие и на это время программа остановится.
//alert('!!!');

//начинается 2-й поток
setTimeout(() => {
  console.log("timer!");
}, 3000); //или пишут 3*1000... - запустить функцию из первого аргумента через интервал из второго аргумента - 3 секунды.
//2-й поток не начнёт своё действие, пока не закончится 1-й поток! Даже, если 1-й поток закончится через 5, 10, 100... секунд.

console.log("start2");
console.log("done");
//Блокирующие операции - это операции, которые выполняются очень долго и при этом они не являются асинхронными. Если бы setTimeout() был блокирующей операцией, то тогда бы вывелось сначала "start1" потом прошло бы 3 секунды, потом появилось бы "timer!", а потом "start2" и "done". Т.е. асинхронные операции создают как бы свой отдельный поток, который выполняется после вашего текущего потока (исключение составляют Промисы - это отдельная тема). alert же блокирует текущий поток - сайт зависнет. И даже добавление многопоточности в Node.js - значит у вас зависнет не весь сайт а пол сайта... - это ничего не меняет. Поэтому блокирующие операции в ДЖС банально запрещены, за исключением случаев, когда вы действительно знаете что вы делаете. особенно на back-end`е - повиснет сервак, повиснет у всех. (посмотреть отдельное видео про асинхронность.)
