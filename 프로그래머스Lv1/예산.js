// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어진다.
// 최대 몇 개의 부서에 물품을 지원할 수 있는지 출력
// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다.

// 1. 금액이 들어있는 배열 d를 오름차순으로 정렬한다. -> 최소금액부터 여러개 담아야 최대를 담을 수 있으므로
// 2. 예산에서 배열 d의 개수만큼 빼주면서 뺀 개수를 count 한다.

function solution(d, budget) {
  const sorted = d.sort((a, b) => a - b);
  let cnt = 0;

  sorted.forEach((num) => {
    if (budget - num >= 0) {
      budget -= num;
      cnt += 1;
    }
  });

  return cnt;
}
