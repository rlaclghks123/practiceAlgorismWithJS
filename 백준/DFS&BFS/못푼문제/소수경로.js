// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on('line', function (line) {
//   input.push(line.split(' ')); // 문자열을 끊어 정수로 변환후 배열로 반환
// }).on('close', function () {
//   ////////
//   ///////
//   ///////

//   // 상하좌우 이동하기 위해 위치를 저장해준다.
//   let dx = [0, 0, 1, -1];
//   let dy = [1, -1, 0, 0];

//   // t을 구해줍니다.
//   let t = +input.shift();

//   while (t--) {
//     // start, end를 구해줍니다,
//     let [start, end] = input.shift();

//     // 방문처리, 최소방문 횟수를 위해 d 배열을 만들어줍니다.
//     const d = Array.from({ length: 10000 }, () => -1);

//     // q에 start를 담아주고 방문처리를 해줍니다.
//     let q = [start];
//     d[start] = 0;

//     //bfs처리를 해줍니다.
//     while (q.length) {
//       let cur = q.shift();

//       // 4자리이므로 0~4 index를 찾아주고, 0~9까지의 수가 들어갈 수 있기 떄문에 2중 for문을 통해 change 함수에 인자로 넘겨줍니다.
//       for (let i = 0; i < 4; i++) {
//         for (let j = 0; j <= 9; j++) {
//           let newNumber = change(cur, i, j);

//           // -1이 아니면서(4자리 이면서) 방문한적이 없고, 소수라면 q에 담아주고, 방문횟수를 늘려줍니다.
//           if (newNumber !== -1 && d[newNumber] === -1 && isPrime(newNumber)) {
//             q.push(newNumber);
//             d[newNumber] = d[cur] + 1;
//           }
//         }
//       }
//     }
//     console.log(d[end]);
//     function change(cur, index, digit) {
//       // 만약 index, digit가 0이면 4자리수가 안되기 떄문에 -1을 return 합니다.
//       if (index === 0 && digit === 0) return -1;

//       // 인자로 받은 index번째 값을 digit으로 바꾼 문자열을 return 해줍니다.
//       let temp = [...cur];
//       temp[index] = digit;
//       return temp.join('');
//     }
//   }

//   function isPrime(n) {
//     if (n === 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i == 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// });

// 3
// 1033 8179
// 1373 8017
// 1033 1033

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

  let t = +input.shift();

  while (t--) {
    let [start, end] = input.shift();

    const d = Array.from({ length: 10000 }, () => 0);

    let q = [start];
    d[start] = 1;

    while (q.length) {
      let cur = q.shift();

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j <= 9; j++) {
          let newNumber = change(cur, i, j);

          if (newNumber !== -1 && d[newNumber] === 0 && isPrime(newNumber)) {
            q.push(newNumber);
            d[newNumber] = d[cur] + 1;
          }
        }
      }
    }
    console.log(d[end] - 1);
    function change(cur, index, digit) {
      if (index === 0 && digit === 0) return -1;

      let temp = [...cur];
      temp[index] = digit;
      return temp.join('');
    }
  }

  function isPrime(n) {
    if (n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
});
