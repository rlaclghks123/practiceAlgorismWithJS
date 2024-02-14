// bfs를 통해 문제를 풀었습니다.

// 1. 필요한 값들을 세팅합니다.
// 1-1. 동서남북 위치를 이동하기 위해 dx,dy를 만들어줍니다. 동[1,0], 서[-1,0], 남[0,-1], 북[0,1]
// 1-2. q를 통해 bfs를 진행하고, 0,0에서 시작하기 때문에 q에 [[0,0]]을 담아줍니다.
// 1-3. 맵의 최대범위인 n,m을 구해줍니다.
// 1-4. 방문처리를 위해 map크기만큼 visit을 만들어주고, 초기값을 -1로 세팅해줍니다.

// 2. 시작점인 0,0을 1로 방문처리해줍니다

// 3. bfs탐색을 시작합니다.
// 3-1. 현재 위치를 shift해줍니다.
// 3-2. 동서남북 방향으로 이동하기 위해 4번 반복해줍니다.
// 3-2-1. 현재[x,y]값에 동서남북을 이동한 값을 찾아줍니다. x+dx[i], y+dy[i]
// 3-2-2. if문을 통해 이동한 값이 범위안에 있는 경우만 처리해줍니다.
// 3-2-3. 이동한 값이 maps에서 1이면서 방문하지 않은 경우만(visit[nx][ny]===-1) 처리해줍니다.
// 3-2-4. 방문가능하다면 횟수를 증가시켜주고, q에 이동할 위치를 담아줍니다.

// 4. 원하는 위치인 n-1,m-1의 값을 출력합니다.

function solution(maps) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const q = [[0, 0]];
  const [n, m] = [maps.length, maps[0].length];
  const visit = Array.from({ length: n }, () => Array.from({ length: m }, () => -1));

  visit[0][0] = 1;

  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (maps[nx][ny] === 1 && visit[nx][ny] === -1) {
          visit[nx][ny] = visit[x][y] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }

  return visit[n - 1][m - 1];
}
