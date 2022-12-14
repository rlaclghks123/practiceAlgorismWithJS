function solution(numbers) {
  var answer = [];

  // 입력받은 numbers를 돌면서 2배 해준값을 answer에 담아준다.
  numbers.map((number) => {
    answer.push(number * 2);
  });

  return answer;
}

solution([1, 2, 100, -99, 1, 2, 3]);
//[(2, 4, 200, -198, 2, 4, 6)];
