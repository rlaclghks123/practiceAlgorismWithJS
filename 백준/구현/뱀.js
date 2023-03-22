const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {
  ////////
  ///////
  ///////

  // n을 찾아줍니다.
  const n = +input.shift();

  // 사과의 개수를 찾아줍니다.
  const appleNumber = +input.shift();

  // map과 방문했던 방향을 담을 배열을 만들어줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  const dArr = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  const change = [];

  // 사과의 위치를 맵에 담아줍니다. 단 1,1이 아닌 0,0부터 시작하기 때문에 -1을 해줍니다.
  for (let i = 0; i < appleNumber; i++) {
    let [x, y] = input.shift().map(Number);
    map[x - 1][y - 1] = 3;
  }

  // 뱀의 방향을 찾아줍니다.
  const snakeDirNumber = +input.shift();
  // 방향을 담을 change에 담아줍니다,
  for (let i = 0; i < snakeDirNumber; i++) {
    let [changeTime, changeDir] = input.shift();
    change.push([changeTime, changeDir]);
  }

  // 0.오른쪽, /1.아래쪽, /2.왼쪽 / 3.위쪽
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];

  // 뱀은 0,0에서 시작하기 때문에 map에 담아줍니다.
  map[0][0] = 1;

  // 시작위치,끝위치,방향,시간을 인자로 재귀함수로 구현합니다.
  make(0, 0, 0, 0, 0, 1);

  function make(sx, sy, ex, ey, dir, time) {
    let [t, d] = [0, 0];

    // 바뀌는 방향을 찾아줍니다.
    change.forEach((item) => {
      [t, d] = item;
      // 현재 시간과, 바뀔 시간이 일치하면 방향을 바꿔줍니다.
      if (+t + 1 === time) {
        d === 'D' ? dir++ : dir--;
        if (dir < 0) dir = 3;
        if (dir > 3) dir = 0;
      }
    });

    // 방문했었던 방향을 담아줍니다.
    dArr[ex][ey] = dir;

    let [nx, ny] = [ex + dx[dir], ey + dy[dir]];

    // 벽을 마주하거나, 뱀의 몸에 닿는다면 시간을 찾아주고 종료합니다.
    if (nx < 0 || nx >= n || ny < 0 || ny >= n || map[nx][ny] === 1) {
      console.log(time);
      return;
    }

    // 만약 다음값이 사과라면 뱀의 몸 길이를 하나 늘려줍니다.
    if (map[nx][ny] === 3) {
      map[sx][sy] = 1;
      map[nx][ny] = 1;
      make(sx, sy, nx, ny, dir, time + 1);
    }

    // 만약 다음값이 사과가 아니라면 한칸 이동해줍니다.
    else {
      map[sx][sy] = 0;
      map[nx][ny] = 1;
      make(sx + dx[dArr[sx][sy]], sy + dy[dArr[sx][sy]], nx, ny, dir, time + 1);
    }
  }
});
