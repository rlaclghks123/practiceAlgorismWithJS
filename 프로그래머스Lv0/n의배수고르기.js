// numList에서 n의 배수가 아닌 수들을 제거한 배열을 return

function solution(n, numlist) {
  var answer = [];

  // 1. numList의 모든 요소를 반복하여 확인한다.

  numlist.forEach((num) => {
    // 2. numList의 요소중 n의 배수인 경우만 answer 배열에 담아준다.
    if (num % n === 0) {
      answer.push(num);
    }
  });

  // 3. answer 배열을 출력한다.
  return answer;
}

solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])[(6, 9, 12)];

solution(5, [1, 9, 3, 10, 13, 5]); //[10, 5];

solution(12, [2, 100, 120, 600, 12, 12]); // [(120, 600, 12, 12)];
