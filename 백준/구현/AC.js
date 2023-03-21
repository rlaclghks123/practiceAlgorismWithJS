AGGREMENT_BOX;
////////////////
////////////////
// 나의풀이

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

  // t를 출력합니다.
  const t = +input.shift();

  for (let i = 0; i < t; i++) {
    // 입력값을 찾아줍니다.
    let str = input.shift().join('');
    let num = +input.shift().join('');
    let arr = input.shift()[0].replace('[', '').replace(']', '').split(',').map(Number);
    arr = arr.filter((item) => item !== 0);

    // 정방향인지 역방향인지, 에러가 있는지 없는지 확인하기 위해 변수를 설정해줍니다.
    let originDir = true;
    let isError = false;

    for (let j = 0; j < str.length; j++) {
      let word = str[j];

      // R인 경우
      if (word === 'R') {
        // 방향을 바꿔주고 continue;
        originDir = !originDir;
        continue;
      }
      // D인경우
      if (word === 'D') {
        // 정방향인경우
        if (originDir) {
          // 첫번째 값을 추출한뒤, 값이 없다면 에러 출력후 종료
          let del = arr.shift();
          if (del === undefined) {
            isError = true;
            break;
          }
        }

        // 역방향인경우
        if (!originDir) {
          // 마지막값을 추출한뒤, 값이 없다면 에러 출력후 종료
          let del = arr.pop();
          if (del === undefined) {
            isError = true;
            break;
          }
        }
      }
    }
    // 남은값들을 문자열로 출력해줍니다.
    print(arr, originDir, isError);
  }

  function print(arr, originDir, isError) {
    if (arr.length === 0) {
      isError ? console.log('error') : console.log('[]');
      return;
    }

    let ans = '[';

    if (originDir) {
      for (let i = 0; i < arr.length; i++) {
        i === arr.length - 1 ? (ans += arr[i]) : (ans += arr[i] + ',');
      }
    } else {
      for (let i = arr.length - 1; i >= 0; i--) {
        i === 0 ? (ans += arr[i]) : (ans += arr[i] + ',');
      }
    }
    console.log(ans + ']');
  }
});

// 4
// RDD
// 4
// [1,2,3,4]
// DD
// 1
// [42]
// RRD
// 6
// [1,1,2,3,5,8]
// D
// 0
// []
