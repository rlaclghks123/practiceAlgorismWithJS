// // // 사과는 상태에 따라 1점~k점까지 있으며 k점이 최상품, 1점이 최하품
// // // 사과 한장자 가격은 사과는 m개씩 담으며, p(가장낮은점수) * m
// // // 가능한 많은 사과를 팔때, 얻을 수 있는 최대 이익을 계산(상자 단위 판매, 남는사과 버림)

// // // 사과 최대점수 k
// // // 한 상자에 들어가는 사과의 수 m
// // // 사과들의 점수 score
// // // 최대이익을 return

// // function solution(k, m, score) {
// //   var answer = [];
// //   // 1. score를 내림차순으로 정렬한다.
// //   score.sort((a, b) => b - a);

// //   // 2. m개씩 나눠준다.
// //   for (let i = 0; i < score.length; i += m) {
// //     if (score.length <= m) return 0;
// //     if (score.slice(i, i + m).length === m) {
// //       answer.push(score.slice(i, i + m));
// //     }
// //   }

// //   return answer
// //     .map((item) => {
// //       let min = Math.min(...item);
// //       let len = item.length;
// //       return min * len;
// //     })
// //     .reduce((acc, cur) => acc + cur);
// // }

// solution(3, 4, [1, 2, 3, 1, 2, 3, 1]); //	8
// solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]); //33

// // 다른사람의 코드
// // 오름차순으로 정렬후, 나누어 떨어지는 값으로 slice한다.
// // 반복문을 +m만큼 해서 m과 최저값을 곱한값을 answer에 계쏙 더해준다.

// function solution(k, m, score) {
//   let answer = 0;
//   const sortedScore = score.sort((a, b) => a - b).slice(score.length % m);
//   console.log(score.length % m);

//   for (let i = 0; i < sortedScore.length; i += m) {
//     answer += sortedScore[i] * m;
//   }
//   return answer;
// }

function solution(k, m, score) {
  var answer = 0;
  score = score.sort((a, b) => a - b).slice(score.length % m);

  for (let i = 0; i < score.length; i += m) {
    answer += score[i] * m;
  }
  console.log(answer);
  return answer;
}

solution(3, 4, [1, 2, 3, 1, 2, 3, 1]); //	8
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]); //33
