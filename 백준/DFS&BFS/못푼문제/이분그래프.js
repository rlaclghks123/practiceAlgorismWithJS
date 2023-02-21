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

  // t를 찾아줍니다.
  let t = +input.shift();

  // 시간초과를 방지하기 위해 shift메소드를 사용하지 않고 index를 사용합니다.
  let index = 0;

  while (t--) {
    const [n, m] = input[index++].map(Number);

    // graph를 만들어줍니다.
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => 0);

    for (let i = 0; i < m; i++) {
      const [from, to] = input[index + i].map(Number);
      graph[from].push(to);
      graph[to].push(from);
    }

    // bfs 를 만들어줍니다.
    function bfs(start) {
      let q = [start];

      // check는 이분그래프이기 때문에 1 또는 2  2개의 그룹으로 만들어줍니다.
      let group = 1;

      // 그룹에 담아줍니다.
      visited[start] = group;

      while (q.length) {
        let node = q.shift();

        // 만약 1번 그룹이었다면 group은 2로, 2번그룹이었다면 1로 바꿔줍니다.
        if (visited[node] === 1) group = 2;
        else group = 1;

        // node와 이어져 있는 친구들을 q에 담아주고, 방문처리를 해줍니다.
        for (let i = 0; i < graph[node].length; i++) {
          let next = graph[node][i];

          if (visited[next] === 0) {
            visited[next] = group;
            q.push(next);
          }
          // 만약 현재값과 다음값이 같으면 종료해줍니다.
          else if (visited[next] === visited[node]) {
            return;
          }
        }
      }
    }

    // 1번부터 n번까지 노드를 방문하여 방문한적 없으면 bfs 탐색을 해줍니다.
    for (let i = 1; i <= n; i++) {
      if (visited[i] === 0) {
        bfs(i);
      }
    }

    // 1번부터 n번 노드 중 다음값과 같은 그룹이면 no, 다른 그룹이면 yes를 출력해줍니다.
    function ans() {
      for (let i = 1; i <= n; i++) {
        for (let j = 0; j < graph[i].length; j++) {
          let next = graph[i][j];

          if (visited[next] === visited[i]) {
            return console.log('NO');
          }
        }
      }
      return console.log('YES');
    }
    ans();
    index += m;
  }
});

// 2
// 3 2
// 1 3
// 2 3
// 4 4
// 1 2
// 2 3
// 3 4
// 4 2
