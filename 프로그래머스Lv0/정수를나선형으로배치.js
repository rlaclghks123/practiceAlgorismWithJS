function solution(n) {
  // 처음  n*n개의 map을 만들어 줍니다.
  let map = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

  // 시작점을 담을 x,y 변수를 만들어줍니다. 전위 증감연산자를 사용할 예정이므로 -1을 초기값으로 설정합니다.
  let [x, y] = [0, -1];

  // 최대값과, 채워넣을 값을 변수로 담아줍니다.
  let [max, temp] = [n, 0];

  // 총 길이를 담아줍니다.
  let len = Math.ceil(n / 2);

  while (len-- > 0) {
    for (let i = 0; i < max; i++) map[x][++y] = ++temp; // 위쪽
    for (let i = 0; i < max - 1; i++) map[++x][y] = ++temp; // 오른쪽
    for (let i = 0; i < max - 1; i++) map[x][--y] = ++temp; // 아래쪽
    for (let i = 0; i < max - 2; i++) map[--x][y] = ++temp; // 왼쪽

    // 좌우 1개씩 채웠기 때문에 -2를 해줍니다.
    max -= 2;
  }

  return map;
}
