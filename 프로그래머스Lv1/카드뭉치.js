function solution(cards1, cards2, goal) {
  let ans = 'Yes';

  // goal을 돌면서 cards1 또는 cards2에 값이 존재한다면 각각의 cards에서 제거해준다.
  // 만약 cards1, cards2에 값이 존재하지 않는다면 ans를 No로 바꿔 출력한다.
  goal.forEach((item) => {
    if (cards1[0] === item) cards1.shift();
    else if (cards2[0] === item) cards2.shift();
    else ans = 'No';
  });

  return ans;
}
