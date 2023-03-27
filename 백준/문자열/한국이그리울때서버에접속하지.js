// //////////////
// //////////////

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on('line', function (line) {
//   input.push(line.split(' '));
// }).on('close', function () {
//   ////////
//   ///////
//   ///////

//   // t를 찾아줍니다
//   let t = +input.shift();

//   // s,e를 *를 기준으로 split 해줍니다.
//   let [s, e] = input.shift().join('').split('*');

//   for (let i = 0; i < t; i++) {
//     let str = input.shift().join('');

//     // str을 substring을 통해 문자를 찾아줍니다.
//     let front = str.substring(0, s.length);
//     let back = str.substring(str.length - e.length);

//     // s,e의 길이합이 str의 길이보다 크다면 NE 출력
//     if (str.length < s.length + e.length) {
//       console.log('NE');
//     }
//     // s와 front가 같고, e,back이 같다면 DA 출력
//     else if (s === front && e === back) {
//       console.log('DA');
//     }
//     // 나머지는 NE 출력
//     else {
//       console.log('NE');
//     }
//   }
// });

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

  // 다른사람의 코드
  // *가 있다면 .을 찍어서 *앞에 있는 모든 문자들을 들어오게 만들어줍니다.
  const r = new RegExp(input[1].join('').replace('*', '.*'));
  for (let i = 2; i < input.length; i++) {
    // 입력받는 문자열을 정규표현식으로 체크를 한뒤, ''로 바꿔줍니다. 만약 바껴서 '' 이 된다면 DA, 아니면 NE를 출력
    console.log(input[i].join('').replace(r, '') === '' ? 'DA' : 'NE');
  }
});
