function solution(n) {
  var answer = 0;

  //모든 사람이 피자 한조각이상을 먹기 위해 필요한 피자의수
  while (n > 0) {
    n -= 7;
    answer++;
  }
  return answer;
}
solution(7); //1
solution(1); //1
solution(15); //3
