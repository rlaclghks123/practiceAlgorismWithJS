// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열을 return
function solution(n) {
  var answer = [];

  // 1. n을 문자열로 바꾼다.
  answer = n
    .toString()

    // 2. 배열로 바꾼다.
    .split('')

    // 3. reverse를 통해 뒤집어준다.
    .reverse()

    // 4. 각 요소를 문자열 => 숫자로 바꿔준다.

    .map((item) => Number(item));

  return answer;
}

solution(12345); // [5,4,3,2,1]
