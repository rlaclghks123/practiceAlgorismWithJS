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

//   const [start, end] = input.shift().map(Number);
//   const max = 100001;

//   let visited = Array.from({ length: max }, () => false);
//   let d = Array.from({ length: max }, () => 0);

//   let q = [start];
//   visited[start] = true;

//   while (q.length) {
//     let x = q.shift();

//     if (x + 1 < max && !visited[x + 1]) {
//       visited[x + 1] = true;
//       d[x + 1] = d[x] + 1;
//       q.push(x + 1);
//     }
//     if (x - 1 >= 0 && !visited[x - 1]) {
//       visited[x - 1] = true;
//       d[x - 1] = d[x] + 1;
//       q.push(x - 1);
//     }
//     if (x * 2 < max && !visited[x * 2]) {
//       visited[x * 2] = true;
//       d[x * 2] = d[x] + 1;
//       q.push(x * 2);
//     }
//   }
//   console.log(d[end]);
// });

// // 5 17

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

  // 1. start, end값을 가져옵니다.
  const [start, end] = input[0].map(Number);

  // 2. max값을 구해줍니다.
  const max = 100001;

  // 3. 방문처리와, 최소값을 위해  visited, d를 구해줍니다.
  const d = Array.from({ length: max }, () => 0);
  const visited = Array.from({ length: max }, () => false);

  // 4. q에 start값을 담은뒤 bfs를 해줍니다.
  let q = [start];
  visited[start] = true;

  while (q.length) {
    let x = q.shift();

    // 4-1  x-1의 경우 처리
    if (x - 1 >= 0 && !visited[x - 1]) {
      visited[x - 1] = true;
      d[x - 1] = d[x] + 1;
      q.push(x - 1);
    }

    // 4-2 x+1의 경우 처리
    if (x + 1 < max && !visited[x + 1]) {
      visited[x + 1] = true;
      d[x + 1] = d[x] + 1;
      q.push(x + 1);
    }

    // 4-3 x*2의 경우 처리
    if (x * 2 < max && !visited[x * 2]) {
      visited[x * 2] = true;
      d[x * 2] = d[x] + 1;
      q.push(x * 2);
    }
  }
  console.log(d[end]);
});

// 5 17
