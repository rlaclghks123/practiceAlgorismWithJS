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

  // A,B,C를 구해줍니다.
  let [a, b, c] = input.shift().map(Number);

  // 최대값을 a,b,c(500, 500, 500) 해서 1501로 잡아줍니다.
  let max = 1501;

  // 방문처리를 확인하기 위해 visited 배열을 만들어줍니다.
  let visited = Array.from({ length: max }, () => Array.from({ length: max }, () => false));

  // 처음 3개의 값을 다 더해줍니다.
  let sum = a + b + c;

  // 만약 3개의 합을 3으로 나눈 나머지가 0이 아닌경우 0을 출력하고 종료해줍니다.
  if (sum % 3 !== 0) {
    console.log(0);
    return;
  }

  // bfs를 통해 2개의 숫자를 비교해줍니다.
  bfs(a, b);

  // bfs탐색 후 최종적으로 3개모두 같은숫자가 가능하면 1을, 아니면 0을 출력해줍니다.
  if (visited[sum / 3][sum / 3]) {
    console.log(1);
  } else {
    console.log(0);
  }

  function bfs(x, y) {
    // 방문한적 없다면 방문처리를 해줍니다.
    if (!visited[x][y]) {
      visited[x][y] = true;

      // 3개의 숫자를 구해줍니다. a,b,c
      let arr = [x, y, sum - x - y];

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          //  모두 비교해서 작은값과 큰값을 찾아줍니다.
          if (arr[i] < arr[j]) {
            let brr = [x, y, sum - x - y];
            // 작은값의 경우 작은수를 더해주고, 큰값의 경우 작은수를 빼줍니다.
            brr[i] += arr[i];
            brr[j] -= arr[i];

            // 2개의 수를 bfs를 통해 비교합니다. 이때 0,1번째 값을 비교하든, 0,2번째 비교하든 상관은 없습니다.
            bfs(brr[0], brr[1]);
          }
        }
      }
    }
  }
});

// 10 15 35
