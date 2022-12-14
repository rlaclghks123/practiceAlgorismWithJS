function solution(array, height) {
  var answer = 0;
  // array를 돌면서 머쓱이보다 키큰사람이 몇명인지 더해준다.
  array.map((tall) => {
    if (tall > height) answer++;
  });

  return answer;
}

solution([149, 180, 192, 170], 167);
//3
