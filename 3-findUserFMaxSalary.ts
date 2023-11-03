import iUser from "./iUser";
const userData: iUser[] = require("./users.json");

const findUserFMaxSalary = (): iUser => {
  let maxSalary: number = 0;
  let index: number | null = null;
  userData.map((user: iUser, i: number) => {
    if (!(user.sex === "f")) {
      return;
    }
    if (user.salary > maxSalary) {
      maxSalary = user.salary;
      index = i;
    }
  });

  if (!index) {
    throw new Error("Nenhum usuário feminino foi encontrado");
  }
  const userFWithMaxSalary: iUser = userData[index];
  return userFWithMaxSalary;
};

console.log(findUserFMaxSalary());
