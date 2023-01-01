// n의 각 자릿수의 합을 구해서 return

function solution(n) {
  var answer = 0;

  answer = n
    // 1. n을 문자열로 바꿔준다.
    .toString()

    // 2. ''를 기준으로 나눠 배열에 담아준다.
    .split('')

    // 3. reduce를 통해 각 요소를 더해준다.
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);

  return answer;
}

solution(123); // 6

solution(987); // 24
