// X, Y의 임의의 자리에서 공통으로 나타내는 정수들을 이용해 가장 큰 정수를 두 수의 짝궁
// 짝궁이 존재하지 않으면 짝궁은 -1
// 짝궁이 0으로만 구성되어 있다면 짝궁은 0
// 두 수의 짝궁을 return

// 틀린 이유 : 시간 초과에 의해 풀지못함
// 다른사람 코드 : map을 활용해서, map에 값이 있는지 없는지 확인을 했다.
// x<=y

// function solution(x, y) {
//   let result = '';
//   const map = new Map();

//   // 1. 더 긴 y를 map에 담아준다.
//   for (let i = 0; i < y.length; i++) {
//     map.set(y[i], (map.get(y[i]) || 0) + 1);
//   }

//   // 2. 짧은 x를 돌면서 map의 value값이 1 이상인 경우(y에 존재하는 경우) -1을 해주고 result에 담아준다.
//   for (let i = 0; i < x.length; i++) {
//     if (map.get(x[i]) >= 1) {
//       map.set(x[i], (map.get(x[i]) || 0) - 1);
//       result += x[i];
//     }
//   }

//   // 3. result에 아무것도 담기지 않았다면 -1을 return
//   if (result.length < 1) return '-1';

//   // 4. +를 통해 숫자로 바꾼뒤, 0이면 '0'을 return +를 해주는 이유는 '00' =>0으로 바꿔줌
//   return +result === 0
//     ? '0'
//     : // 5. 내림차순을 통해 가장 큰수로 바꿔준뒤, return 한다.
//       result
//         .split('')
//         .sort((a, b) => b - a)
//         .join('');
// }

solution('100', '2345'); // 	"-1"
solution('100', '200'); // 	"0"
solution('100', '123450'); // 	"10"
solution('12321', '42531'); //  "321"
solution('5525', '1255'); // "552"
