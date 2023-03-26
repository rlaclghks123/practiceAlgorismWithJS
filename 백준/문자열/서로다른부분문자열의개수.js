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

  // str을 찾아줍니다.
  const str = input[0].join('');

  // 중복을 제거하기 위해 set을 만들어줍니다.
  let set = new Set();

  // 2중 for문을 통해 모든 문자를 set에 담아줍니다.
  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      let c = str.slice(i, j);
      if (c !== '') {
        set.add(c);
      }
    }
  }
  // 중복제거된 총 문자의 개수를 출력합니다.
  console.log(set.size);
});

// ababc
