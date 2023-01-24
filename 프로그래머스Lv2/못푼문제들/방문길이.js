// 처음 이동해본 길의 거리를 return
function solution(dirs) {
  // 이동할 방향의 좌표를 move객체에 담아줍니다.
  const move = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };

  // 현재 위치를 초기화 해줍니다.
  let cur = [0, 0];

  // 지나갔던 길의 중복방지를 위해 set을 만들어 줍니다.
  const moveList = new Set();

  // dirs를 돌면서 다음 위치를 찾아줍니다. 다음 위치는 현재위치+ x = move[dir][0], y=move[dir][1] 입니다.
  for (const dir of dirs) {
    const nextX = cur[0] + move[dir][0];
    const nextY = cur[1] + move[dir][1];

    // 만약 범위를 초과하면 continue;
    if (nextX > 5 || nextX < -5 || nextY > 5 || nextY < -5) continue;

    // A에서 B로 이동한값을 set에 담아줍니다. 현재위치다음위치
    // 단 A에서 B와 B에서 A를 같다고 하기 위해 다음위치현재위치 또한 담아줍니다.
    moveList.add(`${cur[0]}${cur[1]}${nextX}${nextY}`);
    moveList.add(`${nextX}${nextY}${cur[0]}${cur[1]}`);

    // 현재 위치를 다음위치로 초기화 해줍니다.
    cur = [nextX, nextY];
  }

  // 총 set의 크기의 /2를 해줍니다.
  return moveList.size / 2;
}

solution('ULURRDLLU'); // 7
solution('LULLLLLLU'); // 7

function solution(dirs) {
  const move = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };
  let cur = [0, 0];
  const set = new Set();

  for (let dir of dirs) {
    let nextX = cur[0] + move[dir][0];
    let nextY = cur[1] + move[dir][1];

    if (nextX < -5 || nextX > 5 || nextY < -5 || nextY > 5) continue;

    set.add(`${cur[0]}${cur[1]}${nextX}${nextY}`);
    set.add(`${nextX}${nextY}${cur[0]}${cur[1]}`);
    cur = [nextX, nextY];
  }
  return set.size / 2;
}
