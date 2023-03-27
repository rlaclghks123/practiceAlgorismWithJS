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

  // t를 찾아줍니다
  let idx = 0;
  let t = +input[idx++];

  while (t--) {
    // n을 찾아줍니다.
    let n = +input[idx++];

    let arr = [];

    // arr에 전화번호들을 담아줍니다.
    while (n--) {
      let num = input[idx++].join('');
      arr.push(num);
    }

    // 문자열이기 때문에 localCompare를 통해 정렬해줍니다.
    arr.sort((a, b) => {
      return b.localeCompare(a);
    });

    let a = check(arr);
    console.log(a ? 'NO' : 'YES');

    // arr[i]가 arr[i+1]로 시작한다면 true,  || false를 return하는 함수를 만들어줍니다.
    function check(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].startsWith(arr[i + 1])) {
          return true;
        }
      }
      return false;
    }
  }
});
