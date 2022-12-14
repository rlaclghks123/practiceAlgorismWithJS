function solution(numbers, num1, num2) {
  var answer = [];

  // numbers를 num1번째 부터 num2 번째까지 배열 자르기
  answer = numbers.slice(num1, num2 + 1);
  return answer;
}

solution([1, 2, 3, 4, 5], 1, 3); //[2, 3, 4]
solution([1, 3, 5], 1, 2); //[(3, 5)];
