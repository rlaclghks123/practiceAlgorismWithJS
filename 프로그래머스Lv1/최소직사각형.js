// 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다.
// 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다.
// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

// 1. 가로와 세로를 비교하여 큰수를 가로로, 작은수를 세로로 옮긴다.
// 2. 가로중에 가장큰 숫자와, 세로중에 가장 큰 숫자를 곱한다.

function solution(sizes) {
  const mapped = sizes.map(([left, right]) => (left > right ? [left, right] : [right, left]));
  const rows = mapped.map(([left]) => left);
  const cols = mapped.map(([_, right]) => right);

  return Math.max(...rows) * Math.max(...cols);
}
