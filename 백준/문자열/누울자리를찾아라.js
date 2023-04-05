const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {
  ////////
  ///////
  ///////

  // n을 찾아줍니다.
  let n = +input.shift();

  // map을 만들어줍니다.
  let map = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

  for (let i = 0; i < n; i++) {
    let temp = input[i].join('');
    for (let j = 0; j < n; j++) {
      map[i][j] = temp[j];
    }
  }

  let totalRowCnt = 0;
  let totalColCnt = 0;

  let rowCnt = 0;
  let colCnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 빈칸이면 cnt해줍니다.
      if (map[i][j] === '.') rowCnt++;
      // 벽을 만나거나 map의 끝까지 도착했다면
      if (map[i][j] === 'X' || j === n - 1) {
        // cnt가 2이상이면 누울수 있으니 totalRowCnt를 해줍니다.
        if (rowCnt >= 2) totalRowCnt++;
        // rowCnt를 0으로 다시 초기화 해줍니다.
        rowCnt = 0;
      }

      // row와 같지만 map의 [i][j]가 아닌 [j][i]를 통해 col을 탐색해줍니다.
      if (map[j][i] === '.') colCnt++;
      if (map[j][i] === 'X' || j === n - 1) {
        if (colCnt >= 2) totalColCnt++;
        colCnt = 0;
      }
    }
  }
  console.log(totalRowCnt, totalColCnt);
});
