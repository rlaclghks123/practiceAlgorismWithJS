// "aya", "ye", "woo", "ma" 발음만 가능

// 1. babbling을 돌면서 "aya", "ye", "woo", "ma"로 조합할 수 있는 언어인지 체크한다.
// 2. 연속해서 같은 발음이 있는지 체크한다.
// 3. 1,2의 조건에 만족하는 언어만 count 해준다.

function solution(babbling) {
  const regexp1 = /^(aya|ye|woo|ma)+$/;

  const regexp2 = /(aya|ye|woo|ma)\1+/;

  return babbling.reduce(
    (ans, word) => (regexp1.test(word) && !regexp2.test(word) ? ++ans : ans),
    0
  );
}
