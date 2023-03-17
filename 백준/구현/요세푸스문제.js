////////////////
////////////////
// 나의풀이

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ')); // 문자열을 끊어 정수로 변환후 배열로 반환
}).on('close', function () {
  ////////
  ///////
  ///////

  // [n,m]를 찾아줍니다.
  let [n, m] = input.shift().map(Number);

  // q에 1부터 n까지 값을 담아줍니다.
  let q = [];

  for (let i = 1; i <= n; i++) {
    q.push(i);
  }

  let ans = [];
  let idx = 1;

  // q의 값이 1개이상인 경우 반복해줍니다.
  while (q.length >= 1) {
    // q의 첫번째 값을 빼서 맨뒤로 보내줍니다.
    q.push(q.shift());
    if (idx % m === 0) {
      // idx가 m번째 인경우 q의 마지막값을 빼서 ans에 담아줍니다.
      let temp = q.pop();
      ans.push(` ${temp}`);
    }
    //  idx값을 ++ 해줍니다.
    idx++;
  }

  // 첫번째 값의 공백을 제거해주고 ans의 값의 처음과 끝에 < >를 붙혀줍니다.
  ans[0] = ans[0].trim();
  console.log('<' + ans + '>');
});
