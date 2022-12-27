// M * N 크기의 종이를 최소 가위질 횟수를 return

function solution(M, N) {
  var answer = 0;

  // 1. M * N -1을 한다.
  answer = M * N - 1;
  return answer;
}

solution(2, 2); // 3;

solution(2, 5); //9;

solution(1, 1); // 0;
