// 네트워크를 2개로 분할 하려고 합니다.이때 두 전령망이 갖게되는 송전탑의 개수를 최대한 비슷하게 맞춤
// 두 전령망이 가지고 있는 송전탑 개수의 차이(절대값)을 return

function solution(n, wires) {
  // 1. 최소값을 구하기 위해 answer에 최대값을 초기화해준다.
  let answer = Number.MAX_SAFE_INTEGER;

  // 2. map을 통해 network를 형성해준다.
  const network = wires.reduce((prev, cur) => {
    prev.set(cur[0], prev.get(cur[0]) ? [...prev.get(cur[0]), cur[1]] : [cur[1]]);
    prev.set(cur[1], prev.get(cur[1]) ? [...prev.get(cur[1]), cur[0]] : [cur[0]]);
    return prev;
  }, new Map());

  // 3. wires를 모두 돌면서 하나씩 네트워크를 잘라서 송전탑의 개수의 차이의 최솟값을 찾아줍니다.
  for (let i = 0; i < wires.length; i++) {
    answer = Math.min(answer, getDiffOfDivideArea(i));
    console.log(answer);
  }

  function getDiffOfDivideArea(index) {
    // 4. 자른 네트워크의 송전탑의 중복을 없애기 위해 set사용
    let leftConnection = new Set();
    // 5. wire의 첫번째 값을 담아줍니다.
    leftConnection.add(wires[index][0]);

    // 6. 한쪽(왼쪽)네트워크와 연결되어 있는 모든 부분을 가져와서 wire에 연결된 부분을 제외하고(한쪽씩 짜름) 연결된 송전탑을 한쪽(왼쪽) 네트워크에 담아줍니다.
    for (let v of leftConnection) {
      network.get(v).forEach((value) => {
        if (value !== wires[index][1]) {
          leftConnection.add(value);
        }
      });
    }
    // 양쪽 네트워크의 송전탑 개수 차이 = 총 송전탑의 개수 - 자른 한쪽 네트워크의 송전탑개수 * 2를 출력해줍니다.
    return Math.abs(n - leftConnection.size * 2);
  }
  return answer;
}

solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]); // 3

solution(4, [
  [1, 2],
  [2, 3],
  [3, 4],
]); // 0

solution(7, [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7],
]); // 1
