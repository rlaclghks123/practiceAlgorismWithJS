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

  // n,m을 입력받습니다.
  const [n, m] = input[0].map(Number);

  // map을 만들어줍니다.
  const map = new Map();

  // n개의 문자열을 map에 value값을 1로 담아줍니다.  중복되는 집합이 없기 때문
  for (let i = 1; i <= n; i++) {
    let str = input[i].join('');
    map.set(str, 1);
  }

  // 개수를 측정할 ans변수를 생성
  let ans = 0;

  // n+1부터 n+m개의 문자열을 탐색하여 map에 존재하면 count해주고 총 count한 개수를 출력합니다.
  for (let j = n + 1; j <= n + m; j++) {
    let check = input[j].join('');
    map.get(check) ? ans++ : ans;
  }
  console.log(ans);
});
