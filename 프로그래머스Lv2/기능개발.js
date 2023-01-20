// 뒤에있는 기능이 먼저 개발되어도 앞에있는 기능이 배포될때 함께 배포됩니다.
// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때
// 각 배포마다 몇 개의 기능이 배포되는지를 return

function solution(progresses, speeds) {
  var answer = [];
  let stack = [];
  let count = 0;

  progresses.forEach((item, i) => {
    const temp = Math.ceil((100 - item) / speeds[i]);

    if (stack.length === 0) stack.push(temp);
    else if (stack[stack.length - 1] >= temp) {
      count++;
    } else {
      count++;
      answer.push(count);
      stack = [temp];
      count = 0;
    }
  });
  if (stack.length !== 0) {
    answer.push(count + 1);
  }

  return answer;
}

solution([93, 30, 55], [1, 30, 5]); //	[2, 1]

solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]); //	[1, 3, 2]

// 다른사람 코드
// days에 배포일을 다 담아두고, 돌면서 비교하여 구해줬다.

// function solution(progresses, speeds) {
//   let answer = [0];
//   let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
//   let maxDay = days[0];

//   for (let i = 0, j = 0; i < days.length; i++) {
//     if (days[i] <= maxDay) {
//       answer[j] += 1;
//     } else {
//       maxDay = days[i];
//       answer[++j] = 1;
//     }
//   }

//   return answer;
// }
