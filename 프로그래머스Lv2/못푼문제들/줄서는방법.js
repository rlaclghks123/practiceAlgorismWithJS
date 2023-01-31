// n명의 사람들에게는 각각 1번부터 n번까지 번호가 매겨져 있습니다. n명이 사람을 줄을 서는 방법은 여러가지 방법이 있습니다.
// 사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, k번째 방법을 return

function solution(n, k) {
  let answer = [];
  // 1. 총 방법의 수를 구해줍니다. (factorial)
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  let factorial = arr.reduce((acc, cur) => acc * cur, 1);

  // 2. 반복문을 통해 answer에 n개를 넣기 전까지 반복해줍니다.
  while (answer.length < n) {
    // 2-1 factorial의 개수를 arr의 개수로 나눠줍니다. why? =>  현재 넣을 자리에 숫자가 입력되었을 때 다음번에 나올 수 있는 경우의 수
    // Ex) 아래 참조
    factorial = factorial / arr.length;

    // 2-2 첫번째 숫자를 찾아줍니다. answer에 arr에서 k-1을(k는 1번째 부터 시작하지만 배열은 0번째부터 이므로) factorial로 나눈 수 1개를 제거한 값을 담아줍니다.
    answer.push(...arr.splice(Math.floor((k - 1) / factorial), 1));

    // 2-3 첫번째수를 제거했으니, factorial의 개수중 몇번째인지 찾기 위해  k를 factorial로 나눈 나머지값으로 초기화해줍니다.
    k = k % factorial;
  }
  return answer;
}

// function solution(n, k) {
//   let answer = [];
//   const arr = Array.from({ length: n }, (_, i) => i + 1);
//   let factorial = arr.reduce((acc, cur) => acc * cur, 1);

//   while (answer.length < n) {
//     factorial /= arr.length;
//     answer.push(...arr.splice(Math.floor((k - 1) / factorial), 1));
//     k %= factorial;
//   }
//   return answer;
// }
solution(3, 5); //	[3,1,2]

// 2-1 예시
// arr의 길이 3, factorial은 3! => 6 따라서 6/3= 2
// [1,2,3] 1을 선택하면 2,3  2개를 통해 경우의수를 구합니다.
// [1,3,2]

// [2,1,3]  // 2개
// [2,3,1]

// [3,1,2] //2개
// [3,2,1]

// arr의 길이 4, factorial은 4! => 24 따라서 24/4= 6
// [1,2,3,4] 1을 선택하면 234, 243, 324, 342, 423, 432 총 6개의 경우의수를 구합니다.
// [1,2,4,3]
// [1,3,2,4]
// [1,3,4,2]
// [1,4,2,3]
// [1,4,3,2]

// [2,1,3,4] ...6개

// [3,1,2,4] ...6개
