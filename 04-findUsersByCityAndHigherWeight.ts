// 4. Encontre os usuários de um dado estado e com peso maior
// que um dado peso;
// Os users não contem estado e sim cidade
import iUser from "./iUser";
const userData: iUser[] = require("./users.json");

const findUsersByCityAndHigherWeight = (
  city: string,
  weight: number
): iUser[] => {
  const users: iUser[] = userData.filter((user: iUser) => {
    if (!user.city.includes(city)) {
      return;
    }
    if (user.weight > weight) {
      return true;
    }
  });
  return users;
};
console.log(findUsersByCityAndHigherWeight("São Paulo", 60));
