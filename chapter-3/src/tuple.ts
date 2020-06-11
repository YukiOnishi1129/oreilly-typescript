// タプル型

let tuplea: [number] = [1];

//   各配列の要素ごとに型をつける
let tupleb: [string, string, number] = ['malcolm', 'gladwell', 1963];

// 読み取り専用の配列
let as: readonly number[] = [1, 2, 3];
let bs: readonly number[] = as.concat(4);
// 変更を加えないconcatやsliceを使用する
