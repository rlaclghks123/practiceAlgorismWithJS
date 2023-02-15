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
  let n = Number(input[0]);

  // 트리, 방문체크를 위한 visited, 부모값을 담을 배열 3개를 만들어줍니다.
  let tree = Array.from({ length: n + 1 }, () => []);
  let visited = Array.from({ length: n + 1 }, () => false);
  let parent = Array.from({ length: n + 1 }, () => []);

  // 트리를 완성해줍니다.
  for (let i = 1; i <= n - 1; i++) {
    const [from, to] = input[i].map(Number);
    tree[from].push(to);
    tree[to].push(from);
  }

  // 1번부터 n번까지 방문한적 없다면 dfs를 해줍니다.
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }

  // dfs를 통해 방문처리 및 부모배열에 값을 담아줍니다.
  function dfs(i) {
    visited[i] = true;

    for (let y of tree[i]) {
      if (!visited[y]) {
        parent[y] = i;
        dfs(y);
      }
    }
  }

  // forEach로 결과를 하나씩 출력하면 ( 또는 forEach가 아니어도 어쨌든 console.log를 n-1번 써야 한다면 ), 문자열을 다 합쳐서 한 번의 console.log를 찍는 것보다 느리다.
  let result = '';
  parent.forEach((ans) => (result += ans + '\n'));
  console.log(result.slice(2));
});

// 7
// 1 6
// 6 3
// 3 5
// 4 1
// 2 4
// 4 7

// bfs
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on('line', function (line) {
//   input.push(line.split(' ')); // 문자열을 끊어 정수로 변환후 배열로 반환
// }).on('close', function () {
//   ////////
//   ///////
//   ///////
//   // 상하좌우 이동하기 위해 위치를 저장해준다.
//   // let dx = [0, 0, 1, -1];
//   // let dy = [1, -1, 0, 0];

//   // 1. tree를 만들어준다.
//   const n = Number(input[0]);

//   const tree = Array.from({ length: n + 1 }, () => []);
//   const visited = Array.from({ length: n + 1 }, () => 0);

//   for (let i = 1; i <= n - 1; i++) {
//     const [from, to] = input[i].map(Number);
//     tree[from].push(to);
//     tree[to].push(from);
//   }

//   let q = [];

//   for (let next of tree[1]) {
//     visited[next] = 1;
//     q.push(next);
//   }

//   while (q.length) {
//     let node = q.shift();

//     for (let next of tree[node]) {
//       if (visited[next]) continue;

//       visited[next] = node;
//       q.push(next);
//     }
//   }

//   let result = '';
//   visited.forEach((ans, i) => {
//     if (i === 0 || i === 1) return;
//     result += ans + '\n';
//   });
//   console.log(result);
// });

// // 7
// // 1 6
// // 6 3
// // 3 5
// // 4 1
// // 2 4
// // 4 7
