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

  // n,l,r을 찾아줍니다.
  let [n, l, r] = input.shift().map(Number);

  // map을 그려줍니다.
  const map = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map[i][j] = +input[i][j];
    }
  }

  while (true) {
    // 방문처리를 위해 Visted와, 인구이동이 가능한지 확인하기 위해 flag를 만들어줍니다.
    const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
    let flag = false;

    // 반복문을 통해 방문한적이 없는 좌표는 다 방문해줍니다.
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
          // q에 좌표를 담아주고, 기록을 남겨주고, count, 총 인원수, 방문처리를 해줍니다.
          let q = [[i, j]];
          let record = [[i, j]];
          let cnt = 1;
          let sumPopulation = map[i][j];
          visited[i][j] = true;

          while (q.length) {
            let [x, y] = q.shift();

            for (let i = 0; i < 4; i++) {
              let [nx, ny] = [x + dx[i], y + dy[i]];

              if (0 <= nx && nx < n && ny >= 0 && ny < n) {
                // 붙어있는 2개의 나라의 인구차이를 구해줍니다.
                let minus = Math.abs(map[nx][ny] - map[x][y]);
                // 방문한적 없으면서 인구차이가 범위내에 있다면
                if (l <= minus && minus <= r && !visited[nx][ny]) {
                  // 방문처리, count, 기록, 인구이동이 가능한지 여부, 인구수 총 합을 구해줍니다.
                  visited[nx][ny] = true;
                  cnt++;
                  record.push([nx, ny]);
                  q.push([nx, ny]);
                  sumPopulation += map[nx][ny];
                  flag = true;
                }
              }
            }
          }

          // 총인구수 / 이동가능한 나라를 버림을 통해 나눠줍니다.
          let newPopulation = Math.floor(sumPopulation / cnt);

          // 계산한 인구이동 완료한 인구를 map에 초기화해줍니다.
          for (let [x, y] of record) {
            map[x][y] = newPopulation;
          }
        }
      }
    }
    // 인구이동이 안된다면 멈춰주고, 횟수를 +1회 해줍니다.
    if (!flag) break;
    ans++;
  }

  console.log(ans);
});

// 2 20 50
// 50 30
// 20 40
