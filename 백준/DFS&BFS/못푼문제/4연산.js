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

  // start, end를 찾아줍니다.
  let [start, end] = input.shift().map(Number);

  // bfs를 통해 탐색후 출력해줍니다.
  console.log(bfs(start, end));

  function bfs(start, end) {
    // 시작과 끝이 같다면 0을 출력해줍니다.
    if (start === end) return 0;

    // 중복을 제거하기 위해 set에 담아줍니다.
    let set = new Set();

    // q에 사전순인 *, +, -, / 를 담아줍니다.
    let q = [
      { now: start * start, str: '*' },
      { now: start + start, str: '+' },
      { now: start - start, str: '-' },
      { now: 1, str: '/' },
    ];

    while (q.length) {
      let { now, str } = q.shift();

      // 만약 현재값이 end값과 같다면 str을 출력해줍니다.
      if (now === end) return str;

      // 이미 존재하는 값이면 넘어갑니다.
      if (set.has(now)) continue;

      // 존재하는값이 아니면 set에 담아줍니다.
      set.add(now);

      // *, +, - 를 담아줍니다.
      if (now * now <= end) q.push({ now: now * now, str: `${str}*` });
      if (now + now <= end) q.push({ now: now + now, str: `${str}+` });
      if (now - now >= 0) q.push({ now: now + now, str: `${str}-` });
    }

    // 위의경우가 아닌경우 -1을 출력해줍니다.
    return -1;
  }
});
