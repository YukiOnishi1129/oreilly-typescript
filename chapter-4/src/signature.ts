// 関数の呼び出しシグネチャ

type Greet = (name: string) => string;

let greet: Greet = (name) => {
  return name;
};

type Log = (message: string, userId?: string) => void;

// logはfunctionではなくletで定義
// 関数ではなく関数式で定義
let log: Log = (message, userId = 'Not signed in') => {
  let time = new Date().toISOString();
  console.log(time, message, userId);
};
