function solution(n) {
  var answer = 0;
  const arr = [];
  // 약수를 arr에 담아준다.
  let temp = 1;
  while (temp <= n) {
    if (n % temp === 0) {
      arr.push(temp);
    }
    temp++;
  }

  // 순서쌍의 개수를 출력한다. === 약수의 개수
  return (answer = arr.length);
}

solution(20); // 6

solution(100); //9
