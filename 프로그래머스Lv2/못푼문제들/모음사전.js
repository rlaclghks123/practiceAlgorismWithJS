// 사전에 알파벳모음 A E I O U만을 사용하여 만들 수 있는 길이 5이하의 모든 단어가 수록되어 있습니다.
// 사전에서 첫 단어는 A이고, 그다음은 AA ... 마지막 단어는 U입니다.
// 단어 word는 몇번째 단어인지 return

// index가 한개만큼 5개가 있기 때문에 5의 i승을 더해준다.
function sumNumber(num) {
  let sum = 0;
  for (let i = num; i >= 0; i--) {
    sum += 5 ** i;
  }
  return sum;
}

function solution(word) {
  let answer = 0;
  // 사전에 사용하는 단어를 객체를 통해 값을 지정해준다.
  const aeiou = { A: 0, E: 1, I: 2, O: 3, U: 4 };

  // word를 한단어씩 돌면서 점수를 더해준다.
  [...word].forEach((item, i) => {
    let val = aeiou[item];
    answer += val * sumNumber(4 - i) + 1;
  });

  return answer;
}

solution('AAAAE'); //  6
solution('AAAAU'); //  6
solution('AAAE'); // 10
solution('I'); // 1563
solution('EIO'); // 1189
