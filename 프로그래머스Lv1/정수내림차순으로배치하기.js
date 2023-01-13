// n의 각 자릿수를 큰것부터 작은순으로 정렬한 새로운 정수를 return

function solution(n) {
  var answer = 0;

  // 1. 숫자를 문자열로 바꿔준다.
  answer = Number(
    n
      .toString()

      // 2. 문자열을 배열로 바꿔준다.
      .split('')

      // 3.  내림차순으로 정렬해준다.
      .sort((a, b) => b - a)

      // 4. 정렬한 값을 문자열로 바꿔준다.
      .join('')

    // 5. 문자열을 숫자로 바꿔준다.
  );

  return answer;
}

solution(118372); // 873211
