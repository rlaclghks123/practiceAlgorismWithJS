// 동류항끼리 더한 결괏값을 문자열로 return
// 변수는 x만 존재합니다.
// function solution(polynomial) {
//   const answer = [];

//   // 1. x를 기준으로 분리 해준다.
//   const split = polynomial.split(' + ');

//   // 2. x가 포함된 항(일차항)을 구해준다.
//   const linearTerm = split

//     // 2-1 filter를 통해 x가 있는 항만 찾아 배열로 만든다.
//     .filter((f) => f.includes('x'))

//     // 2-2 x를 제거해주며, x의 지수가 1인경우 1을 추가해준다.
//     .map((item) => item.replace('x', '') || '1')

//     // 2-3 일차항의 값들을 더해준다.
//     .reduce((acc, cur) => acc + Number(cur), 0);

//   // 3 상수항을 구해준다. 3-1 !isNaN을 통해 숫자만 가져온뒤, 다 더해준다.
//   const constTerm = split.filter((num) => !isNaN(num)).reduce((acc, cur) => acc + Number(cur), 0);

//   // 4. x항(일차항)이 있는경우 && x항의 지수가 1인경우 1을 없애주고 아닌경우 x포함된 값을 answer에 push 한다.
//   linearTerm && answer.push(`${linearTerm === 1 ? '' : linearTerm}x`);

//   // 5. 상수항이 있는경우 && answer에 상수값을 넣어준다.
//   constTerm && answer.push(constTerm);

//   // 6. 배열의 요소를 + 와 함께 문자열로 만들어준뒤 출력한다.
//   return answer.join(' + ');
// }

// 틀린이유: +로 split하고 이렇게 저렇게 시도해봤으나 40분을 넘겨 다른분의 코드를 확인
// 문자열을 다루는 실력이 부족했었던것같다.
// 다시풀기

function solution(polynomial) {
  var answer = [];

  const arr = polynomial.split(' + ');

  let xNum = arr
    .filter((item) => item.includes('x'))
    .map((item) => item.replace('x', '') || '1')
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  const num = arr.filter((item) => !isNaN(item)).reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  if (xNum) answer.push(xNum === 1 ? 'x' : `${xNum}x`);
  if (num) answer.push(num);
  return answer.join(' + ');
}

function solution(polynomial) {
  let answer = [];

  let xNum = polynomial
    .split(' + ')
    .filter((f) => f.includes('x'))
    .map((item) => item.replace('x', '') || '1')
    .reduce((acc, cur) => acc + Number(cur), 0);

  if (xNum) answer.push(xNum === 1 ? 'x' : xNum + 'x');

  let num = polynomial
    .split(' + ')
    .filter((item) => !isNaN(item))
    .reduce((acc, cur) => acc + Number(cur), 0);

  if (num) answer.push(num);
  return answer.join(' + ');
}

function solution(polynomial) {
  let ans = [];
  let xArr = polynomial
    .split(' + ')
    .filter((item) => item.includes('x'))
    .map((item) => {
      if (item === 'x') return 1;
      return +item.replace('x', '');
    })
    .reduce((a, c) => (a += c), 0);

  let conArr = polynomial
    .split(' + ')
    .filter((item) => !isNaN(item))
    .map(Number)
    .reduce((a, c) => (a += c), 0);

  if (xArr === 1) {
    ans.push('x');
  } else if (xArr !== 0) {
    ans.push(xArr + 'x');
  }

  if (conArr === 0) {
    console.log(ans.join(''));
    return;
  } else {
    if (ans.length === 0) {
      ans.push(conArr);
    } else {
      ans.push(' + ' + conArr);
    }
    console.log(ans.join(''));
  }
}

solution('x + x + x'); // 	"3x"

solution('x'); // 	"x"

solution('x + x + 90x'); // 	"92x"

solution('012x + 001'); // 	"12x + 1"

solution('1 + 1'); // 2

solution('x + 7 + 15'); // x + 22

solution('x + 7x + 15x + 1'); // 23x + 1
