export interface CreateUser {
  name: string;
  age: number;
}

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

function createUser({ name, age }: CreateUser): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });

// Розширення інтерфейсу
export interface UserFormValues {
  name: string;
  age: number;
}
interface UserN extends UserFormValues {
  isAdmin: boolean;
}

function createUserS({ name, age }: UserFormValues): UserN {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUserS({ name: "Alice", age: 30 });
