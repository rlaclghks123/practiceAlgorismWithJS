function solution(num_list) {
  var answer = [];
  //짝수와 홀수를 담은 배열을 출력
  let even = 0;
  let odd = 0;
  num_list.map((item) => {
    // 1. 짝수의 개수를 구한다.
    if (item % 2 === 0) even++;

    // 2. 홀수의 개수를 구한다.
    if (item % 2 === 1) odd++;
  });

  // 3. 짝수와 홀수의 개수를 answer에 담아준다.
  answer.push(even, odd);
  return answer;
}

solution([1, 2, 3, 4, 5]); // [(2, 3)]
solution([1, 3, 5, 7]); //[(0, 4)];
