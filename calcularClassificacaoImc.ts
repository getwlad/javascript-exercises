export const calcularClassificacaoIMC = (imc: number): ClassificacaoIMC => {
  return imc < 18.5
    ? ClassificacaoIMC.BAIXO_PESO
    : imc <= 24.9
    ? ClassificacaoIMC.PESO_NORMAL
    : imc <= 29.9
    ? ClassificacaoIMC.EXCESSO_DE_PESO
    : imc <= 34.9
    ? ClassificacaoIMC.OBESIDADE_CLASSE_1
    : imc <= 39.9
    ? ClassificacaoIMC.OBESIDADE_CLASSE_2
    : ClassificacaoIMC.OBESIDADE_CLASSE_3;
};

export const calcularClassificacaoIMCIdosos = (
  imc: number
): ClassificacaoIMC => {
  return imc <= 22
    ? ClassificacaoIMC.BAIXO_PESO
    : imc < 27
    ? ClassificacaoIMC.PESO_NORMAL
    : ClassificacaoIMC.EXCESSO_DE_PESO;
};

export enum ClassificacaoIMC {
  BAIXO_PESO = "Peso abaixo do ideal",
  PESO_NORMAL = "Peso ideal",
  EXCESSO_DE_PESO = "Peso em excesso",
  OBESIDADE_CLASSE_1 = "Obesidade nível 1",
  OBESIDADE_CLASSE_2 = "Obesidade nível 2",
  OBESIDADE_CLASSE_3 = "Obesidade nível 3",
}
