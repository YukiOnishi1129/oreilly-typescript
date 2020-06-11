// オブジェクトリテラル表記
let a: {
  b: string;
} = {
  b: 'x',
};

const c: { b: number } = {
  b: 12,
};

// オブジェクトインスタンスeとPersonクラスはプロパティが同じであるため、代入できる
let e: {
  firstName: string;
  lastName: string;
  //   middleName: string;
} = {
  firstName: 'john',
  lastName: 'barrown',
  //   middleName: 'D',
};

class Person {
  constructor(public firstName: string, public lastName: string) {}
}

e = new Person('matt', 'smith');

console.log(e);

let f: {
  b: number; //numberであるプロパティ
  c?: string; // stringであるプロパティである可能性がある
  [key: number]: boolean; //booleanである数値のプロパティを任意の数だけ持つことが可能
};

// [key: T] : U インデックスシグネチャ
// 型Tの全てのキーは、型Uの値を持たなければならない
// 型Tはnumber もしくはstring出なくてはならない

f = { b: 1 };
f = { b: 1, c: undefined };
f = { b: 1, c: 'd' };
f = { b: 1, 10: true };

// 空のオブジェクト型 {[]}
// できるだけ使用は避けるように
