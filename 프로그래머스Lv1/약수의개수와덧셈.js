// 정수 left부터 right까지 모든 수 중 약수의 개수가 짝수인 수는 더하고, 홀수인 수는 뺀수를 return

//수    약수             약수의개수
//13	1, 13	          2
//14	1, 2, 7, 14	      4
//15	1, 3, 5, 15	      4
//16	1, 2, 4, 8, 16	  5
//17	1, 17	          2
// 13+14+15-16+17 = 43

function divisor(n) {
  const arr = [];
  let temp = 1;

  while (temp <= n) {
    if (n % temp === 0) {
      arr.push(temp);
    }
    temp++;
  }
  return arr.length;
}

function solution(left, right) {
  var answer = 0;

  // 1. left이상 right이하의 약수의 개수를 구해준다.
  for (let i = left; i <= right; i++) {
    // 2. 약수의 개수가 짝수인경우 값을 더하고, 홀수인경우 값을 빼준다.
    divisor(i) % 2 === 0 ? (answer += i) : (answer -= i);
  }

  return answer;
}

solution(13, 17); // 43

solution(24, 27); // 52

// 다른사람의 코드
// 제곱근이 정수면, 약수의 개수가 홀수이다. 이 점을 이용해 풀었다.

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
