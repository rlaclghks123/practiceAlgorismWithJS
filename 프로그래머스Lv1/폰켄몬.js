// 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
// 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다.

// 1. set을 통해 중복된 종류를 제거한다.
// 2. n/2개보다 중복된 종류가 많다면 n/2개를 출력
// 3. n/2개보다 중복된 종류가 적다면 중복된 종류를 출력

function solution(nums) {
  const set = new Set(nums);
  const phoneCatMon = set.size;
  const max = nums.length / 2;

  return max < phoneCatMon ? max : phoneCatMon;
}
