// 중앙에 물을 배치하고 한 선수는 맨왼쪽부터 맨오른쪽, 다른선수는 맨 오른쪽부터 맨왼쪽으로
// 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수배열 food를 통해 대회를 위한 음식배치 문자열 reutrn

function solution(food) {
  var answer = '';
  let test = [];
  let test2 = [];
  food.forEach((item, index) => {
    if (index === 0) return;
    test.push(index.toString().repeat(Math.floor(item / 2)));
    test2.unshift(index.toString().repeat(Math.floor(item / 2)));
  });
  answer += test.join('');
  answer += '0';
  answer += test2.join('');

  return answer;
}

solution([1, 3, 4, 6]); //	"1223330333221"

solution([1, 7, 1, 2]); //	"111303111"

// 다른사람의 코드
// food를 반복하여 문자로 바꾸고 절반값을 res에 더해준다.
// 0을 더한 뒤,  res를 뒤집은 값을 다시 더해준다.

// function solution(food) {
//   let res = '';
//   for (let i = 1; i < food.length; i++) {
//     res += String(i).repeat(Math.floor(food[i] / 2));
//   }

//   return res + '0' + [...res].reverse().join('');
// }

function solution(food) {
  var answer = '';

  for (let i = 1; i < food.length; i++) {
    answer += i.toString().repeat(Math.floor(food[i] / 2));
  }
  answer = answer + '0' + [...answer].reverse().join('');
  console.log(answer);
  return answer;
}
