function solution(maps) {
  let answer = 0;

  // 동 서 남 북의 좌표를 기록해준다.
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  // 범위를 변수에 담아준다.
  let n = maps.length;
  let m = maps[0].length;

  // 방문한 횟수를 처음엔 1로 초기화 해준다.
  let count = [...maps].map((item) => item.map(() => 1));

  // 큐에 시작점을 담아준다.
  let queue = [[0, 0]];

  // 큐에 값이 있다면 계속 반복해준다.
  while (queue.length) {
    // 큐에서 현재 위치를 뽑아줍니다.
    let [x, y] = queue.shift();

    // 동서남북 4방향으로 다음값을 찾아줍니다.
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      // 범위에 벗어나지 않고, 다음위치를 갈 수 있으며(maps===1) && 방문한적이 없다면(count===1)
      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (maps[nx][ny] === 1 && count[nx][ny] === 1) {
          // 방문했기 때문에 count를 해주고, 큐에 현재위치를 담아줍니다.
          count[nx][ny] = count[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  // 최종목표인 count[n-1][m-1]에 방문한적 없다면(===1) -1을 출력, 방문한적 있으면 방문한 횟수를 return 해줍니다.
  return count[n - 1][m - 1] === 1 ? -1 : count[n - 1][m - 1];
}
solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]); // 11
solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
]); // -1
// function solution(maps) {
//   // 1. 남동북서 기준
//   const dy = [1, 0, -1, 0];
//   const dx = [0, 1, 0, -1];
//   const row = maps.length;
//   const col = maps[0].length;

//   // 2.
//   const visitCount = [...maps].map((r) => r.map((c) => 1));

//   // 3.
//   const queue = [[0, 0]]; //시작점

//   // 4.
//   while (queue.length) {
//     const [y, x] = queue.shift();

//     // 5.
//     for (let i = 0; i < 4; i++) {
//       const ny = y + dy[i];
//       const nx = x + dx[i];

//       // 6.
//       if (ny >= 0 && nx >= 0 && ny < row && nx < col) {
//         // 7.
//         if (maps[ny][nx] === 1 && visitCount[ny][nx] === 1) {
//           visitCount[ny][nx] = visitCount[y][x] + 1;
//           queue.push([ny, nx]);
//         }
//       }
//     }
//   }

//   return visitCount[row - 1][col - 1] === 1 ? -1 : visitCount[row - 1][col - 1];
// }
