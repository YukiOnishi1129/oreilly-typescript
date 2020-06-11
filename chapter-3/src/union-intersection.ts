// union: 合弁 和集合 |
// intersection: 交差 積集合 &

type Cat = { name: string; purrs: boolean };
type Dog = { name: string; barks: boolean; wags: boolean };
type CatOrDogOrBoth = Cat | Dog; // union
type CatAndDog = Cat & Dog; //intesection

let or: CatOrDogOrBoth = {
  name: 'Bonkers',
  purrs: true,
};

// unionはよく使われる
