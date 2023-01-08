// n번째 글자를 기준으로 오름차순 정렬
function solution(strings, n) {
  var answer = [];

  // 1. n번째 글자를 찾아준다.
  strings.sort((a, b) => {
    // 2. n번째 글자가 같다면 문자열을 비교해준다.
    if (a.split('')[n].charCodeAt(0) === b.split('')[n].charCodeAt(0)) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
    // 3. 문자열을 기준으로 비교해준다.
    return a.split('')[n].charCodeAt(0) - b.split('')[n].charCodeAt(0);
  });
  return strings;
}

solution(['sun', 'bed', 'car'], 1); // ["car", "bed", "sun"]

solution(['abce', 'abcd', 'cdx'], 2); // ["abcd", "abce", "cdx"]

// 다른사람코드
// localeCompare을 통해 비교해줬다.

function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
