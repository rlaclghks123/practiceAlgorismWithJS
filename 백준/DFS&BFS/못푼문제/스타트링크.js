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
  // F층으로 이루어진 고층 건물
  // 스타트링크가 있는 곳의 위치는 G층이다.
  // 강호가 지금 있는 곳은 S층
  // U버튼은 위로 U층을 가는 버튼, D버튼은 아래로 D층을 가는 버튼이다. (만약, U층 위, 또는 D층 아래에 해당하는 층이 없을 때는, 엘리베이터는 움직이지 않는다)
  // 강호가 G층에 도착하려면, 버튼을 적어도 몇 번 눌러야 하는지 구하는 프로그램을 작성하시오. 만약, 엘리베이터를 이용해서 G층에 갈 수 없다면, "use the stairs"를

  // 상하좌우 이동하기 위해 위치를 저장해준다.
  // let dx = [0, 0, 1, -1];
  // let dy = [1, -1, 0, 0];

  // 첫째 줄에 F, S, G, U, D를 가져옵니다.
  const [F, S, G, U, D] = input.shift().map(Number);

  // 횟수를 담을 배열을 만들어 줍니다.
  let d = Array.from({ length: F + 1 }, () => 0);

  // BFS를 돌면서 count를 해줍니다.
  console.log(BFS(F, S, G, U, D));

  function BFS(F, S, G, U, D) {
    // start 지점을 q에 담아주고, 방문처리를 해준다.
    let q = [S];
    d[S] = 1;

    while (q.length) {
      let x = q.shift();

      /// x가 목적지인 G와 같다면 d[G]-1을 출력
      if (x === G) return d[G] - 1;

      // 현재위치에서 U을 눌렀을때 F보다 작거나 같고, 방문한적 없다면 q에 담아주고, +1 해준다.
      if (x + U <= F && d[x + U] === 0) {
        d[x + U] = d[x] + 1;
        q.push(x + U);
      }

      // 현재위치에서 D를 눌렀을때 0보다 크고, 방문한적 없다면 q에 담아주고, +1 해준다.
      if (x - D > 0 && d[x - D] === 0) {
        d[x - D] = d[x] + 1;
        q.push(x - D);
      }
    }
    // 목적지인 G에 도달하지 못한다면 use the stiars를 출력해준다.
    return 'use the stairs';
  }
});
