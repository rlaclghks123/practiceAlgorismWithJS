// 사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, k점이 최상품의 사과이고 1점이 최하품의 사과입니다.
// 사과 한 상자의 가격
// 한 상자에 사과를 m개씩 담아 포장합니다.
// 상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
// 과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다

// 1. score를 내림차순으로 정렬합니다.
// 2. 0번째 부터 m개씩 자릅니다.
// 3. 최대이익을 계산하여 모든 상자의 가격을 다 더해줍니다.

function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let answer = 0;

  for (let i = 0; i < score.length / m; i++) {
    const sliced = score.slice(i * m, i * m + m);
    if (sliced.length !== m) continue;

    answer += Math.min(...sliced) * m;
  }

  return answer;
}
