// 놀이기구의 원래 이용로 price원
// N번 째 이용한다면 원래 이용료의 N배를 받는다.  처음 100이었다면 두번째는 200
// 놀이기구를 count번 타면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지 return
// 금액이 부족하지 않으면 0을 return

function solution(price, money, count) {
  var answer = 0;

  // 1. count만큼 가격을 올려서 총 금액을 더해준다.
  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }

  // 소지한 금액이 총 지출금액보다 크거나 같으면 0, 아닌경우 모자란 금액을 answer에 담아준다.
  answer <= money ? (answer = 0) : (answer = answer - money);

  console.log(answer);
  return answer;
}

solution(3, 20, 4); // 	10

solution(2, 1, 2); // 	10
