// a와 b의 내적을 return
// a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]

function solution(a, b) {
  var answer = 1234567890;

  // 1. 배열의 길이만큼 a의 요소와 b의 요소를 곱해준다.
  answer = a.reduce((acc, cur, index) => {
    return (acc += cur * b[index]);
  }, 0);

  return answer;
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]); // 3

solution([-1, 0, 1], [1, 0, -1]); //	-2

// 다른 사람의 코드
// 같은 코드지만 화살표 함수를 사용하여 더욱 간편해 보인다

function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
