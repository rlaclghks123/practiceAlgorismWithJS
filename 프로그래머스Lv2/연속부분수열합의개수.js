// 1. elements를 이어서 사용할 수 있도록 newElements를 만들어줍니다.
// 2. elements를 2중으로 순회하면서 j부터 j+i까지 자른 값을 다 더한뒤, set에 담아 중복을 제거합니다.
// 3. set에 보관된 중복되지 않은 연속된 부분수열 합의 개수를 출력합니다.

function solution(elements) {
  const newElements = [];
  const set = new Set();

  for (let i = 0; i < elements.length; i++) {
    newElements.push(...elements);
  }

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      const sliced = newElements.slice(j, j + i);
      const sum = sliced.reduce((a, c) => a + c, 0);
      set.add(sum);
    }
  }
  return set.size;
}
