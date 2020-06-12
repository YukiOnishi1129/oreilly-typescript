// ポリモーフィズム

let filter: Filter = (array, f) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (f(item)) {
      result.push(item);
    }
  }
  return result;
};

// ジェネリックス
// Tに型を入れることで、他の部分もTの型になる
type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

// Tはnumberにバインドされる
console.log(filter([1, 2, 3, 4], (_) => _ < 3));
// Tはstringにバインドされる
console.log(filter(['a', 'b'], (_) => _ !== 'b'));
