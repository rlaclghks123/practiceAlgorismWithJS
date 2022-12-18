function solution(dot) {
  var answer = 0;
  const x = dot[0];
  const y = dot[1];

  // x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
  if (x > 0 && y > 0) {
    answer = 1;
  }

  // x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
  if (x < 0 && y > 0) {
    answer = 2;
  }
  // x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
  if (x < 0 && y < 0) {
    answer = 3;
  }

  // x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
  if (x > 0 && y < 0) {
    answer = 4;
  }

  return answer;
}

solution([2, 4]); //1

solution([-7, 9]); //2
