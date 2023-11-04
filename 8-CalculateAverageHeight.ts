// 8. Calcular a média de altura de todos os usuários;
import iUser from "./iUser";
const userData: iUser[] = require("./users.json");

const calculateAverageHeight = (userrData: iUser[]): number => {
  let total = 0;
  userrData.map((user: iUser) => {
    total += user["height"];
  });
  const average = total / userrData.length;
  return Number(average.toFixed(2));
};
console.log(`A altura média é ${calculateAverageHeight(userData)}`);
