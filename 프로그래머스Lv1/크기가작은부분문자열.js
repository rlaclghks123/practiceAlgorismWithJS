// 숫자로 이루어진 문자열 t,p
// t에서 p와 길이가 같은 부분문자열 중 부분문자열이 나타내는 수가 p보다 작거나 같은것이 나오는 횟수
//

function solution(t, p) {
  // 1. p의 길이를 구해준다.
  const tLen = t.length;
  const pLen = p.length;
  let count = 0;

  // p의 길이만큼 t를 짤라서 값을 비교해서 자른 숫자가 p보다 작거나 같으면 count한다.
  for (let i = 0; i <= tLen - pLen; i++) {
    const pNum = Number(p);
    const lNum = Number(t.slice(i, i + pLen));
    if (pNum >= lNum) count++;
  }

  return count;
}

solution('3141592', '271'); //	2

solution('500220839878', '7'); //	8

solution('10203', '15'); //	3
