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

  // group을 담을 변수를 만들어줍니다.
  let group = 0;

  // n값이 0이될떄까지 반복해줍니다.
  while (n > 0) {
    // group++, n은 group의 개수만큼 빼줍니다.
    // 1그룹 1개, 2그룹 2개, 3그룹 3개,  ... 이렇게 되기 때문
    group++;
    n -= group;
  }

  // 그룹이 짝수인 경우 분자는 내림차순, 분모는 오름차순
  // 그룹이 홀수인 경우 분자는 오름차순, 분모는 내림차순
  group % 2 === 0
    ? console.log(n + group + '/' + (1 + -n))
    : console.log(1 + -n + '/' + (n + group));
});

// 1 2 4 7 11
// 3 5 8 12
// 6 9 13
// 10 14
