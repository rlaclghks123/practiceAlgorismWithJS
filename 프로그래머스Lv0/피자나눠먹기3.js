function solution(slice, n) {
  //slice : 피자조각수 (2~10조각으로 준다)
  //n : 피자를 먹는 사람의 수
  // n명의 사람이 최소 한조각 이상 먹기위해 시켜야하는 피자의 수
  var answer = 0;
  answer = Math.ceil(n / slice);

  return answer;
}
