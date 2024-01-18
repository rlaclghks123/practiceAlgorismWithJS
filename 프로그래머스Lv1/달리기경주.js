// 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부른다
// 중복된 값이 들어있지 않는다.

// ["mumu", "soe", "poe", "kai", "mine"]
// ["mumu", "soe", "kai","poe",  "mine"]
// ["mumu", "kai", "soe", "poe",  "mine"]
// ["mumu", "kai", "soe",  "mine", "poe"]
// ["mumu", "kai",  "mine", "soe",  "poe"]

// 1. players을 통해 {player : idx} 형태로 Map에 담아줍니다.
// 2. callings를 돌면서 callings의 index값을 Map에서 찾는다.
// 3. 찾은 선수와 그 앞의 선수를 player에서 바꿔준다.
// 4. Map에도 순서를 바꿔준다.

// Map과 배열을 같이 쓴 이유는 이렇게 해야 map에 값,idx를 담는데 시간복잡도가 O(1)이며
// idx를 찾아야 player에서 값을 바꾸는데 시가복잡도를 O(1)로 사용할 수 있기 때문이다.
// idx를 찾지 않으면 배열에서 값을 빼고, 다시 넣어야 하는데 그러면 재배치가 일어나 시간이 오래 발생

function solution(players, callings) {
  const map = new Map();

  players.forEach((player, idx) => map.set(player, idx));

  callings.forEach((calledName) => {
    const curIdx = map.get(calledName);

    const target = players[curIdx - 1];
    players[curIdx - 1] = calledName;
    players[curIdx] = target;

    map.set(target, curIdx);
    map.set(calledName, curIdx - 1);
  });

  return players;
}
