// 1. goal을 순회하면서 확인한다.
// 1-1 goal의 i번째 값과 cards1의 0번째 값이 같다면 cards1의 첫번째 값을 제거
// 1-2 goal의 i번째 값과 cards2의 0번째 값이 같다면 cards2의 첫번째 값을 제거
// 1-3 위의 2가지 경우가 아니라면 No를 return 한다.
// 2. goal을 순회하면서 return한적이 없다면 Yes를 return한다.

function solution(cards1, cards2, goal) {
  let answer = 'Yes';

  goal.forEach((item) => {
    if (cards1[0] === item) cards1.shift();
    else if (cards2[0] === item) cards2.shift();
    else answer = 'No';
  });

  return answer;
}
