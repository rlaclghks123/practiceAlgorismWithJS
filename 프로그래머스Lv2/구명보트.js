// 1. 오름차순으로 정렬한다.
// 2. 투포인터 알고리즘을 통해 가장 왼쪽과 가장 오른쪽부터 시작하여 확인한다.
// 3. 만약 가장 왼쪽값과 가장 오른쪽 값이 limit보다 작거나 같으면 2개의 투 포인터를 움직인다.(2명 구출 가능한 경우)
// 4. 만약 가장 왼쪽값과 가장 오른쪽 값이 limit보다 크다면 가장 오른쪽값(무거운 사람)만 왼쪽으로 이동한다. (1명만 구출 가능한 경우)
// 5. 이동 후 count해준다.
// 6. 총 count된 값을 출력한다.

function solution(people, limit) {
  let left = 0;
  let right = people.length - 1;
  let cnt = 0;

  people.sort((a, b) => a - b);

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      right--;
      left++;
    } else if (people[left] + people[right] > limit) {
      right--;
    }
    cnt++;
  }

  return cnt;
}
