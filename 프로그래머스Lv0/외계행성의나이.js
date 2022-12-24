// 나이를 알파벳으로 말한다. a=0, b=1 ... j=9
// ex) 23살은 cd, 51살은 fd
// age를 ROGRAMMER-962식 나이를 return
// age는 1000보다 작거나 같다.

function solution(age) {
  var answer = '';

  // 1. age를 하나의 문자로 추출한다.
  age

    // 1-1 문자열로 바꿔준다.
    .toString()

    // 1-2 배열로 바꿔준다.
    .split('')

    // 1-3 배열의 요소를 돌면서 문자를 숫자로 바꾼뒤, 아스키 코드의 소문자로 만들어 fromCharCode를 활용하여 문자로 재변환하여 answer에 담아준다.
    .forEach((num) => (answer += String.fromCharCode(Number(num) + 97)));

  return answer;
}

solution(23); //"cd"

solution(51); // "fb"

solution(100); //"baa"
