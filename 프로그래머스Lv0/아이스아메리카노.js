function solution(money) {
  // 아메리카노 한잔에 5500원
  // 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 리턴한다.
  var answer = [];
  let possible = 0;

  while (money >= 5500) {
    possible++;
    money -= 5500;
  }

  answer = [possible, money];
  return answer;
}

solution(5500); // [1,0]
solution(15000); // [2, 4000];
