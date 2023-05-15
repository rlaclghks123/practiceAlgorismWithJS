// 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부른다
// 중복된 값이 들어있지 않는다.

// ["mumu", "soe", "poe", "kai", "mine"]
// ["mumu", "soe", "kai","poe",  "mine"]
// ["mumu", "kai", "soe", "poe",  "mine"]
// ["mumu", "kai", "soe",  "mine", "poe"]
// ["mumu", "kai",  "mine", "soe",  "poe"]

// 1. callings를 돌면서 callings의 index값을 찾는다.
// 2. 찾은 선수와 그 앞의 선수를 바꿔준다.

function solution(players, callings) {
  let map = new Map();
  // map에 key : name,  value : i값으로 초기화 해줍니다.
  players.forEach((name, i) => map.set(name, i));

  // callings를 돌면서 호출된 친구는 앞으로, 호출된 친구의 앞친구는 뒤로 바꿔줍니다.
  callings.forEach((name) => {
    // 호출된 친구의 idx값을 map에서 찾아줍니다.
    let idx = map.get(name);

    // 호출된 친구와 앞의 친구를 바꿔줍니다.
    let temp = players[idx - 1];
    players[idx - 1] = name;
    players[idx] = temp;

    // 바꾼 친구들의 idx값을 map에서 바꿔줍니다.
    map.set(name, map.get(name) - 1);
    map.set(temp, map.get(name) + 1);
  });

  return players;
}
