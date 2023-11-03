import iUser from "./iUser";
const userData: iUser[] = require("./users.json");

const findUserByPropValue = <P extends keyof iUser>(
  users: iUser[],
  // Prop recebe P, definido no começo da função que recebe os atributos do iUser
  prop: P,
  value: any
): iUser[] => {
  const usersWithPropValue: iUser[] = users.filter((user: iUser) => {
    // Verifica se a propriedade existe no objeto
    if (!(prop in user)) {
      throw new Error("The property doesn't exists");
    }
    // Verifica se o valor da propriedade é o igual ao consultado
    if (user[prop] === value) {
      return true;
    }
  });
  return usersWithPropValue;
};

// Sinceramente queria poder atribuir qualquer valor aqui, mas o typescript não permite em código uma propriedade que não existe no usuário
// Recebendo de outro local adicionar um .toLowerCase()
const prop = "id";

console.log(findUserByPropValue(userData, prop, 2));
