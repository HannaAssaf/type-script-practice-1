interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
  website: string;
  address: Address;
}

type Address = {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: Geo;
};
type Geo = {
  lat: string;
  lng: string;
};
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

fetchUsers().then((users) => console.log(users));

// Функція fetchUsers повертає проміс, який через fetch отримує список користувачів з API.
// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },
