// 7. Cria uma função que recebe a lista de usuários e retorna
// a lista dos nomes completos capitalizados;
// OBS: o nome 'joao da silva' capitalizado, seria: Joao Da Silva
// Dica1: Criar uma função auxiliar somente para capitalizar
// uma única palavra.
// Dica2: Criar outra função auxiliar para capitalizar
// um nome completo, com mais de uma palavra.
// Usar: split e join e a função da dica1

import iUser from "./iUser";
const userData: iUser[] = require("./users.json");

const transformWord = (word: string) => {
  const newWord = word[0].toUpperCase() + word.slice(1);
  return newWord;
};

const transformWords = (words: string[]) => {
  words = words.map((word) => {
    return transformWord(word);
  });
  const completeWord = words.join(" ");
  return completeWord;
};

const transformUserNameCapitalized = (userrData: iUser[]): iUser[] => {
  const users: iUser[] = userrData.map((user: iUser) => {
    const name = user["name"].split(" ");
    user["name"] = transformWords(name);
    return user;
  });
  return users;
};
console.log(transformUserNameCapitalized(userData));
