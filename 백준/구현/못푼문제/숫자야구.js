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

  // 방문처리를 위해 visited 배열을 만들어줍니다.
  let visited = Array.from({ length: 9 }, () => false);

  // 야구기록을 담을 배열을 만들어줍니다.
  let baseBall = [];
  for (let i = 1; i <= n; i++) {
    baseBall.push(input[i]);
  }

  // 정답을 담을 배열을 만들어줍니다.
  let ans = [];

  // dfs를 통해 탐색을 해줍니다.
  dfs([], visited);
  console.log(ans.length);

  function dfs(arr, visited) {
    // arr에 3자리숫자를 담은경우
    if (arr.length === 3) {
      let flag = true;
      // arr에 담은 값을 문자열로 바꿔줍니다.
      let num = arr.join('');

      // baseBall에 있는 기록들을 하나씩 탐색해줍니다.
      for (let item of baseBall) {
        let [record, s, b] = item;

        // 임의로 만든 num, 입력으로부터 받은 기록을 비교해줍니다.
        let strike = countStrike(num, record);
        let ball = countBall(num, record);
        // strike가 다른경우 flag를 false 처리를 한 뒤 멈춰줍니다.
        if (strike !== +s) {
          flag = false;
          break;
        }

        // ball도 비교해줍니다.
        if (ball !== +b) {
          flag = false;
          break;
        }
      }
      // 만약 비교값이 일치한다면 값을 담아줍니다.
      if (flag) {
        ans.push(num);
      }
    }

    // arr에 3자리를 담지 못한경우 1부터 9까지의 숫자를 dfs를 통해 탐색해줍니다.
    else {
      for (let i = 1; i <= 9; i++) {
        if (!visited[i]) {
          arr.push(i);
          visited[i] = true;
          dfs(arr, visited);
          visited[i] = false;
          arr.pop();
        }
      }
    }
  }

  // 두 문자를 비교해서 같은자리의 값이 같다면 cnt해주고 총 cnt를 return 해줍니다.
  function countStrike(num, hint) {
    let cnt = 0;
    for (let i = 0; i < 3; i++) {
      if (num[i] === hint[i]) cnt++;
    }
    return cnt;
  }

  // 두 문자를 비교해서 다른자리있지만 같은 값이 있다면 Cnt 해주고, 총 cnt 값을 return 합니다.
  function countBall(num, hint) {
    let cnt = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i !== j) {
          if (num[i] === hint[j]) cnt++;
        }
      }
    }
    return cnt;
  }
});

// 4
// 123 1 1
// 356 1 0
// 327 2 0
// 489 0 1
