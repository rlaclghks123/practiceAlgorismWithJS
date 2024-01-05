// 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다).
// X, Y의 짝꿍이 존재하지 않으면,짝꿍은 -1입니다.
// X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

// 1. Y를 순회하면서 map에 담아줍니다.
// 2. X를 순회합니다.
// 2-1. map에 값이 존재하는 경우 처리를 해줍니다.
// 2-1-1. 현재값이 마지막 1개라면 삭제해줍니다.
// 2-1-2. 현재값이 마지막 1개가 아닌경우 1개를 제거해주고, partner에 담아줍니다.
// 3. 겹치는 숫자가 없는 경우 -1을 출력
// 4. 숫자형태로 바꿨을 경우 0이라면 '0'을 출력 Ex) '00'인 경우 0을 출력
// 5. 3,4의 경우가 아닌 경우 최고숫자를 위해 내림차순으로 정렬해서 출력

function solution(X, Y) {
  const map = new Map();
  const partner = [];

  [...Y].forEach((word) => map.set(word, (map.get(word) ?? 0) + 1));

  [...X].forEach((word) => {
    if (map.has(word)) {
      if (map.get(word) === 0) {
        map.delete(word);
        return;
      }
      map.set(word, map.get(word) - 1);
      partner.push(word);
    }
  });

  if (partner.length === 0) return '-1';
  if (Number(partner.join('')) === 0) return '0';
  return partner.sort((a, b) => b - a).join('');
}
