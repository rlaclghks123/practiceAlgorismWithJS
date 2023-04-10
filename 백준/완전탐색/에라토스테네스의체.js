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
  // n,k를 찾아줍니다.
  let [n, k] = input.shift().map(Number);

  // 소수를 담을 arr를 만들어줍니다.
  let arr = [];

  // 2부터 n까지의 숫자중 소수를 찾아 arr에 담아줍니다.
  let i = 2;
  while (i <= n) {
    if (isPrime(i, n)) arr.push(i);
    i++;
  }

  // 중복제거를 위해 set을 만들어줍니다.
  let set = new Set();

  // arr 즉 소수들을 돌면서 n이하의 각 소수의 배수들을 set에 담아줍니다.
  arr.forEach((num) => {
    for (let i = num; i <= n; i++) {
      if (i % num === 0) {
        set.add(i);
      }
    }
  });
  // set의 k-1번째 값을 출력합니다.
  console.log([...set][k - 1]);
});

// 소수 구하는 함수
function isPrime(num) {
  // 1이하면 소수가 아님
  if (num <= 1) return false;

  // 2부터 num의 제곱근까지 num를 i로 나눠 나머지가 0이라면 소수가 아님.
  // 제곱근까지만 하는 이유는 어차피 배수가 되기때문에 굳이 다 해볼필요가 없기 때문
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  // 나눠지지 않는다면 소수이므로 true
  return true;
}

// 15 12
