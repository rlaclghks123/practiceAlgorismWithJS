// 머쓱이 조카가 발음할 수 있는 단어의 개수를 return
// "aya", "ye", "woo", "ma"

function solution(babbling) {
  var answer = 0;

  // 1. 조카가 발음할 수 있는 단어들을 배열에 담아준다.
  const words = ['aya', 'ye', 'woo', 'ma'];

  // 2. 조카가 한 말들의 요소를 forEach로 확인한다.
  babbling.forEach((item) => {
    // 3. 조카가 할수있는 단어가 4개이므로 4번 반복하여 조카가 말할수 있는 단어면 1 로 바꿔준다.
    for (let i = 0; i < 4; i++) {
      item = item.replace(a[i], '1');
    }

    // 4. 단어를 숫자타입으로 바꾸고, isNaN이 아닌경우 개수를 count한다.
    !isNaN(Number(item)) && answer++;
  });
  return answer;
}

solution(['aya', 'yee', 'u', 'maa', 'wyeoo']); // 1

solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']); // 3

// 다른사람의 코드

function solution(babbling) {
  var answer = 0;

  // 1. 정규표현식을 통해 조카가 발음할수있는 단어만 찾을 수 있도록 한다.
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    // 2. 조카가 한 말이 조카가 발을함 수 있는 단어들만 있는경우 count해준다.
    if (regex.test(word)) answer++;
  });

  return answer;
}
