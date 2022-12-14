function solution(n, k) {
  var answer = 0;
  // 양꼬치는 1인분에 12,0000원
  // 음료수는 2,000원
  // 양꼬치를 10인분을 먹으면 음료수 하나 서비스

  // 1. 총 먹은 양꼬치를 계산한다.
  const sheep = n * 12000;

  // 2. 서비스를 제외하고 먹은 음료수를 계산한다
  const drink = (k - Math.floor(n / 10)) * 2000;

  // 3. 양꼬치와 음료수의 가격을 더해준다.
  answer = sheep + drink;
  return answer;
}

solution(10, 3); //124,000
solution(64, 6); //768,000
