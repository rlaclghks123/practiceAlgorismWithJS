const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [h, w] = input[0].split(' ');
const block = input[1].split(' ').map(Number);

const map = Array.from({ length: h }, () => Array.from({ length: w }, () => 0));
let cnt = 0;

// 1. map에 블럭을 추가해줍니다.
makeMap();

// 2. 고이는 빗물의 양을 cnt 해줍니다.
countRainWater();

// 3. 총 cnt값을 출력해줍니다.
console.log(cnt);

function countRainWater() {
  // 2중 for문을 돌면서 현재값이 0이라면, 현재 위치 ~ 왼쪽 위치에 0이 없으면서 현재위치~오른쪽 위치에 0이 없는 경우를 찾아줍니다.
  // j가 1부터 w-1인 이유는 양쪽 끝 벽 부분은 확인할 필요가 없기 떄문입니다.
  for (let curX = 0; curX < h; curX++) {
    for (let curY = 1; curY < w - 1; curY++) {
      let [flagLeft, flagRight] = checkGatherWater(curX, curY);
      if (map[curX][curY] === 0 && flagLeft && flagRight) cnt++;
    }
  }
}

function makeMap() {
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < block[i]; j++) {
      map[j][i] = block[i];
    }
  }
  // 문제의 예시와 같이 표현하기 위해 map을 상-하로 뒤집어줍니다.
  map.reverse();
}

function checkGatherWater(curX, curY) {
  let [flagLeft, flagRight] = [false, false];

  for (let prevY = 0; prevY < curY; prevY++) {
    if (map[curX][prevY] !== 0) {
      flagLeft = true;
      break;
    }
  }

  for (let nextY = curY + 1; nextY < w; nextY++) {
    if (map[curX][nextY] !== 0) {
      flagRight = true;
      break;
    }
  }

  return [flagLeft, flagRight];
}
