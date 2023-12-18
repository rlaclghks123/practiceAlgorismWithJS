// 1. absolutes에 signs의 같은 위치의 인덱스를 통해 양수인 경우 총합에서 해당값을 더해준다.
// 2. absolutes에 signs의 같은 위치의 인덱스를 통해 음수인 경우 총합에서 해당값을 빼준다.
// 3. 총 합을 출력한다.

function solution(absolutes, signs) {
  const result = absolutes.reduce((acc, cur, i) => {
    if (signs[i]) return acc + cur;
    return acc - cur;
  }, 0);

  return result;
}
