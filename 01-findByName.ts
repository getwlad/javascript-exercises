// 1. Encontrar um usuário pelo nome;
import iUser from "./iUser";
const userData: iUser[] = require("./users.json");

const findByName = (userName: string): iUser[] => {
  const usersWithName: iUser[] = userData.filter((user: iUser) => {
    if (user.name.includes(userName)) {
      return true;
    }
  });
  return usersWithName;
};
console.log(findByName("josé"));
