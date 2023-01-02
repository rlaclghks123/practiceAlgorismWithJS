// s에 p의 개수, y의 개수를 비교해 같으면 true, 다르면 false를 return
// 대,소문자를 구별하지 않습니다.

function solution(s) {
  var answer = true;

  // 1. 모두 대문자로 변경한다. (소문자로 변경해도 상관없음)
  const changeWord = s.toUpperCase();

  // 2. p의 개수와 y의 개수를 담아준다.
  let totalP = 0;
  let totalY = 0;
  [...changeWord].forEach((item) => {
    if (item === 'P') totalP++;
    else if (item === 'Y') totalY++;
  });

  // 3. y의 개수와 p의 개수가 같으면 true, 다르면 false를 출력
  answer = totalP === totalY ? true : false;

  return answer;
}

solution('pPoooyY'); // 	true

solution('Pyy'); // false
