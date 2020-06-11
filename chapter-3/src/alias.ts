// 型エイリアス：ある型を指し示す

type Age = number;
// 型エイリアスの重複宣言はエラー
// type Age = string;

type Person2 = {
  name: string;
  age: Age; // Age型
};

let age: Age = 55;

let driver: Person2 = {
  name: 'aaaa',
  age: age,
};

console.log(driver);

// 型エイリアスはブロックスコープ
type Color = 'red';

let x = Math.random() < 0.5;

if (x) {
  type Color = 'blue';
  let b: Color = 'blue'; //type Color はblue
} else {
  let c: Color = 'red'; //type Color はred
}
