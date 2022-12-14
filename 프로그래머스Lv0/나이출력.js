function solution(age) {
  // 태어난 연도에 1살로 시작한다.
  var answer = 1;

  //2022년을 기준으로 age가 태어난 연도를 구해준다.
  const birth = 2022 - age;

  return answer + birth;
}
