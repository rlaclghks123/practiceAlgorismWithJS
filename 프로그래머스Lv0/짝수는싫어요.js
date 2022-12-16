function solution(n) {
  var answer = [];
  //n 이하의 홀수가 오름차순으로 담긴 배열을 return
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) answer.push(i);
  }

  return answer;
}

solution(10); // [(1, 3, 5, 7, 9)];

solution(15); // [(1, 3, 5, 7, 9, 11, 13, 15)];
