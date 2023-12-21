// n번째 글자를 기준으로 오름차순 정렬
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

function solution(strings, n) {
  const answer = strings.sort((a, b) => {
    if (a[n] === b[n]) return a.localeCompare(b);
    return a[n].localeCompare(b[n]);
  });

  return answer;
}
