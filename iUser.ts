export default interface iUser {
  id: number;

  city: string;
  name: string;
  age: number;
  weight: number;
  sex: sexo;
  height: 1.7;
  salary: 1000;
  married: false;
  active: true;
}

enum sexo {
  m = "m",
  f = "f",
}
