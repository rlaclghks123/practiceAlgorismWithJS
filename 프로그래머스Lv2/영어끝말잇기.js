// 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
// 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
// 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
// 이전에 등장했던 단어는 사용할 수 없습니다.
// 한 글자인 단어는 인정되지 않습니다.
// 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return
// 정답은 [ 번호, 차례 ] 형태로 return 해주세요.
// 만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return 해주세요.

function solution(n, words) {
  var answer = [];
  const result = [];
  let start = 0;

  // 1. words.length까지 반복해준다.
  while (start < words.length) {
    for (let i = 0; i < n; i++) {
      if (
        // 2. 이전에 값이 있었거나, 처음값이 아니면서 이전값의 마지막단어와 현재 첫단어가 다를경우 i+1, Math.ceil((start + i + 1) / n)을 출력해준다.
        answer.includes(words[start + i]) ||
        (answer.length !== 0 && answer[answer.length - 1].slice(-1) !== words[start + i][0])
      ) {
        result.push(i + 1, Math.ceil((start + i + 1) / n));
        break;
      }
      answer.push(words[start + i]);
    }

    // 만약 2의 값을 찾았다면 break;
    if (result.length !== 0) break;
    // 그게 아니라면 +=n씩 증가해준다.
    start += n;
  }

  // 만약 값이 없다면 [0,0] 출력
  if (result.length === 0) return [0, 0];
  return result;
}

solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']); // [3,3]
solution(5, [
  'hello',
  'observe',
  'effect',
  'take',
  'either',
  'recognize',
  'encourage',
  'ensure',
  'establish',
  'hang',
  'gather',
  'refer',
  'reference',
  'estimate',
  'executive',
]); // [0,0]
solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']); // [1,3]

// 다른사람의 코드

function solution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer = answer || (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0] ? idx : answer);
    return now[now.length - 1];
  }, '');

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}
