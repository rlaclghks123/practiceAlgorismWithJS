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

  // t를 찾아줍니다.
  let t = +input.shift();

  // t만큼 반복해줍니다.
  while (t-- > 0) {
    // n과 m을 찾아줍니다.
    let [n, m] = input.shift().map(Number);

    // numbers를 찾아줍니다.
    let numbers = input.shift().map(Number);
    let q = [];

    // q에 numbers와 현재 index값을 담아줍니다.
    for (let i = 0; i < n; i++) {
      q.push([numbers[i], i]);
    }

    let count = 1;

    while (true) {
      // 첫번째 값을 꺼냅니다.
      let first = q.shift();
      // 만약 첫번째 값이 가장 중요도가 크다면
      if (q.every((item) => first[0] >= item[0])) {
        // m번째 값과 같은지 확인합니다. 만약 같다면 count값을 출력해주고 종료합니다.
        if (first[1] === m) {
          console.log(count);
          break;
        }
        // 만약 m번째 값과 다르다면 count++를 해줍니다.
        else {
          count++;
        }
      }
      // 첫번째 값이 중요도가 가장 큰것이 아니라면 q마지막으로 값을 추가합니다.
      else {
        q.push(first);
      }
    }
  }
});
