// 상자의 가로, 세로, 높이가 저장되어 있는 배열 box에 들어갈수 있는 주사위의 최대 개수를 Return
function solution(box, n) {
  var answer = 0;

  const row = Math.floor(box[0] / n);
  const col = Math.floor(box[1] / n);
  const height = Math.floor(box[2] / n);

  answer = row * col * height;

  return answer;
}

solution([1, 1, 1], 1); //1

solution([10, 8, 6], 3); //	12
