// 1부터 n사이의 소수의 개수를 return
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
  var answer = 0;

  answer = primeNumber(n).length;
  return answer;
}

solution(10); // 4

solution(5); // 3
