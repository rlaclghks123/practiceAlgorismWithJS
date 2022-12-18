function solution(hp) {
  // 장군개미는 5, 병정개미는 3, 일개미는 1의 공격력
  const ants = [5, 3, 1];
  let answer = 0;

  ants.map((attack) => {
    let numberOfAnts = 0;

    if (hp > 0) {
      numberOfAnts = Math.floor(hp / attack);
      hp %= attack;
    }
    answer += numberOfAnts;
  });

  return answer;
}

solution(23); //5

solution(24); //6

solution(999); //201
