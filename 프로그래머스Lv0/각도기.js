function solution(angle) {
  var answer = 0;
  //예각일때 1 (0도 초과 90도 미만)
  if (angle > 0 && angle < 90) answer = 1;

  //직각일때 2 (90도)
  if (angle === 90) answer = 2;

  //둔각일때 3 (90도 초과 180도 미만)
  if (angle > 90 && angle < 180) answer = 3;

  //평각일때 4 (180도)
  if (angle === 180) answer = 4;
  return answer;
}
