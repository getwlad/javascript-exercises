// 5. Encontre os usuários de um dado estado ou que são casados;
import iUser from "./iUser";
const userData: iUser[] = require("./users.json");

const findUsersByCityOrMarried = (city: string): iUser[] => {
  const users: iUser[] = userData.filter((user: iUser) => {
    if (user.city.includes(city) || user.married) {
      return true;
    }
  });
  return users;
};
console.log(findUsersByCityOrMarried("São Paulo"));
