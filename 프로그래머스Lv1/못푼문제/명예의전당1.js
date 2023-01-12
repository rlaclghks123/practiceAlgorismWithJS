// 매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내에면 해당 가수의 점수가 명예의 전당에 올라감
// k일까지는 모든 가수의 점수가 명예의 전당에 오름
// 매일 발표된 명예의 전당의 최하위 점수를 return

// function solution(k, score) {
//   let answer = [];
//   let arr = [];

//   // 1. score배열을 돌면서 arr에 담아준다.

//   for (let i = 0; i < score.length; i++) {
//     arr.push(score[i]);

//     // 2. 내림차순으로 정렬해준다.
//     arr.sort((a, b) => b - a);

//     // 3. 만약 arr가 k의 크기만큼 꽉 찼으면 arr의 마지막요소(가장 작은값)을 answer에 담아주고 continue;
//     if (arr.length > k) {
//       answer.push(arr[k - 1]);
//       continue;
//     }

//     // 4. arr가 k의 크기만큼 차지 않았으면 peek값을(가장 작은값) answer에 담아준다
//     answer.push(arr[arr.length - 1]);
//   }

//   return answer;
// }

function solution(k, score) {
  var answer = [];
  let stack = [];

  for (let i = 0; i < score.length; i++) {
    stack.push(score[i]);
    stack.sort((a, b) => b - a);

    if (stack.length > k) {
      answer.push(stack[k - 1]);
      continue;
    }

    answer.push(stack[stack.length - 1]);
  }
  console.log(answer);
  return answer;
}

solution(3, [10, 100, 20, 150, 1, 100, 200]); // [10, 10, 10, 20, 20, 100, 100]

solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]

solution(9, [10, 30, 40, 3, 0, 20, 4]); // [10, 10, 10, 3, 0, 0, 0]
