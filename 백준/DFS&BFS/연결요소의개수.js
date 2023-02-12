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

  // 상하좌우 이동하기 위해 위치를 저장해준다.
  // let dx = [0, 0, 1, -1];
  // let dy = [1, -1, 0, 0];

  let [n, m] = input[0].map(Number);
  let graph = Array.from({ length: n + 1 }, () => []);
  let visited = Array.from({ length: n + 1 }, () => false);

  //  그래프를 만들어 줍니다.
  for (let i = 0; i < m; i++) {
    let [from, to] = input[i + 1].map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  // dfs를 통해 graph와 연결된 친구들을 다 방문처리 해줍니다.
  function dfs(start) {
    visited[start] = true;

    for (let i = 0; i < graph[start].length; i++) {
      let next = graph[start][i];
      if (!visited[next]) {
        dfs(next);
      }
    }
  }

  // 방문한적 없다면 dfs처리를 해주고, count 해줍니다.
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      dfs(i);
      ans++;
    }
  }
  console.log(ans);
});

// 6 5
// 1 2
// 2 5
// 5 1
// 3 4
// 4 6
