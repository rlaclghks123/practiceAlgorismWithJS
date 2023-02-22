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
  // let dx = [0, 0, 1, -1];
  // let dy = [1, -1, 0, 0];

  // 가중치가 1인 경우, 0인경우 2가지가 있기 때문에 q를 2개 사용하거나, 덱 자료구조를 사용해야 합니다. 여기서는 덱을 사용
  // n, m을 찾아줍니다.
  const [n, m] = input.shift().map(Number);
  const max = 100001;
  const visited = Array.from({ length: max }, () => false);

  function bfs() {
    // 덱에 시작점(n)과 time(0)을 덱에 담아주고, 방문처리를 해줍니다.
    let deq = [[n, 0]];
    visited[n] = true;

    while (deq.length) {
      let [cur, time] = deq.shift();
      // 현재값이 m과 같다면 시간을 출력해줍니다.
      if (cur === m) return time;
      // 다음값을 지정해줍니다.
      for (let next of [cur * 2, cur - 1, cur + 1]) {
        // 범위내에 있으면서 방문한적 없다면
        if (!visited[next] && next >= 0 && next < max) {
          // 방문처리를 해줍니다.
          visited[next] = true;
          // 다음값이 cur*2라면 시간은 그대로, 그게아니라면 시간은 +1을 해줍니다.
          next === cur * 2 ? q.unshift([next, time]) : q.push([next, time + 1]);
        }
      }
    }
  }

  console.log(bfs());
});

// 5 17
