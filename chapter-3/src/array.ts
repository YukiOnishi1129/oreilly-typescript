// 配列型

let num: number[] = [1, 3, 4];
let numd: (string | number)[] = [1, 'a'];

let numf = ['red'];
numf.push('blue');
// numf.push(true); エラー

numd.map((_) => {
  // typeofで型の確認ができる
  if (typeof _ === 'number') {
    return _ * 3;
  }
  return _.toUpperCase();
});
