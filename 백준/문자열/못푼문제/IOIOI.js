// //////////////
// //////////////

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

  // m을 찾아줍니다.
  let m = +input[1];

  // str을 찾아줍니다.
  let str = input[2].join('');

  let cnt = 0;
  let ans = 0;

  // 0부터 m-2번째까지 돌면서 IOI를 찾아줍니다.
  for (let i = 0; i < m - 2; i++) {
    if (str[i] === 'I' && str[i + 1] === 'O' && str[i + 2] === 'I') {
      cnt++;

      if (cnt >= n) {
        ans++;
        cnt--;
      }

      i++;
    } else {
      cnt = 0;
    }
  }
  console.log(ans);
});

// 1
// 13
// OOIOIOIOIIOII

// 2
// 25
// OOIOIIOIOIOIOIOIOIOIOOIOI
