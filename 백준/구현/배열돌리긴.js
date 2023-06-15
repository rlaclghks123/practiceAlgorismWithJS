// const fs = require('fs');
// // // TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
// const input = fs.readFileSync('test.txt').toString().trim().split('\n');

// let [n, m, r] = input.shift().split(' ').map(Number);
// const map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

// // map을 만들어줍니다.
// for (let i = 0; i < n; i++) {
//   let temp = input[i].split(' ').map(Number);

//   for (let j = 0; j < m; j++) {
//     map[i][j] = temp[j];
//   }
// }

// // r만큼 회전해줍니다.
// for (let i = 0; i < r; i++) {}
// rotate();

// function rotate() {
//   let check = Math.min(n, m) / 2; // 돌려야 할 사각형 개수

//   for (let i = 0; i < check; i++) {
//     let n_max = n - i - 1;
//     let m_max = m - i - 1;

//     let tmp = map[i][i];

//     // 위쪽 오 -> 왼
//     for (let j = i; j < m_max; j++) {
//       map[i][j] = map[i][j + 1];
//     }

//     // 오른쪽 밑 -> 위
//     for (let j = i; j < n_max; j++) {
//       map[j][m_max] = map[j + 1][m_max];
//     }

//     // 아래쪽 왼 -> 오
//     for (let j = m_max; j > i; j--) {
//       map[n_max][j] = map[n_max][j - 1];
//     }

//     // 왼쪽  위 -> 아래
//     for (let j = n_max; j > i; j--) {
//       map[j][i] = map[j - 1][i];
//     }

//     map[i + 1][i] = tmp;
//   }
// }

// for (let i = 0; i < n; i++) {
//   let temp = '';
//   for (let j = 0; j < m; j++) {
//     temp += map[i][j] + ' ';
//   }
//   console.log(temp);
// }

// // [
// //   [ 1, 2, 3, 4 ],
// //   [ 7, 8, 9, 10 ],
// //   [ 13, 14, 15, 16 ],
// //   [ 19, 20, 21, 22 ],
// //   [ 25, 26, 27, 28 ]
// // ]

function solution(s) {
  // 1. s의 길이가 1인경우 1을 출력합니다.
  if (s.length === 1) return 1;

  // 2. 압축한 문자열을 담을 배열을 생성합니다.
  let strings = [];

  // 3. for문을 돌면서 1개~ s.length/2개 까지 잘라서 압축을 해봅니다.
  for (let i = 1; i <= s.length / 2; i++) {
    // 압축을 위해 같은지 측정하는 cnt, 압축한 문자열을 넣은 string을 만들어줍니다.
    let cnt = 1;
    let string = '';

    // 4 for문을 통해 0부터 i까지 문자열을 잘라줍니다. 압축을 하는 단계
    for (let j = 0; j < s.length; j += i) {
      // 4-1 현재값은 j부터 i개, substr을 사용한 이유는 slice와 달리 첫번째 인자가 더 큰 경우 첫번쨰와 두번째 인자를 바꿔주기 때문
      let current = s.substr(j, i);
      // 4-2 다음값은 i+j부터 i개
      let next = s.substr(i + j, i);

      // 4-3 만약 현재값과 다음값이 같으면 cnt++해준다.
      if (current === next) cnt++;
      // 4-4 다르다면 string에 압축한 값을 담아주고, cnt를 초기화해줍니다.
      else {
        string = cnt > 1 ? string + cnt + current : string + current;
        cnt = 1;
      }
    }
    // i개의 문자열을 잘라서 압축한 문자열의 개수를 strings에 담아줍니다.
    strings.push(string.length);
  }
  // 5 가장 적은 문자열을 출력해줍니다.
  return Math.min(...strings);
}
