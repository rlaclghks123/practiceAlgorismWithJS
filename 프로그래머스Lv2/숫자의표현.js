// n을 연속된 자연수들로 표현하는 방법의 수를 return

function solution(n) {
  var answer = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i + 1; j <= n; j++) {
      sum += j;
      if (sum >= n) break;
      if (sum > n) continue;
    }
    if (sum === n) {
      answer++;
    }
    if (sum > n) continue;
  }
  console.log(answer);
  return answer;
}

solution(15); //  4

// 다른사람의 풀이
// 홀수의 약수의 개수를 구해줬다.

// function expressions(num) {
//   var answer = 0;

//   for (var i = 1; i <= num; i++) {
//     if (num % i == 0 && i % 2 == 1) answer++;
//   }
//   return answer;
// }

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && n % 2 === 1) {
      answer++;
    }
  }
  console.log(answer);
  return answer;
}
