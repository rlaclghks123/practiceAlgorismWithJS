// 1. DB에 skip을 제외한 모든 소문자 영단어를 담아준다.
// 2. s를 순회하면서 현재 단어에 index값을 더한 새로운 index값을 찾는다.
// 2-1. 만약 z를 넘는다면 다시 a부터 시작
// 3. 2에서 찾은 새로운 index값으로 DB에서 단어를 찾아 새로운 문자열을 만든다.

function initDb(skip) {
  const DB = [];
  for (let i = 97; i <= 122; i++) {
    DB.push(String.fromCharCode(i));
  }

  return DB.filter((char) => !skip.includes(char));
}

function solution(s, skip, index) {
  const DB = initDb(skip);

  const answer = [...s].map((word) => {
    const beforeIdx = DB.indexOf(word);
    let afterIdx = beforeIdx + index;

    if (afterIdx >= DB.length) afterIdx = afterIdx % DB.length;
    return DB[afterIdx];
  });

  return answer.join('');
}
