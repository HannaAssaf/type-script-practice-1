// interface Container<T> {
//   items: T[];
//   addItem(item: T): void;
//   getItem(index: number): T | undefined;
// }

interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T | undefined;
}

// interface NumberContainer {
//   items: number[];
//   addItem: (item: number) => void;
//   getItem: (index: number) => number;
// }

// const numberContainer: NumberContainer = {
//   items: [5, 7, 9],
//   addItem(item) {
//     this.items.push(item);
//   },
//   getItem(index) {
//     return this.items[index];
//   },
// };

const numberContainer: Container<number> = {
  items: [5, 7, 9],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

console.log(numberContainer);

const stringContainer: Container<string> = {
  items: ["milk", "sugar", "tea"],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

console.log(stringContainer);

// 1. Створіть інтерфейс Container, що містить:

// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2.  Створіть два контейнери:

// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.

// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).

// Примітка:

// Контейнер має підтримувати тільки один тип елементів.
