// 1. s가 '1'이 될때까지 반복합니다.
// 1-1. s의 길이를 기억해줍니다.
// 1-2. s에서 0을 모두 제거해줍니다.
// 1-3. (기억해둔 s의 길이 - 0을 제거한 s의 길이) 를 총 0의 개수(zeroCnt)에 더해줍니다.
// 1-4. s를 (0을 제거한 s의 길이를 2진법으로 바꾼 문자열)로 교체합니다.
// 1-5. 총 횟수를 +1 더해줍니다.
// 2. [이진 변환의 횟수와, 변환 과정에서 제거된 모든 0의 개수]를 출력합니다.

function solution(s) {
  let cnt = 0;
  let zeroCnt = 0;

  while (s !== '1') {
    const beforeS = s;
    s = s.replaceAll('0', '');
    const afterS = s;

    zeroCnt += beforeS.length - afterS.length;
    s = s.length.toString(2);
    cnt += 1;
  }

  return [cnt, zeroCnt];
}
