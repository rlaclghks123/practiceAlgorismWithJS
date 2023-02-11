// DFS 사용
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on('line', function (line) {
//   input.push(line.split(' ').map((el) => parseInt(el))); // 문자열을 끊어 정수로 변환후 배열로 반환
// }).on('close', function () {
//   ////////
//   ///////
//   ///////
//   const n = Number(input[0].join(''));
//   const m = Number(input[1].join(''));

//   // 1. 그래프를 만들어줍니다.
//   const graph = Array.from({ length: n + 1 }, () => []);

//   for (let i = 0; i < m; i++) {
//     const [from, to] = input[i + 2];
//     graph[from].push(to);
//     graph[to].push(from);
//   }

// 2. DFS를 통해 1번과 연결된 친구들의 개수를 찾아줍니다.
//   let visited = Array.from({ length: n + 1 }, () => false);
//   let answer = [];

//   function DFS(v) {
//     if (!visited[v]) {
//       visited[v] = true;
//       if (v !== 1) {
//         answer.push(v);
//       }

//       for (let i = 0; i < graph[v].length; i++) {
//         let next = graph[v][i];
//         if (!visited[next]) DFS(next);
//       }
//     }
//   }
//   DFS(1);
//   console.log(answer.length);

//   visited = Array.from({ length: n + 1 }, () => false);
//   let bfsAnswer = [];
//   function BFS(v) {
//     let q = [v];
//     while (q.length) {
//       let x = q.shift();
//       if (visited[x]) continue;
//       visited[x] = true;
//       bfsAnswer.push(x);

//       for (let i = 0; i < graph[x].length; i++) {
//         let next = graph[x][i];
//         if (!visited[next]) q.push(next);
//       }
//     }
//   }

//   BFS(1);
//   console.log(bfsAnswer.length - 1);
// });
// 7
// 6
// 1 2
// 2 3
// 1 5
// 5 2
// 5 6
// 4 7

// BFS 사용
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
  const n = Number(input[0].join(''));
  const m = Number(input[1].join(''));

  // 1. 그래프를 만들어줍니다.
  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < m; i++) {
    const [from, to] = input[i + 2];
    graph[from].push(to);
    graph[to].push(from);
  }

  visited = Array.from({ length: n + 1 }, () => false);
  let bfsAnswer = [];
  function BFS(v) {
    let q = [v];
    while (q.length) {
      let x = q.shift();
      if (visited[x]) continue;
      visited[x] = true;
      bfsAnswer.push(x);

      for (let i = 0; i < graph[x].length; i++) {
        let next = graph[x][i];
        if (!visited[next]) q.push(next);
      }
    }
  }

  BFS(1);
  console.log(bfsAnswer.length - 1);
});
