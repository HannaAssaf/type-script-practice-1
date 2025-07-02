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

const fetchUsersInfo = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

const getUsersInfo = async () => {
  const usersInfo = await fetchUsersInfo();
  console.log(usersInfo);
};

getUsersInfo();
