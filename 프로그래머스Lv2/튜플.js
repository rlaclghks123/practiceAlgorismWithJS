// 1. JSON.parse를 통해 문자열을 실제 자료구조로 파싱한다.
// 1-1. {}로 되어있는 문자열을 []의 형태로 바꿔준다.

// 2. 배열의 길이를 오름차순으로 정렬을 한다. 정렬을 하는 이유는 짧은 길이의 원소를 먼저 set에 담기위해

// 3. 중복을 제거하기 위해 Set자료구조에 값을 담아준다.

// 4. Set자료구조를 배열 형태로 바꿔 출력한다.

function solution(s) {
  const set = new Set();
  const parsed = JSON.parse(s.replaceAll('{', '[').replaceAll('}', ']'));

  parsed.sort((a, b) => a.length - b.length);
  parsed.forEach((nums) => nums.forEach((num) => set.add(num)));

  return [...set];
}
