// let a: string = "ahmad";
// let b = <string>"hahahah";
// console.log(a, b);
// let num: number = 123;
// console.log(num);

// let surName: string;
// surName = "ahmad";
// console.log(surName);
// const func = (n: number, m: number) => {
//   return n * m;
// };
// console.log(func(10, 20));

type Func = (n: string, m: string) => string;
const func: Func = (n, m) => {
  return n + m;
};
console.log(func("ahmad", "raza"));

// Array in T.S
const arr: number[] = [1, 2, 3];
console.log(arr);

// Touple

const arr2: Array<number | string> = ["ahmad", 2];
console.log(arr2);
const arr3: [number, number, number] = [1, 2, 2];

// objects in TS
type obj = {
  height: number;
  weight: number;
  gender: boolean;
};
// const obj: obj = {
//   height: 20,
//   weight: 5,
//   gender: true,
// };
// console.log(obj);

// use interface instead type
interface newObj extends obj {
  student: boolean;
}
const gigi: newObj = {
  height: 20,
  weight: 5,
  gender: true,
  student: true,
};
console.log(gigi);
