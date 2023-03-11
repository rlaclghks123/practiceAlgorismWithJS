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
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  // // n,m, k를 구해줍니다.
  let [n, m] = input.shift().map(Number);

  // map을 만들어줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: m }, () => ''));

  // x,y 는 첫번쨰 동전의 위치, x2,y2는 두번쨰 동전의 위치
  let [x, y, x2, y2] = [-1, -1, -1, -1];

  for (let i = 0; i < n; i++) {
    let temp = input[i].join('');
    for (let j = 0; j < m; j++) {
      map[i][j] = temp[j];
      // 동전이면서 처음인 경우는 x,y에 담아주고, 동전이면서 처음이 아닌경우는 두번째 동전 x2,y2에 담아줍니다.
      if (map[i][j] === 'o') {
        if (x === -1) {
          x = i;
          y = j;
        } else {
          x2 = i;
          y2 = j;
        }
        // 동전을 찾았으면 벽으로 바꿔줍니다.
        map[i][j] = '.';
      }
    }
  }
  // go함수를 실행해줍니다.
  console.log(go(x, y, x2, y2, 0));

  function go(x, y, x2, y2, step) {
    // 문제 조건에 따라 10번보다 많이 누르면 -1을 출력
    if (step >= 11) return -1;

    // fall은 첫번째 동전이 떨어진걸 확인하기 위함이며, fall2는 두번째 동전이 떨어진걸 확인하기 위함
    let fall = false;
    let fall2 = false;

    // 첫번째 동전의 위치(x,y)가 범위 밖에있다면 fall을 true로
    if (x < 0 || x >= n || y < 0 || y >= m) fall = true;

    // 두번째 동전의 위치(x2,y2)가 범위 밖에있다면 fall2을 true로
    if (x2 < 0 || x2 >= n || y2 < 0 || y2 >= m) fall2 = true;

    // 두개 다 떨어진다면 -1을 출력해주고,  한개만 떨어진다면 step을 출력해줍니다.
    if (fall && fall2) return -1;
    if (fall || fall2) return step;
    let ans = -1;

    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [x + dx[i], y + dy[i]];
      let [nx2, ny2] = [x2 + dx[i], y2 + dy[i]];

      // 다음값이 범위내에 있으면서 벽인경우 다음값은 현재위치(움직이지 않기 때문)
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && map[nx][ny] === '#') {
        nx = x;
        ny = y;
      }

      // 다음값이 범위내에 있으면서 벽인경우 다음값은 현재위치(움직이지 않기 때문)
      if (nx2 >= 0 && nx2 < n && ny2 >= 0 && ny2 < m && map[nx2][ny2] === '#') {
        nx2 = x2;
        ny2 = y2;
      }

      // 재귀를 통해 값을 찾아줍니다.
      let temp = go(nx, ny, nx2, ny2, step + 1);

      // -1이면 건너뛰고 최소값을 찾아 출력해줍니다.
      if (temp === -1) continue;
      if (ans === -1 || ans > temp) ans = temp;
    }
    return ans;
  }
});

// o: 동전
// .: 빈 칸
// #: 벽

// 6 2
// .#
// .#
// .#
// o#
// o#
// ##
