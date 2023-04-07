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
  let n = +input[0];

  // 99까지는 한수이기 때문에 cnt는 99로 맞춰줍니다.
  let cnt = 99;

  // n이 100미만일땐 cnt를 n으로 초기화 해줍니다.
  if (n < 100) {
    cnt = n;
  } else {
    // 100이상인 경우 3자리를 분해 해줍니다.
    for (let i = 100; i <= n; i++) {
      let [f, s, t] = i.toString().split('').map(Number);
      // 1,2번째 값의 차이가 2,3번째 값의 차이인경우 cnt++ 해줍니다.
      let d = f - s;
      if (s - t === d) cnt++;
    }
  }
  // 총 cnt값을 출력합니다.
  console.log(cnt);
});

// 110

// 99
