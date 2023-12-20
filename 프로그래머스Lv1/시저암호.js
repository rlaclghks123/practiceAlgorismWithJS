// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 1. s를 아스키코드로 바꾼다.
// 2. 1에서 구한 숫자에 n만큼 더한다.
// 2-1 공백은 그대로 공백으로
// 2-2 'z'다음엔 'a'가 오도록 한다.
// 2-3 'Z' 다음엔 'A'가 오도록 한다.
// 3. 2에서 구한 숫자를 다시 문자로 바꾼다.

// a:97, z:122
// A:65, Z:90

function solution(s, n) {
  const ascki = [...s].map((word) => {
    const charCode = word.charCodeAt();
    if (charCode === 32) return charCode;
    if (charCode + n > 122) return 97 + ((charCode + n) % 122) - 1;
    if (charCode + n > 90 && charCode < 97) return 65 + ((charCode + n) % 90) - 1;
    return charCode + n;
  });

  const answer = ascki.map((charCode) => String.fromCharCode(charCode)).join('');

  return answer;
}
