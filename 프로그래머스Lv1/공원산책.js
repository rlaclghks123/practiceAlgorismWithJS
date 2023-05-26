function solution(park, routes) {
  let [sx, sy] = [0, 0];
  // 범위를 벗어나는지 확인하기 위해 최대값을 찾아줍니다.
  let [max_n, max_m] = [park.length, park[0].length];

  // 동,서,남,북에 따라 이동할 좌표를 객체에 담아줍니다.
  let indicator = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };

  // map을 만들어주고, 시작위치를 sx,sy에 담아줍니다.
  let map = park.map((col, i) =>
    [...col].map((row, j) => {
      if (row === 'S') [sx, sy] = [i, j];
      return row;
    })
  );

  // routes를 돌면서 움직일수 있는지, 없는지 확인한뒤, 이동가능하면 이동한값을, 불가능하면 이동전 값을 출력해줍니다.
  routes.forEach((item) => {
    let [op, n] = item.split(' ');

    if (op === 'E') [sx, sy] = check(op, n, sx, sy);
    if (op === 'W') [sx, sy] = check(op, n, sx, sy);
    if (op === 'S') [sx, sy] = check(op, n, sx, sy);
    if (op === 'N') [sx, sy] = check(op, n, sx, sy);
  });
  return [sx, sy];

  // 이동가능한지, 이동이 불가능한지 확인하는 함수로, 범위에 벗어나거나, 장애물을 만나면 이동전값을, 그외의 경우 이동한값을 return 해줍니다.
  function check(dir, n, sx, sy) {
    let [tx, ty] = [sx, sy];
    for (let i = 0; i < n; i++) {
      [tx, ty] = [tx + indicator[dir][0], ty + indicator[dir][1]];
      if (tx < 0 || tx >= max_n || ty < 0 || ty >= max_m || map[tx][ty] === 'X') return [sx, sy];
    }
    return [tx, ty];
  }
}
