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

  // t를 찾아줍니다.
  let t = +input.shift();
  // paper(흰도화지)에 100개씩 2차배열로 false를 담아줍니다.
  let paper = Array.from({ length: 100 }, () => Array.from({ length: 100 }, () => false));

  // t만큼 반복하여 x,y를 구해줍니다.
  for (let z = 0; z < t; z++) {
    let [x, y] = input.shift().map(Number);

    // x+10, y+10 모두 paper에 검은색 색종이를 담아줍니다(true로 채워줌)
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        paper[x + i][y + j] = true;
      }
    }
  }

  // 최종적으로 검은색 색종이가 담긴 부분의 값을 더해줍니다. (true의 개수를 더해줌)
  let answer = paper.reduce((acc, cur) => {
    for (let v of cur) {
      v ? acc++ : acc;
    }
    return acc;
  }, 0);

  console.log(answer);
});

// 3
// 3 7
// 15 7
// 5 2
