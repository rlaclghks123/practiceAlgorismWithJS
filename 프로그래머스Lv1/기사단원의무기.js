// 자신의 기사 번호의 '약수 개수'에 해당하는 공격력을 가진 무기를 구매하려 합니다.
// 단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.
// 무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다. 그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.
// number가 5인 경우
// 1 : 1 => 1
// 2 : 1, 2 => 2
// 3 : 1, 3 => 2
// 4 : 1, 2, 4 => 3
// 5 : 1, 5 => 2
// [1,2,2,3,2]

// 1. 1부터 number까지 약수의 개수를 모두 구한다.
// 2. 1에서 구한 약수의 개수 중 공격력 제한 수치보다 큰 경우 협약기관에서 정한 공격력으로 바꾼다.
// 3. 모두 더해준다.

function getYaksuCnt(num) {
  let temp = 0;

  for (let i = 1; i * i <= num; i++) {
    if (i * i === num) {
      temp++;
    } else if (num % i === 0) temp += 2;
  }
  return temp;
}

function solution(number, limit, power) {
  const yaksuArr = [];

  for (let i = 1; i <= number; i++) {
    yaksuArr.push(getYaksuCnt(i));
  }

  return yaksuArr.map((cnt) => (cnt <= limit ? cnt : power)).reduce((a, c) => a + c, 0);
}
