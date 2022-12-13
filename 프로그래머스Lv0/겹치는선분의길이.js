function solution(lines) {
  var answer = 0;
  // 1. arr배열을 만들어준다. (lines의 범위에 포함되어 있는 숫자의 개수를 담는 배열)
  // -100 ~ 100까지 인데, 음수는 배열에서 사용할 수 없어서 +100을 해줘 0~200까지의 배열을 사용
  const arr = Array.from({ length: 200 }, () => 0);

  // 2. arr배열에 lines 값들의 범위에 포함되어 있는 숫자들을 +1 해준다.
  // +100을 해줌으로써 음수제거
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0] + 100; j < lines[i][1] + 100; j++) {
      arr[j]++;
    }
  }

  // 3. arr배열의 겹치는 부분(1초과)을 answer에 담아준다.
  for (let i = 0; i < 200; i++) {
    if (arr[i] > 1) answer++;
  }
  // 4. answer를 출력한다.
  return answer;
}
