// // 참여한 선수들의 이름 participant
// // 완주한 선수들의 이름 completion
// // 완주하지 못한 이름을 return
// // 동명이인이 있을수도

// function solution(participant, completion) {
//   let answer = [];

//   let map = new Map();

//   // 1. map에 값이 존재하면 +1을 존재하지않으면 1을 채워넣어준다.
//   for (let i = 0; i < participant.length; i++) {
//     map.set(participant[i], map.get(participant[i]) ? map.get(participant[i]) + 1 : 1);
//   }

//   // 2. map에서 완주한사람들은 -1을 해준다.
//   for (let i = 0; i < completion.length; i++) {
//     map.set(completion[i], map.get(completion[i]) - 1);
//   }

//   // 3. map에서 1이 남아있는 사람들을 추출해준다.
//   return [...map]
//     .filter((item) => item[1] === 1)
//     .map((item) => item[0])
//     .join('');
// }

function solution(participant, completion) {
  var answer = '';

  // 1. map에 값을 넣어준다.
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    map.set(participant[i], map.get(participant[i]) ? map.get(participant[i]) + 1 : 1);
  }

  completion.forEach((item) => {
    map.set(item, map.get(item) - 1);
  });

  answer = [...map]
    .filter((item) => item[1] === 1)
    .map((item) => item[0])
    .join('');
  return answer;
}

solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']); //	"leo"

solution(
  ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
  ['josipa', 'filipa', 'marina', 'nikola']
); //	"vinko"

solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']); //"mislav"
