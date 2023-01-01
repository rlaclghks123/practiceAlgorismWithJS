// 양의정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야합니다.
// Ex) 18의 자릿수는 1+8= 9 ,  18은 9로 나누어떨어지므로 18은 하샤드 수
// 하샤드수인지 검사하는 함수

function solution(x) {
  var answer = true;

  // 1. 각 자리수를 더한다.
  const sum = x
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);

  // 2. x가 각자릿수를 더한 sum으로 나눠지면 true 아니면 false를 출력

  answer = x % sum === 0 ? true : false;

  return answer;
}

solution(10); //	true
solution(12); //	true
solution(11); //false
solution(13); //false
