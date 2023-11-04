// 6. Cria uma função que recebe a lista de usuários e retorna
// uma lista com o IMC dos respectivos usuários;
// OBS: imc = peso/(altura x altura)

import iUser from "./iUser";
const userData: iUser[] = require("./users.json");
import {
  ClassificacaoIMC,
  calcularClassificacaoIMC,
  calcularClassificacaoIMCIdosos,
} from "./calcularClassificacaoImc";

interface iUserImc {
  id: number;
  nome: string;
  imc: number;
  resultado: ClassificacaoIMC;
}

const getImcFromUsers = (usersData: iUser[]): iUserImc[] => {
  const users: iUserImc[] = [];
  for (let user of usersData) {
    // Calcula o imc do usuário
    const imc: number = Number(
      (user["weight"] / (user["height"] * 2)).toFixed(2)
    );
    // define se o resultado do imc, como se está acima do peso ou no peso ideal
    let resultado: ClassificacaoIMC = calcularClassificacaoIMC(imc);
    // Se o usuário for idoso, o calculo é diferente
    if (user["age"] >= 65) {
      resultado = calcularClassificacaoIMCIdosos(imc);
    }
    // Cria o novo objeto com o resultado e adiciona no novo array
    const userImc: iUserImc = {
      id: user["id"],
      nome: user["name"],
      imc,
      resultado,
    };
    users.push(userImc);
  }

  return users;
};
console.log(getImcFromUsers(userData));
