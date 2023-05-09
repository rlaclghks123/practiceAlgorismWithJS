function solution(s, skip, index) {
  const alpha = [];

  // 1. alpha 배열에 a~z 까지 모든 알파벳을 담아줍니다.
  for (let i = 97; i <= 122; i++) {
    alpha.push(String.fromCharCode(i));
  }

  // 2. skip에 있는 알파벳은 alpha배열에서 제거해줍니다.
  [...skip].forEach((word) => {
    alpha.splice(alpha.indexOf(word), 1);
  });

  // 3.   s문자열을 배열로 만들어 하나씩 돌면서 각 요소의 alpha에서의 idx값을 찾아줍니다.
  // 3-1. idx값에 문제에서 준 index값을 더해줍니다. (건너뛰는 기능)
  // 3-2  만약 3-1에서 더한 값이 alpha의 배열을 넘어갈 경우 0부터 시작하도록 만들어줍니다.
  // 3-3 map을 통해 3~-3-2 까지의 조건을 통해 새로운 배열을 만들어주고 문자열로 바꿔 출력합니다.
  return [...s]
    .map((word) => {
      let idx = alpha.indexOf(word);
      let sum = idx + index;
      if (sum >= alpha.length) {
        sum = sum % alpha.length;
      }
      return alpha[sum];
    })
    .join('');
}
