//Есть некий массив с элементами. На основе него вы формируете список, примерно, как делали список статей. Когда наводим мышку на элемент массива, в конце статьи появлялся крестик. Когда вы на этот крестик кликаете, соответственно этот элемент (статья) должен исчезать.

let tasks = [
  {
    shortDescription: "Task1",
    fullDescription: "Description1",
    owner: "Vladimir",
  },
  {
    shortDescription: "Task2",
    fullDescription: "Description2",
    owner: "Vladimir",
  },
  {
    shortDescription: "Task3",
    fullDescription: "Description3",
    owner: "Vladimir",
  },
  {
    shortDescription: "Task4",
    fullDescription: "Description4",
    owner: "Vladimir",
  },
  {
    shortDescription: "Task5",
    fullDescription: "Description5",
    owner: "Vladimir",
  },
  {
    shortDescription: "Task6",
    fullDescription: "Description6",
    owner: "Vladimir",
  },
];

let str = "";
for (let i = 0; i < tasks.length; i++) {
  str = `${str}<li class="sublist${i}">${tasks[i].shortDescription}</li>`;
  document.querySelector(`.sublist${i}`).addEventListener;
}

const a = document.querySelector(".list1");
a.innerHTML = str;
