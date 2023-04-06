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

  // arr를 찾아줍니다.
  let arr = input[1].map(Number);

  let cnt = 0;
  // 오름차순으로 정렬 해줍니다.
  arr.sort((a, b) => a - b);

  // 투포인터를 이용해줍니다.
  for (let i = 0; i < n; i++) {
    let find = arr[i];
    let left = 0;
    let right = n - 1;

    while (left < right) {
      let sum = arr[left] + arr[right];

      if (sum === find) {
        // 단 현재값이 left와 같은경우 left++, 현재값이 right와 같은경우는 right--를 해줍니다. (자기자신 포함 X)
        if (left == i) left++;
        else if (right === i) right--;
        else {
          cnt++;
          break;
        }
      } else if (sum > find) {
        right--;
      } else {
        left++;
      }
    }
  }
  console.log(cnt);
});
