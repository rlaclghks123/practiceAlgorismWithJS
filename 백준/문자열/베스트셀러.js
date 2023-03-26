//////////////
//////////////

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
  const n = +input[0];
  let map = new Map();

  // 입력받은 모든 문자열을 map에 담아줍니다.
  for (let i = 1; i <= n; i++) {
    let char = input[i].join('');
    map.set(char, (map.get(char) || 0) + 1);
  }

  let max = 0;
  let ans = [];

  // 가장 많이 등록된 문자열의 개수를 찾아줍니다.
  for (let v of map.values()) {
    max = Math.max(max, v);
  }

  // 가장 많이 등록된 개수를 가진 책 제목을 ans에 담아줍니다.
  [...map].forEach((item) => {
    let [key, v] = item;
    if (v === max) ans.push(key);
  });

  // 사전순으로 정렬을 해준뒤, 사전순으로 가장 빠른 값을 출력합니다.
  ans.sort((s1, s2) => (s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])));

  console.log(ans[0]);
});
