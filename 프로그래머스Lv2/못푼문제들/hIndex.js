// n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값

function solution(citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (i >= citations[i]) return i;
  }
  return citations.length;
}

solution([3, 0, 6, 1, 5]); // 3
