// 각 부서가 신청한 금액만큼을 모두 지원 Ex) 1000원을 신청 => 정확히 1000원을 지원 적은금액 지원 X
// 부서별로 신청한 금액이 들어있는 배열 d, 예산 budget
// 최대 몇 개의 부서에 물품을 지원할 수 있는지 return

function solution(d, budget) {
  let count = 0;
  let total = budget;
  // 1. d를 오름차순으로 정렬해준다.
  d.sort((a, b) => a - b)

    // 2. 배열의 모든 요소를 작은순으로 확인하면서 budget 이하의 경우 count해준다.
    .forEach((item) => {
      if (total - item >= 0) {
        total -= item;
        count += 1;
      }
    });
  return count;
}

solution([1, 3, 2, 5, 4], 9); //	3

solution([2, 2, 3, 3], 10); // 	4

// 다른사람의 코드
// reduce를 사용해서, count값을 더해준다.

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
