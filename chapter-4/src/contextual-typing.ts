// 文脈的型付け

// callback関数

function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}

// a がnumber型であることを文脈から予想する
times((a) => console.log(a), 1);
