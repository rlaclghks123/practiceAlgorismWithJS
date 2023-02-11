const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map((el) => parseInt(el))); // 문자열을 끊어 정수로 변환후 배열로 반환
}).on('close', function () {
  ////////
  ///////
  ///////

  // 1. 정점과 간선을 통해 그래프를 만들어줍니다.
  const [n, m, v] = input[0];
  let graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < m; i++) {
    const [from, to] = input[i + 1];
    graph[from].push(to);
    graph[to].push(from);
  }
  // 2. 정점이 여러개인 경우 작은것 부터 방문해야하기 떄문에 그래프의 요소를 오름차순으로 정렬해준다.
  graph.forEach((item) => item.sort((a, b) => a - b));

  // 3. DFS를 통해 탐색해준다.
  let visited = Array.from({ length: n + 1 }, () => false);
  let dfsArr = [];

  function DFS(v) {
    if (!visited[v]) {
      visited[v] = true;
      dfsArr.push(v);

      for (let i = 0; i < graph[v].length; i++) {
        let next = graph[v][i];
        if (!visited[next]) DFS(next);
      }
    }
  }
  // 4. DFS실행 후 dfsArr를 문자열로 출력해준다.
  DFS(v);

  // 5 방문처리를 다시 초기화해준다.
  visited = Array.from({ length: n + 1 }, () => false);
  let bfsArr = [];
  // 6. BFS로 탐색해준다.
  function BFS(v) {
    let q = [v];

    while (q.length) {
      let x = q.shift();
      if (visited[x]) continue;
      bfsArr.push(x);
      visited[x] = true;

      for (let i = 0; i < graph[x].length; i++) {
        let next = graph[x][i];
        if (!visited[next]) q.push(next);
      }
    }
  }
  BFS(v);
  console.log(dfsArr.join(' '));
  console.log(bfsArr.join(' '));
  process.exit();
});
