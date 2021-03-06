// Домашнее задание. Stream1. Объекты.

//Домашка.
//1 уровень - повторите все о чем шла речь в видео самостоятельно.
//2 уровень - читаем про объекты, пока хватит и основ. Я буду детально говорить о них на следующем стриме. Предварительное понимание основ облегчит понимание более сложного материала.
//3 уровень - помните как я вывел масив статей? Усложняем. Масив из объектов, где каждый объект содержит текст статьи, имя автора и забанен ли автор. Вывести список статей в хтмл, где будет текст статьи и автор. Забаненых авторов пропустить (используйте continue)

//Телеграм для вопросов @TrustyWork

console.log("Домашнее задание. Stream1. Объекты.");
console.log("");
console.log("4" + "8" - "6");

//создание объектов четырьмя способами (под впечатлением от Флэнагана)
let articles = [
  //1-й способ (создание с помощью литерала объекта):
  (article1 = {
    text: "iOS дайджест #37: MVVM + SwiftUI, опыт использования Catalyst",
    author: {
      name: "Ivan Ivanov",
      isBanned: false,
    },
  }),
  //2-й способ (с использованием оператора new):
  (article2 = new Object({
    text:
      ".NET дайджест #33: COVID-19 & Visual Studio, .NET 5 preview, ReSharper & Rider release",
    author: {
      name: "Petr Petrov",
      isBanned: false,
    },
  })),
  //3-й способ (с помощью Object.create):
  (article3 = Object.create({
    text:
      "Обзор Akka.NET: как проектировать IoT-системы с помощью этой библиотеки",
    author: {
      name: "Vasiliy Vasiliev",
      isBanned: true,
    },
  })),
  //4-й способ (литерал объекта, но без записи его в переменную, которая нафиг не нужна):
  {
    text:
      "Методи досліджень у дизайні, або Чому варто валідувати ідеї і не зупинятись лише на власному досвіді",
    author: {
      name: "Fedor Fedorov",
      isBanned: false,
    },
  },
  {
    text:
      "Аби щось отримати, треба докласти зусиль — цей принцип справедливий і в IT, і в жонглюванні». Досвід циркового артиста, який став програмістом",
    author: {
      name: "Nikolay Nikolayev",
      isBanned: true,
    },
  },
];

let str = "";
for (let item of articles) {
  str = `${str}<li>${item.text}<br/>${item.author.name}</li>`;
}

const el = document.querySelector(".home");
el.innerHTML = str;

let str1 = "Статьи с незабаненными авторами:";
for (let item of articles) {
  if (item.author.isBanned == true) {
    continue;
  }
  str1 = `${str1}<li>${item.text}<br/>${item.author.name}</li>`;
}

const el1 = document.querySelector(".home1");
el1.innerHTML = str1;
