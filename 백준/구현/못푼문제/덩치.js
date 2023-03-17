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

  // n을 찾아줍니다.
  let n = +input.shift();
  let ans = '';
  let arr = [];
  // 입력값을 arr에 담아줍니다.
  for (let i = 0; i < n; i++) {
    let [x, y] = input.shift().map(Number);
    arr.push([x, y]);
  }

  // 2중 for문을 사용하여 i번째 키, j번째 키를 비교, i번째 몸무게, j번째 몸무게를 비교해서 둘다 큰 경우가 있다면 count++해줍니다.
  // j번째 값을 다 비교했으면 count를 ans에 추가해주고, 최종적으로 ans을 출력해줍니다.
  for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = 0; j < n; j++) {
      if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
        count++;
      }
    }
    ans += count + ' ';
  }
  console.log(ans);
});

// 5
// 55 185
// 58 183
// 88 186
// 60 175
// 46 155
