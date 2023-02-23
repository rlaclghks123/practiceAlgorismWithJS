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

  // D: D 는 n을 두 배로 바꾼다. 결과 값이 9999 보다 큰 경우에는 10000 으로 나눈 나머지를 취한다. 그 결과 값(2n mod 10000)을 레지스터에 저장한다.
  // S: S 는 n에서 1 을 뺀 결과 n-1을 레지스터에 저장한다. n이 0 이라면 9999 가 대신 레지스터에 저장된다.
  // L: L 은 n의 각 자릿수를 왼편으로 회전시켜 그 결과를 레지스터에 저장한다. 이 연산이 끝나면 레지스터에 저장된 네 자릿수는 왼편부터 d2, d3, d4, d1이 된다.
  // R: R 은 n의 각 자릿수를 오른편으로 회전시켜 그 결과를 레지스터에 저장한다. 이 연산이 끝나면 레지스터에 저장된 네 자릿수는 왼편부터 d4, d1, d2, d3이 된다.

  // 상하좌우 이동하기 위해 위치를 저장해준다.
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  // n,m을 출력해줍니다.
  let t = +input.shift();
  let ans = [];

  // T만큼 반복해서 bfs를 해줍니다.
  while (t--) {
    const [start, end] = input.shift().map(Number);
    bfs(start, end);
    console.log(ans.shift());
  }

  function bfs(start, end) {
    const max = 10000;
    let check = Array.from({ length: max }, () => false);
    check[start] = true;
    let q = [[start, '']];

    while (q.length) {
      let [cur, str] = q.shift();

      // 현재값과 end값이 같다면 ans에 담아주고 종료해줍니다.
      if (cur === end) {
        ans.push(str);
        return;
      }

      // D는 현재값을 2배로 바꿔줍니다.
      let next = (cur * 2) % 10000;
      if (!check[next]) {
        check[next] = true;
        q.push([next, str + 'D']);
      }

      // S는 0이면 9999 아니면 -1을 해줍니다.
      next = cur === 0 ? 9999 : cur - 1;
      if (!check[next]) {
        check[next] = true;
        q.push([next, str + 'S']);
      }

      // L은 맨왼쪽 값을 맨오른쪽으로 이동해줍니다.
      next = (cur % 1000) * 10 + Math.floor(cur / 1000);

      if (!check[next]) {
        check[next] = true;
        q.push([next, str + 'L']);
      }

      // R은 맨 오른쪽 값을 맨왼쪽으로 이동해줍니다.
      next = (cur % 10) * 1000 + Math.floor(cur / 10);

      if (!check[next]) {
        check[next] = true;
        q.push([next, str + 'R']);
      }
    }
  }
});

// 3
// 1234 3412
// 1000 1
// 1 16
