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
  input.push(line.split(' ')); // 문자열을 끊어 정수로 변환후 배열로 반환
}).on('close', function () {
  ////////
  ///////
  ///////

  // str을 찾아줍니다.
  let str = input.shift().join('');

  let ans = 0;

  // 직접적으로 c다음 = 다음 -가 있으면 i++ 이런식으로 구했다.
  for (let i = 0; i < str.length; i++) {
    let word = str[i];
    ans += word.length;
    if (word === 'c') {
      if (str[i + 1] === '=') {
        i++;
      }
      if (str[i + 1] === '-') {
        i++;
      }
    } else if (word === 'd') {
      if (str[i + 1] === 'z') {
        if (str[i + 2] === '=') {
          i += 2;
        }
      }
      if (str[i + 1] === '-') {
        i++;
      }
    } else if (word === 'l' || word === 'n') {
      if (str[i + 1] === 'j') {
        i++;
      }
    } else if (word === 's' || word === 'z') {
      if (str[i + 1] === '=') {
        i++;
      }
    } else {
    }
  }
  console.log(ans);
});

// // ljes=njak

////////////////
////////////////
// 더 좋은 다른 사람의 코드
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
  // str을 찾아줍니다.
  let str = input.shift().toString();

  // 바꿀 문자들을 배열에 담아줍니다.
  let letter = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

  let ans = 0;
  // 바꿀 문자배열의 길이만큼 반복합니다.
  for (let i = 0; i < letter.length; i++) {
    // while문을 통해 str에서 letter배열안의 값이 없을때까지 반복합니다.
    while (str !== str.replace(letter[i], '')) {
      // 바꿀 문자가 있다면  ans++해주고, 문자를 바꿔줍니다.
      ans++;
      str = str.replace(letter[i], ' ');
    }
  }
  // 바꿀문자 개수 + 원래알파벳 수를 더해서 출력해줍니다.
  console.log(ans + str.split(' ').join('').length);
});

// ljes=njak
