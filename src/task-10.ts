interface User {
  id: number;
  name: string;
}

const toUserObjects = (user: string[]): User[] => {
  return user.map((name, index) => ({
    id: index + 1,
    name,
  }));
};

const users = ["alice", "bob", "charlie"];
const userObjects = toUserObjects(users);

console.log(userObjects);
