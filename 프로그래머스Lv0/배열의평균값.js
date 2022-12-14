function solution(numbers) {
  var answer = 0;
  // 1.배열의 평균값을 구한다.
  numbers.map((item) => (answer += item));

  // 소수점 첫째짜리 까지 나타낸다.
  answer = (answer / numbers.length).toFixed(1);
  return answer;
}

solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);
//94.0
