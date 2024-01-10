// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant
// 완주한 선수들의 이름이 담긴 배열 completion
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
// 참가자 중에는 동명이인이 있을 수 있습니다.

// 1. participant를 순회하면서 map에 [참가자, 참가자수] 형태로 담아준다.
// 2. completion를 순회하면서 map에 참가했던 참가자들을 1명씩 제거해준다.
// 2-1. 만약 참가자가 0명이 되면 map에서 제거해준다.
// 3. map에 남아있는 참가자들을 문자열 형태로 출력한다.

function solution(participant, completion) {
  const map = new Map();

  participant.forEach((name) => {
    map.has(name) ? map.set(name, map.get(name) + 1) : map.set(name, 1);
  });

  completion.forEach((name) => {
    map.set(name, map.get(name) - 1);
    if (map.get(name) === 0) map.delete(name);
  });

  return [...map.keys()].join('');
}
