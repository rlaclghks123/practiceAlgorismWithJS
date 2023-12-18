// 1. 핸드폰 번호 뒤에 4자리를 가져온다.
// 2. 핸드폰 번호 4자리를 제외한 나머지 길이를 *로 채운다.
// 3. 2에서 구한 문자열에 1에서 구한 4자리를 더해준다.

function solution(phone_number) {
  const lastFourNumbers = phone_number.slice(-4);
  const result = '*'.repeat(phone_number.length - 4);

  return result + lastFourNumbers;
}
