import axios from "axios";

const fetchUser = async (userId) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.data;
};

const getUserName = async (id) => {
  const user = await fetchUser(id);
  console.log(user.name);
};

getUserName(1);
