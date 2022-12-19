function solution(n) {
  //n의 각 자리숫자의 합을 return
  var answer = 0;

  //1. 숫자를 문자열로 바꾸고, 바꾼 문자열을 배열에 담아준다.
  //2. 배열의 요소들을 reduce를 통해 다 더해준다.
  answer = n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);

  return answer;
}

function solution(n) {
  //n의 각 자리숫자의 합을 return
  var answer = 0;

  const arr = [];
  //1. 숫자를 10으로 나눠서 각 자리수를 arr에 담아준다.
  while (n >= 1) {
    arr.push(Math.floor(n % 10));
    n /= 10;
  }

  //2. 각 배열의 요소를 모두 더해준다.
  answer = arr.reduce((sum, cur) => {
    return sum + cur;
  }, 0);

  return answer;
}

solution(1234); //10

solution(930211); //16
