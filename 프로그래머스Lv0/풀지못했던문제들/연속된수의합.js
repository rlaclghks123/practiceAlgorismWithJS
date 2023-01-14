// 연속된 num개를 더한값이 total이 될 때 정수배열을 오름차순으로 담아 return
// 1<= num <= 100
// 0<= total <=1000

// function solution(num, total) {
//   var answer = [];

//   // 1. num이 1부터 100까지 이므로 -100으로 초기값을 설정해준다. => 100,0 인경우
//   let start = -101;

//   // 2. num이 100까지 이므로 start가 100이 될때까지 반복한다.

//   while (start <= 100) {
//     let sum = 0;
//     // 3. start부터 num개를 반복하여 값을 더해준다.
//     for (let i = start; i < start + num; i++) {
//       sum += i;
//     }

//     // 4. 만약 total과 값이 같다면 반복문을 멈춰준다.
//     if (sum === total) {
//       break;
//     }

//     // 5. 같지않으면 start를 ++해준다.
//     start++;
//   }

//   // 6. 연속된 수를 start부터 num개를 answer 배열에 담아준다.
//   for (let i = start; i < start + num; i++) {
//     answer.push(i);
//   }

//   // 7. 출력한다.

//   return answer;
// }

function solution(num, total) {
  var answer = [];

  let start = -100;

  while (true) {
    let sum = 0;
    for (let i = start; i < start + num; i++) {
      sum += i;
    }

    if (sum === total) {
      break;
    }
    sum = 0;
    start += 1;
  }

  for (let i = start; i < start + num; i++) {
    answer.push(i);
  }
  console.log(answer);
}

solution(3, 12); // [3, 4, 5]

solution(5, 15); // [1, 2, 3, 4, 5]

solution(4, 14); //[2, 3, 4, 5]

solution(5, 5); // [-1, 0, 1, 2, 3]

solution(3, 0); // [-1, 0, 1]
