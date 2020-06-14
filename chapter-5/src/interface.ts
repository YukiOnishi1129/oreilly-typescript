interface A {
  good(x: number): string;
  bad(x: number): string;
}

// エラーになる
// interface B extends A {
//   good(x: number | string): string;
//   bad(x: string): string; // 継承元のinterface A ではx: numberなのでエラーになる
// }

// 型エイリアスにinterfaceを継承させることも可能
type B = A & {
  good(x: number | string): string;
  bad(x: string): string;
};

const Bto: B = {
  good(x: string | number) {
    console.log(x);
    return 'a';
  },
  //   interfaceを型エイリアスでオーバーロードした場合、
  // 交差型になる badの引数xは、interfase Aとtype Bのどちらの場合も取りうるので
  //   number | stringになる
  bad(x: string | number) {
    console.log(x);
    return 'a';
  },
};

interface Animal {
  eat(food: string): void;
  sleep(hour: number): void;
}

class Cat implements Animal {
  eat(food: string) {
    console.info('Ate some', food, '. Mmm!');
  }
  sleep(hours: number) {
    console.info('Sleep for', hours, 'hours');
  }
}
