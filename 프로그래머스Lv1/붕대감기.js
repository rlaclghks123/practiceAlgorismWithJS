// 설명은 아래에

function solution(bandage, health, attacks) {
  const [needTime, recoverPerSecond, plusRecover] = bandage;
  const lastAttackTime = Math.max(...attacks.map(([a, b]) => a));

  let attackIdx = 0;
  let successCount = 0;
  let curHealth = health;

  for (let curTime = 0; curTime <= lastAttackTime; curTime++) {
    const [attackTime, attackDamage] = attacks[attackIdx];
    // 공격
    if (attackTime === curTime) {
      attackIdx++;
      curHealth -= attackDamage;
      successCount = 0;
      if (curHealth <= 0) return -1;
      continue;
    }
    // 회복
    if (curHealth + recoverPerSecond <= health) {
      curHealth += recoverPerSecond;
      successCount += 1;

      if (successCount === needTime && curHealth + plusRecover <= health) {
        successCount = 0;
        curHealth += plusRecover;
      }

      if (successCount === needTime && curHealth + plusRecover > health) {
        successCount = 0;
        curHealth = health;
      }
    }

    if (curHealth + recoverPerSecond > health) {
      curHealth = health;
    }
  }

  return curHealth;
}

// 용어 체크
// [시전 시간, 초당 회복량, 추가 회복량]  === [needTime, recoverPerSecond, plusRecover]
// 현재시간 === curTime
// 마지막 공격 시간 === lastAttackTime
// 공격idx => attack의 정보를 얻기 위한 idx === attackIdx
// 연속성공 횟수 체크 변수 === successCount
// 현재 체력  === curHealth
// [공격 시간, 피해량] === [attackTime, attackDamage]

// 수도코드
// 1. 0초부터 attacks의 마지막 공격시간까지 순회한다.
// 2. 공격
// 2-1. attackIdx를 통해 [공격 시간, 피해량]을 받아온다.
// 2-2. 만약 공격시간이 현재시간(i)와 같다면
// 2-2-1. attackIdx를 +1을 증가시킨다.(공격받을때만 증가)
// 2-2-2. 현재 체력에서 피해량을 빼준다.
// 2-2-3. 연속 성공시간을 0으로 초기화해준다.
// 2-2-4. 만약 체력이 0이하가 된다면 -1을 출력해준다.
// 2-2-5. 공격을 받아도 체력이 남아있다면 continue를 통해 회복없이 다음 시간으로 넘어간다.

// 3. 회복
// 3-1. 현재체력 + 초당 회복력이 최대체력 이하일 경우
// 3-1-1. 현재체력에 초당회복력을 더해준다.
// 3-1-2. 성공횟수를 +1 증가시켜준다.
// 3-1-3. 만약 성공횟수가 붕대 시전 시간과 같다면
// 3-1-3-1. 성공횟수를 0으로 초기화해준다.
// 3-1-3-2. 현재체력 + 추가 회복량이 최대체력 이하라면 현재체력에 추가회복량을 더해준다.
// 3-1-3-2. 현재체력 + 추가 회복량이 최대체력 이상이면 현재체력을 최대체력으로 바꿔준다.
// 3-2. 현재체력 + 초당 회복력이 최대체력 이상일 경우
// 3-2-1. 현재 체력을 최대체력으로 바꿔준다.
