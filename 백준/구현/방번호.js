////////////////
////////////////
// 나의풀이

// 색종이 넓이는 10 10
// 왼쪽벽과의 거리  아래쪽벽과의 거리

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

  // n를 찾아줍니다.
  let n = input.shift().join('');
  let len = n.length;
  let map = new Map();
  let ans = 0;

  // map을 1부터 10까지 0으로 초기화 해줍니다.
  for (let i = 0; i < 10; i++) {
    map.set(i, 0);
  }

  // 입력값을 map에 담아줍니다.
  for (let i = 0; i < len; i++) {
    let a = +n[i];
    // 입력값이 6이거나 9인경우 6으로 통일시켜줍니다.
    if (a === 6 || a === 9) {
      map.set(6, map.get(6) + 1);
    } else {
      map.set(a, map.get(a) + 1);
    }
  }

  // 모든 map의 값이 0이하가 될때까지 반복해줍니다.
  while (true) {
    // 횟수를 추가합니다.
    ans++;

    // 1부터 9까지 map에서 1씩 빼줍니다.
    for (let i = 0; i < 10; i++) {
      // i가 6이나 9인경우 6으로 맞춰 빼줍니다.
      if (i === 6 || i === 9) {
        map.set(6, map.get(6) - 1);
      } else {
        map.set(i, map.get(i) - 1);
      }
    }
    // 모든 map의 값이 0이하가 되면 종료해줍니다.
    if ([...map].every((item) => item[1] <= 0)) break;
  }
  // 총 횟수를 출력해줍니다.
  console.log(ans);
});
