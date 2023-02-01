// 대기실은 5개이며, 각 대기실은 5x5입니다.
// 맨해튼 거리가 2 이하로 앉지 말아주세요
// 맨해튼 거리 : (r1, c1), (r2, c2)에 각각 위치하고 있다면, T1, T2 사이의 맨해튼 거리는
// |r1 - r2| + |c1 - c2|
// 단 응시자가 앉아있는 자리 사이가 파티션으로 막혀 있다면 허용
// 응시자가 앉아있는 자리는 P,
// 빈테이블 O
// 파티션 X
// 각 대기실별로 거리두기를 지키고 있으면 1, 한명이라도 지켜지지 않는다면 0을 return

function solution(places) {
  let answer = [];
  // 1. places를 돌면서 각 문자열을 배열로 바꾼뒤, 2차배열을 bfs로 구해 answer에 담아준다.
  places.forEach((item) => {
    const map = item.map((v) => v.split(''));
    answer.push(bfs(map));
  });
  return answer;
}

function bfs(map) {
  // 2. bfs를 통해 이동할 상하좌우 방향을 정해준다.
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  // 3. q를 만들고, map에서 'P'인 경우를 큐에 담아준다.
  let q = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (map[i][j] === 'P') {
        q.push([i, j]);
      }
    }
  }

  // 4. dfs를 통해 상하좌우 이동해준다.
  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      // 4-1 범위를 지정해준다.
      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        // 4-2 만약 다음값이 'X'인 경우 넘긴다
        if (map[nx][ny] === 'X') continue;
        // 4-3 만약 다음값이 'P' 인 경우 0을 Return 한다.
        if (map[nx][ny] === 'P') return 0;

        // 5 1칸 더 움직여준다.
        for (let j = 0; j < 4; j++) {
          let kx = nx + dx[j];
          let ky = ny + dy[j];

          // 5-1 범위를 지정해준다.
          if (0 <= kx && kx < 5 && kx >= 0 && kx < 5) {
            // 5-2 만약 다음값이 이전 시작지점인 경우 넘겨준다.
            if (kx === x && ky === y) continue;

            // 5-3 만약 P인 경우 0을 return
            if (map[kx][ky] === 'P') return 0;
          }
        }
      }
    }
  }
  // bfs를 다 돌고난 뒤 0이 아닌경우 1을 return
  return 1;
}

solution([
  ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
  ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
  ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
  ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
]); // [1, 0, 1, 1, 1]
