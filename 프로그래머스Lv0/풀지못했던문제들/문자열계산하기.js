// my_string의 문자열의 수식을 계산한 값을 return
// 연산자는 +, - 만 존재한다.

// function solution(my_string) {
//   // 1. 문자열을 " "을 기준으로 나눠준다.
//   const splited = my_string.split(' ');
//   let answer = Number(splited[0]);

//   // 2. splited배열을 돌면서 +인경우 더하고, -인경우 빼준다. 단 0번째 값은 초기값으로 넣어주고, 1번째부터 계산을 해준다.
//   splited.forEach((item, index) => {
//     if (item === '+') {
//       answer += Number(splited[index + 1]);
//     } else if (item === '-') {
//       answer -= Number(splited[index + 1]);
//     }
//   });

//   return answer;
// }

// 틀린이유 : 문자열을 다루는 기술이 부족했던것 같다.
// 다시풀기
function solution(my_string) {
  const split = my_string.split(' ');
  let answer = Number(split[0]);

  split.forEach((item, i) => {
    if (item === '+') {
      answer += Number(split[i + 1]);
    } else if (item === '-') {
      answer -= Number(split[i + 1]);
    }
  });
  console.log(answer);
  return answer;
}

solution('3 + 4'); //7

solution('5 - 3'); // 2

solution('5 - 3 + 2'); // 4

// 2번통과
