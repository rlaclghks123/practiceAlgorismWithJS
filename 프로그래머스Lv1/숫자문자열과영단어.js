// 자릿수를 영단어로 바꾼 카드를 통해 원래 숫자를 찾아 return

const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
  var answer = 0;

  // 1.arr에 있는 값이 포함되어있는지 확인한다.
  arr.forEach((item, index) => {
    // 2. 포함되어 있는 단어가 있는경우 반복하여 item을 arr의 index값으로 변경해준다.
    while (s.includes(item)) {
      s = s.replace(item, index);
    }
  });

  // 3. 문자열을 숫자로 바꿔준뒤 출력한다.
  return Number(s);
}

solution('one4seveneight'); // 1478
solution('23four5six7'); // 234567
solution('2three45sixseven'); // 	234567
solution('123'); // 123

// 다른사람의 코드
//  비슷한데 numbers[i]를 통해 단어를 split한뒤, answer에 값을 i로 붙혀줬다.

function solution(s) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
