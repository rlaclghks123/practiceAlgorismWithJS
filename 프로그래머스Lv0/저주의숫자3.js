// 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않는다.
// n을 3x마을에서 사용하는 숫자로 바꿔 return 한다.
// 3으로 나눠지거나,  3이 포함되면 넘어가기

function solution(n) {
  var answer = 0;

  // 1, 1부터 시작하여 n까지의 숫자까지 3x숫자를 구한다. (3x는 3으로 나눠지거나, 3이 포함되면 넘어간다.)

  let temp = 0;
  let index = 0;

  while (index < n) {
    if (
      temp % 3 === 0 ||
      temp
        .toString()
        .split('')
        .some((item) => item === '3')
    ) {
      temp++;
    } else {
      temp++;
      index++;
    }
  }
  answer = temp - 1;
  return answer;
}

solution(15); // 25

solution(40); // 76

// 다른사람의 코드

function solution(n) {
  var count3x = 0;

  // 1. n이 0이 될 때까지 반복한다.
  while (n > 0) {
    // 2. count해준다.
    count3x = count3x + 1;

    // 3. 3이 포함되어 있거나, 3으로 나눠떨어지면 continue;
    if (count3x.toString().split('').includes('3') || count3x % 3 == 0) {
      continue;
    }

    // 4. 넘어가지 않는경우는 n을 -1 해준다.
    n = n - 1;
  }

  // 5. 총 count값을 출력
  return count3x;
}
