// 주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다.
// 주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
// 두 가지 중 어느 하나라도 해당된다면 무시하고 다음 명령 수행

// 1. 강아지의 현재 위치를 찾아줍니다. 'S'의 위치
// 2. routes를 순회하면서 강아지가 이동하는 경로가 이동 가능한지 확인한다.
// 2-1 이동 조건1 : 이동할 곳이 X가 아닌곳
// 2-2 이동 조건2 : 이동할 곳이 공원 범위를 벗어나지 않는 곳
// 3. 이동 가능하면 강아지를 이동시키고, 이동 불가능하면 현재위치로 고정한다.
// 4. 강아지의 최종 위치를 출력한다.

function solution(park, routes) {
  let curPosition = [-1, -1];

  park.forEach((word, i) => {
    if (word.indexOf('S') !== -1) curPosition = [i, word.indexOf('S')];
  });

  routes.forEach((item) => {
    const [op, n] = item.split(' ');
    curPosition = movePosition(op, n, park, curPosition);
  });

  return curPosition;
}

function movePosition(op, n, park, curPosition) {
  let start = [...curPosition];
  const db = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  for (let i = 0; i < n; i++) {
    const [moveX, moveY] = db[op];
    const [curX, curY] = [start[0] + moveX, start[1] + moveY];

    if (curX >= park.length || curX < 0 || curY >= park[0].length || curY < 0) return curPosition;
    if (park[curX][curY] === 'X' || park[curX][curY] === 'X') return curPosition;

    start = [curX, curY];
  }

  return start;
}
