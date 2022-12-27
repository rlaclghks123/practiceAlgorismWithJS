// spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 없다면 2를 return

function solution(spell, dic) {
  var answer = 0;

  // 1. spell의 문자를 정렬하여 문자열로 바꿔준다.

  let sortedSpell = spell.sort().join('');

  // 2. dic의 문자열을 돌면서 각 문자열을 알파벳순으로 정렬해준다.
  dic.forEach((item) => {
    let sortedDic = [...item].sort().join('');

    if (sortedSpell === sortedDic) {
      answer++;
    }
  });

  return answer === 1 ? 1 : 2;
}

solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo']); // 2

solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw']); // 1

solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som']); // 2
