// 1. 중복을 체크하기 위해 set을 만들어 줍니다.
// 2. 0번째 값을 set에 담고, 지난 단어를 0번째 값으로 초기화 해줍니다.
// 3. words를 순회하면서 각 단어들이 끝말잇기에 실패한다면 return 해줍니다.
// 3-1. 실패조건1 : 지난단어의 마지막글자와 현재단어의 첫글자가 다른경우
// 3-2. 실패조건2 : 중복된 단어인 경우(set에 존재하는지)
// 3-3. 정답은 [번호, 차례] 형태로 출력
// 4. 끝말잇기에 성공한다면 지난단어를 수정하고, set에 값을 담아줍니다.
// 5. 모두가 끝말잇기를 성공한다면 [0,0]을 출력해줍니다.

function solution(n, words) {
  const set = new Set();
  let lastWord = words[0];
  set.add(lastWord);

  for (let idx = 1; idx < words.length; idx++) {
    const currentWord = words[idx];

    if (lastWord[lastWord.length - 1] !== currentWord[0] || set.has(currentWord)) {
      return [(idx % n) + 1, Math.ceil((idx + 1) / n)];
    }

    set.add(currentWord);
    lastWord = currentWord;
  }

  return [0, 0];
}
