// 빵 - 야채 - 고기 - 빵 => 햄버거

// 빵 : 1
// 야채 : 2
// 고기 : 3

// 즉 1 2 3 1 이 연속이면 햄버거 포장

// 1. 포장하는 순서를 정해줍니다. (wrap);
// 2. ingredient를 순회합니다.
// 2-1. tmp에 현재값(item)을 담아줍니다.
// 2-2. 만약 현재값이 1이면서 tmp의 뒤에서 4개값이 포장순서라면(wrap) 카운트 해주고, tmp에서 뒤에서 4개를 제거해줍니다.
// 3. 총 카운트된 값을 출력합니다.

function solution(ingredient) {
  const wrap = '1231';
  const tmp = [];
  let answer = 0;

  ingredient.forEach((item) => {
    tmp.push(item);
    const target = tmp.slice(-4).join('');
    if (item === 1 && target === wrap) {
      answer++;
      tmp.pop();
      tmp.pop();
      tmp.pop();
      tmp.pop();
    }
  });

  return answer;
}
