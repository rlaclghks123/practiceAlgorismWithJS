// 1. 최대값을 찾기 위해 citations을 내림차순으로 정렬  => 최대값부터 시작하여 값을 찾으면 바로 종료

// 2. citations의 최대값부터 0까지 순회하면서 h-index인지 찾아준다.
// 2-1. h-index : n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용
// 2-2. h : 최대값부터 1씩 감소하는 값
// 2-3. h번 인용된 논문 : citations에서 h 이상인 값들의 길이
// 2-4. 나머지 논문 : citations에서 h번 이하인 값들의 길이

// 3. h-index를 찾지 못했다면 최소값을 출력한다.

function solution(citations) {
  citations.sort((a, b) => b - a);
  const max = Math.max(...citations);
  const min = Math.min(...citations);

  for (let h = max; h >= 0; h--) {
    const inyong = citations.filter((num) => num >= h).length;
    const restInyong = citations.filter((num) => num <= h).length;

    if (inyong >= h && restInyong <= h) return h;
  }
  return min;
}
