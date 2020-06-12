// オーバーロード
// 呼び出しシグネチャの省略記法
type Log2 = (message: string, userId?: string) => void;

// 完全な呼び出しシグネチャ
type log3 = {
  (message: string, userId?: string): void;
};

type Reservation = string;

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
};

// エラーになる
// let reserve: Reserve = (from, to, destination) => {
//   return 'a';
// };

let reserve: Reserve = (
  from: Date,
  toOrDestinaton: Date | string,
  destination?: string
) => {
  return 'a';
};
