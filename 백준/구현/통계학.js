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
  let n = +input.shift();
  let arr = [];

  for (let i = 0; i < n; i++) {
    let num = +input[i];
    arr.push(num);
  }
  let map = new Map();

  for (let v of arr) {
    map.set(v, (map.get(v) || 0) + 1);
  }

  let max = 0;
  for (let m of map.values()) {
    max = Math.max(max, m);
  }

  arr.sort((a, b) => a - b);
  let sum = arr.reduce((a, c) => a + c);
  let len = arr.length;

  let avg = Math.round(sum / n);
  let many = [...map]
    .map((item) => {
      if (item[1] === max) {
        return item[0];
      }
    })
    .sort((a, b) => a - b);

  let center = arr[Math.floor(len / 2)];
  let range = arr[arr.length - 1] - arr[0];

  console.log(avg);
  console.log(center);
  console.log(many[1] ? many[1] : many[0]);
  console.log(range);
});
