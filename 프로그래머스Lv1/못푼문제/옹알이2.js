// 아래의 네가지 발음과 네가지 발음을 조합해서 만들 수 있는 발음밖에 못함
// babbling 중 발음할 수 있는 단어의 개수를 return
// 같은 발음이 연속되면 안됨

function solution(babbling) {
  // 1. 옹알이 중 같은 단어가 연속으로 나타난 경우를 찾아준다.
  const regexp1 = /(aya|ye|woo|ma)\1+/;

  // 2. 옹알이 중 1개이상 존재하는 경우를 찾아준다.
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  // 3. 연속으로 나타나지 않으면서, 옹알이 중 1개이상 존재하는 경우 모두 더해준다.
  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}

solution(['aya', 'yee', 'u', 'maa']); // 1
solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']); // 2

solution(['woayao']); // 0;
