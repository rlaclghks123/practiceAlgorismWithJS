// 같은 값이 연속해서 나타나는것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현
// 간단한 예로 "aabbaccc"의 경우 "2a2ba3c"(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)
// 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지
// "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만,
// 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"
// "abcabcdede"와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 "abcabc2de"가 되지만,
// 3개 단위로 자른다면 "2abcdede"가 되어 3개 단위

function solution(s) {
  // 1. s의 길이가 1인경우 1을 출력합니다.
  if (s.length === 1) return 1;

  // 2. 압축한 문자열을 담을 배열을 생성합니다.
  let strings = [];

  // 3. for문을 돌면서 1개~ s.length/2개 까지 잘라서 압축을 해봅니다.
  for (let i = 1; i <= s.length / 2; i++) {
    // 압축을 위해 같은지 측정하는 cnt, 압축한 문자열을 넣은 string을 만들어줍니다.
    let cnt = 1;
    let string = '';

    // 4 for문을 통해 0부터 i까지 문자열을 잘라줍니다. 압축을 하는 단계
    for (let j = 0; j < s.length; j += i) {
      // 4-1 현재값은 j부터 i개, substr을 사용한 이유는 slice와 달리 첫번째 인자가 더 큰 경우 첫번쨰와 두번째 인자를 바꿔주기 때문
      let current = s.substr(j, i);
      // 4-2 다음값은 i+j부터 i개
      let next = s.substr(i + j, i);

      // 4-3 만약 현재값과 다음값이 같으면 cnt++해준다.
      if (current === next) cnt++;
      // 4-4 다르다면 string에 압축한 값을 담아주고, cnt를 초기화해줍니다.
      else {
        string = cnt > 1 ? string + cnt + current : string + current;
        cnt = 1;
      }
    }
    // i개의 문자열을 잘라서 압축한 문자열의 개수를 strings에 담아줍니다.
    strings.push(string.length);
  }
  // 5 가장 적은 문자열을 출력해줍니다.
  return Math.min(...strings);
}

solution('aabbaccc'); // 	7

solution('ababcdcdababcdcd'); // 	9

solution('abcabcdede'); // 	8

solution('abcabcabcabcdededededede'); // 14

solution('xababcdcdababcdcd'); // 17
