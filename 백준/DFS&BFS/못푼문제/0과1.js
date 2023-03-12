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

  // // t 을 구해줍니다.
  let t = +input.shift();

  for (let i = 0; i < t; i++) {
    // 시작값을 찾아줍니다.
    let start = +input[i].shift();

    const max = 20000;
    let map = new Map();
    let visited = Array.from({ length: max }, () => false);
    let parent = Array.from({ length: max }, () => 0);
    // 처음값은 1부터 시작
    let ans = '1';

    // bfs를 통해 parent, map, visitied에 값을 담아줍니다.
    bfs();

    // 마지막은 0으로 끝나기 때문에 0을 인자로 전달해줍니다.
    print(0);
    console.log(ans);

    function bfs() {
      // 1부터 시작
      let q = [1];
      visited[1] = true;
      // 1의 부모값은 없기 때문에 -1로 초기화해줍니다.
      parent[1] = -1;
      map.set(1, '1');

      while (q.length) {
        let cur = q.shift();

        // 다음값이 10 , 11이고, mod를 통해 오버플로우를 방지
        let next = [(cur * 10) % start, (cur * 10 + 1) % start];

        for (let i = 0; i < 2; ++i) {
          if (visited[next[i]]) continue;

          // map에 새로운 next[i]의 값을 '0' 또는 '1'로 담아줍니다.
          map.set(next[i], Number(i).toString());
          parent[next[i]] = cur;

          // 만약 나눠떨어진다면 종료해줍니다.
          if (next[i] === 0) return;
          visited[next[i]] = true;
          q.push(next[i]);
        }
      }
    }

    // -1 즉 루트값이 나온다면 종료해줍니다.
    function print(idx) {
      if (parent[idx] === -1) return;

      // print를 재귀를 통해 값을 찾아주고, map에 담아둔 값을 ans에 담아줍니다.
      print(parent[idx]);
      ans += map.get(idx);
    }
  }
});

// 6
// 17
// 11011
// 17
// 999
// 125
// 173
