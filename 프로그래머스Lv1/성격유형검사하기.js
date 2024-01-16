// 1. 제공되는 지표를 상수로 만들어줍니다.
// 2. 지표에 존재하는 각각의 성격유형을 map자료구조로 저장하고, 기본값을 0으로 세팅합니다.
// 3. survey를 순회하면서 선택한 점수에 따라 map자료구조에 저장한 값을 수정해줍니다.
// 3-1. 선택한 점수가 4보다 크면 "성격유형 : 4-선택한 점수" 로 담아줍니다.
// 3-2. 선택한 점수가 4보다 작으면 "성격유형 : 선택한 점수-4" 로 담아줍니다.
// 단 이미 map에 존재하면 기존의 점수 + 새로운 점수로 구합니다.
// 4. 지표를 돌면서 각 성격유형에 해당하는 점수를 찾아 2가지 유형 중 더 큰값을 찾아줍니다.

function solution(survey, choices) {
  const indicator = ['RT', 'CF', 'JM', 'AN'];
  const map = new Map();

  indicator.forEach((word) => [...word].forEach((char) => map.set(char, 0)));

  survey.forEach((word, idx) => {
    const [left, right] = word.split('');

    if (choices[idx] < 4)
      map.set(left, map.get(left) ? map.get(left) + (4 - choices[idx]) : 4 - choices[idx]);
    if (choices[idx] > 4)
      map.set(right, map.get(right) ? map.get(right) + (choices[idx] - 4) : choices[idx] - 4);
  });

  return indicator
    .map((word) => {
      const [left, right] = word;
      return map.get(left) >= map.get(right) ? left : right;
    })
    .join('');
}
