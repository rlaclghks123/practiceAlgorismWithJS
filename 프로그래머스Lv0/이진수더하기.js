// 2진수인 bin1 과 bin2의 합을 return

function solution(bin1, bin2) {
  var answer = '';

  // 1. 2진수 문자열을 숫자로 바꾼뒤, 10진수로 바꾼다.
  const first = parseInt(Number(bin1), 2);
  const second = parseInt(Number(bin2), 2);

  // 2. 10진수로 바꾼 숫자들을 더해준다.
  const sum = first + second;

  // 3. 10진수를 2진수로 바꾼다ㅏ.
  const totalBin = sum.toString(2);

  // 4. 2진수로 바꾼 숫자를 문자열로 바꿔 출력한다.
  answer = totalBin.toString();

  return answer;
}

solution('10', '11'); //"101"

solution('1001', '1111'); // "11000"
