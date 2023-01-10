// 3명의 정수 번호를 더했을때 0이되면 3명을 삼총사 라고 한다.
// number를 통해 삼총사를 만들 수 있는 방법의 수를 return

function solution(number) {
  let count = 0;
  // 1. numbers를 돌면서 합이 0이 되는 경우를 세준다.
  // number의 범위가 13이라  3중 for문의 시간복잡도 n^3 => 13*13*13  = 2197로 사용
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          count++;
        }
      }
    }
  }
  return count;
}

solution([-2, 3, 0, 2, -5]); //2

solution([-3, -2, -1, 0, 1, 2, 3]); // 5

solution([-1, 1, -1, 1]); // 0
