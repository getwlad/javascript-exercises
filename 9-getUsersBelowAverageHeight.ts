// 9. Retornar os usuários com altura abaixo da média;
import iUser from "./iUser";
const userData: iUser[] = require("./users.json");
import { calculateAverageHeight } from "./8-CalculateAverageHeight";

const averageHeight = calculateAverageHeight(userData);

const getUsersBelowAverageHeight = (
  averageHeight: number,
  userrData: iUser[]
): iUser[] => {
  const users = userrData.filter((user) => {
    if (user["height"] < averageHeight) {
      return true;
    }
  });
  return users;
};

console.log(getUsersBelowAverageHeight(averageHeight, userData));
