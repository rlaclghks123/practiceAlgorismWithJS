// n의 소인수를 오름차순으로 담은 배열을 return

//true는 소수가 아닌경우, false는 소수인경우

function primeNumber(n) {
  const check = Array.from({ length: n }, () => false);
  const arr = [];
  // 0,1은 소수가 아니기 때문에 true로 해준다.
  check[0] = true;
  check[1] = true;

  for (let i = 2; i * i <= n; i++) {
    if (check[i]) continue; //소수가 아닌경우는 continue;

    // 어떤수의 배수는 약수를 가지기 때문에 소수가 아니다. 따라서 어떤수의 배수는 모두 true로 바꿔준다.
    for (let j = i + i; j <= n; j += i) {
      check[j] = true;
    }
  }

  // false인 경우 소수이므로 arr배열에 담아준다.
  for (let i = 0; i <= n; i++) {
    if (!check[i]) {
      arr.push(i);
    }
  }
  return arr;
}

function solution(n) {
  var answer = [];

  // 1. 소수를 구한다.
  const primeNumberArr = primeNumber(n);

  // 2. 소수들 모두 돌면서 소인수분해를 해준다.
  let temp = 0;

  while (temp < primeNumberArr.length) {
    if (n % primeNumberArr[temp] === 0) {
      answer.push(primeNumberArr[temp]);
    }
    temp++;
  }

  return answer;
}

solution(12); //[2, 3]

solution(17); //[17]

// solution(420); //[2, 3, 5, 7]
