export default interface iUser {
  id: number;

  city: string;
  name: string;
  age: number;
  weight: number;
  sex: sexo;
  height: number;
  salary: number;
  married: boolean;
  active: boolean;
}

enum sexo {
  m = "m",
  f = "f",
}
