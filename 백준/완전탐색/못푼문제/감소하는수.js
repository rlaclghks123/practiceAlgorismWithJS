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

  // 10이하의 숫자는 먼저 구해줍니다.
  if (n <= 10) {
    console.log(n);
    return;
  }

  // q와 nums에 0부터 10까지의 숫자를 담아줍니다.
  let q = Array.from({ length: 10 }, (_, i) => i);
  let nums = Array.from({ length: 10 }, (_, i) => i);

  // q를 통해 탐색을 해줍니다.
  while (q.length) {
    let num = q.shift();
    let last = num % 10;

    // q에 현재값 + 자기보다 작은 숫자를 모두 담아줍니다.
    // num에 현재값 + 자기보다 작은 숫자를 모두 담아줍니다.
    for (let i = 0; i < last; i++) {
      q.push([num * 10 + i]);
      nums.push([num * 10 + i]);
    }
  }

  // 모든 숫자중에서 n번째 값이 있다면 join('')을 통해 문자열로, 없다면 -1을 출력해줍니다.
  console.log(nums[n] ? nums[n].join('') : -1);
});

// 18    42
