import axios from "axios";

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

const fetchUser = async (userId: number): Promise<User> => {
  const response = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.data;
};

const getUserName = async (id: number) => {
  const user = await fetchUser(id);
  console.log(user.name);
};

getUserName(1);
