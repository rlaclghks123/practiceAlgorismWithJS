//////////////
//////////////
나의풀이;

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
  // 4개의 톱니바퀴를 가져옵니다.
  let [a, b, c, d] = [
    input[0][0].split('').map(Number),
    input[1][0].split('').map(Number),
    input[2][0].split('').map(Number),
    input[3][0].split('').map(Number),
  ];

  // n을 가져옵니다.
  let n = +input[4];

  // 움직일 톱니바퀴, 방향에 대한 정보를 가져옵니다.
  let info = [];
  for (let i = 0; i < n; i++) {
    info[i] = input[5 + i].map(Number);
  }

  // 방향 정보의 횟수만큼 회전해줍니다.
  for (let v of info) {
    let [position, dir] = v;
    // 겹친부분의 N,S극을 확인합니다.
    let [isA, isB, isC] = checkWheel(a, b, c, d);

    // 1,4번째 톱니바퀴 회전하는 함수
    function moveEnd(a, b, c, d, isA, isB, isC) {
      if (dir === 1) {
        a = moveRight(a);
        if (!isA) {
          b = moveLeft(b);
          if (!isB) {
            c = moveRight(c);
            if (!isC) {
              d = moveLeft(d);
            }
          }
        }
      } else {
        a = moveLeft(a);
        if (!isA) {
          b = moveRight(b);
          if (!isB) {
            c = moveLeft(c);
            if (!isC) {
              d = moveRight(d);
            }
          }
        }
      }
    }

    // 2,3번째 톱니바퀴 회전하는 함수
    function moveMiddle(a, b, c, d, isA, isB, isC) {
      if (dir === 1) {
        b = moveRight(b);
        if (!isA) a = moveLeft(a);
        if (!isB) {
          c = moveLeft(c);
          if (!isC) d = moveRight(d);
        }
      } else {
        b = moveLeft(b);
        if (!isA) a = moveRight(a);
        if (!isB) {
          c = moveRight(c);
          if (!isC) d = moveLeft(d);
        }
      }
    }

    // 겹친부분의 N,S극을 확인하는 함수
    function checkWheel(a, b, c, d) {
      let [isA, isB, isC] = [false, false, false];
      isA = a[2] === b[6] ? true : false;
      isB = b[2] === c[6] ? true : false;
      isC = c[2] === d[6] ? true : false;
      return [isA, isB, isC];
    }

    // 오른쪽으로 회전하는 함수
    function moveRight(arr) {
      let last = arr.pop();
      arr.unshift(last);

      return arr;
    }

    // 왼쪽으로 회전하는 함수
    function moveLeft(arr) {
      let first = arr.shift();
      arr.push(first);
      return arr;
    }

    // 이동시킬 톱니바퀴를 확인해서 그에 맞춰서 다른 톱니바퀴도 회전을 해줍니다.
    if (position === 1) moveEnd(a, b, c, d, isA, isB, isC);
    if (position === 2) moveMiddle(a, b, c, d, isA, isB, isC);
    if (position === 3) moveMiddle(d, c, b, a, isC, isB, isA);
    if (position === 4) moveEnd(d, c, b, a, isC, isB, isA);
  }

  // 최종적으로 12시 방향의 극성에 따른 점수를 더해줍니다.
  let sum = a[0] + 2 * b[0] + 4 * c[0] + 8 * d[0];
  console.log(sum);
});

// 10101111
// 01111101
// 11001110
// 00000010
// 2
// 3 -1
// 1 1
