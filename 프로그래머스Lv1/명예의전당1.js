// 매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다
// k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면, 출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.

// 1. score를 순회하면서 확인한다.
// 1-1 명예의 전당에 점수를 올린다.
// 1-2 명예의 전당에 있는 점수들을 내림차순으로 정렬한다.
// 1-3 정렬된 명예의 전당점수들을 k개만큼 짜른다.
// 1-4 제일 작은 점수를 answer에 담아준다.
// 2. answer배열을 출력한다.

function solution(k, score) {
  const answer = [];
  let symbols = [];

  score.forEach((num) => {
    symbols.push(num);
    symbols = symbols.sort((a, b) => b - a).slice(0, k);
    answer.push(symbols[symbols.length - 1]);
  });

  return answer;
}
