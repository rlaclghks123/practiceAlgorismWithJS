////////////////

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
  let [n, m] = input.shift().map(Number);
  let map = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  let house = [];
  let chicken = [];

  // map, house, chicken을 완성해줍니다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map[i][j] = +input[i][j];
      if (map[i][j] === 1) house.push([i, j]);
      if (map[i][j] === 2) chicken.push([i, j]);
    }
  }

  // 치킨집의 방문처리를 위해 check 배열을 만들어줍니다.
  let check = Array.from({ length: chicken.length }, () => false);

  // dfs를 통해 탐색을 해줍니다.
  let ans = Number.MAX_SAFE_INTEGER;
  dfs(0, 0);
  console.log(ans);

  function dfs(idx, cnt) {
    // cnt(방문한 치킨집의 횟수)가 m이 된 경우 최소 거리를 찾아줍니다.
    if (cnt === m) {
      ans = Math.min(ans, getDis());
      return;
    }

    // idx부터 chicken의 길이까지  즉 모든 치킨집을 탐색합니다.
    for (let i = idx; i < chicken.length; i++) {
      // 방문한적 없으면
      if (!check[i]) {
        // 방문처리를 해주고
        check[i] = true;
        dfs(i, cnt + 1);
        // dfs탐색후 재방문할 수 있기 때문에 false로 바꿔줍니다.
        check[i] = false;
      }
    }
  }

  function getDis() {
    // 총 거리를 담을 변수를 만들어줍니다.
    let sum = 0;
    house.forEach(([x, y]) => {
      let min = Number.MAX_SAFE_INTEGER;

      chicken.forEach((_, i) => {
        // 치킨집이 방문한적 있다면
        if (check[i]) {
          let [x2, y2] = chicken[i];
          // 집과 치킨집의 최소거리를 찾아줍니다.
          min = Math.min(min, Math.abs(x - x2) + Math.abs(y - y2));
        }
      });
      // 최소거리를 다 더해줍니다
      sum += min;
    });
    // 총 거리의 합을 return 합니다.
    return sum;
  }
});

// 5 3
// 0 0 1 0 0
// 0 0 2 0 1
// 0 1 2 0 0
// 0 0 1 0 0
// 0 0 0 0 2

// 5
