// 문자열을 왼쪽부터 읽으면서 첫글자와 다른 글자들이 나온 횟수를 셉니다.
// 처음으로 첫글자의 개수 === 첫글자가 아닌 개수 인 경우 이때 문자열을 분리
// 분리한 부분을 제외한 나머지 부분을 반복 남은 부분이 없다면 종료
// 만약 더이상 읽을 글자가 없는경우 분해후 종료
// 문자열을 분해하고, 분해한 문자열의 개수를 return

// function solution(s) {
//   let front = 0;
//   let back = 0;
//   let arr = [];

//   // s의 길이가 0보다 크면 반복해준다. s를 slice해주고 반복하기 위해 while문 사용
//   while (s.length > 0) {
//     let count = 0;

//     // s를 길이만큼 반복하여 준다.
//     for (let i = 0; i < s.length; i++) {
//       // 처음값과 같으면 front, 다르면 back에 +1을 해준다.
//       s[0] === s[i] ? front++ : back++;

//       // 만약 처음값과 처음값과 다른값의 개수가 같다면
//       if (front === back) {
//         // i값에 +1을 해준다. i값까지 slice해주기 위해 +1을 해준뒤 break로 종료해준다.
//         count = i;
//         break;
//       }
//     }

//     // arr에 0부터 count까지 자른 값을 담아주고, slice(count)를 통해 slice를 자르고 난 다음부터 시작으로 바꿔준다.
//     arr.push(s.slice(0, count));
//     s = s.slice(count);
//     // 만약 for 반복문을 통해 다 돌았음에도 count가 없다면 break 한다.
//     if (count === 0) break;
//   }

//   // 배열의 길이(자른 문자열의 개수)를 구해준다.
//   return arr.length;
// }

function solution(s) {
  var answer = [];
  let front = 0;
  let back = 0;

  while (s.length > 0) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      s[0] === s[i] ? front++ : back++;

      if (front === back) {
        count = i + 1;
        break;
      }
    }
    answer.push(s.slice(0, count));
    s = s.slice(count);
    if (count === 0) break;
  }

  return answer.length;
}

solution('banana'); // 3

solution('abracadabra'); // 6

solution('aaabbacc ccabba'); // 3
