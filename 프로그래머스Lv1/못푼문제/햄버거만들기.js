// 밑에서부터 빵-야채-고기-빵 순서로 포장
// 1 빵, 2 야채, 3 고기
// 포장하는 햄버거의 개수를 return
// 길이 1,000,000

function solution(ingredient) {
  var answer = 0;
  let stack = [1, 2, 3, 4];

  // ingredient의 모든값들을 stack에 담아준다.
  ingredient.forEach((item) => {
    stack.push(item);

    // stack에서 뒤에서부터 4개를 빼서 문자열로 바꾼뒤, 1231인 경우 stack에서 제거해준뒤, answer++해준다.
    if (stack.slice(-4).join('') === '1231') {
      stack.splice(-4);
      answer++;
    }
  });

  return answer;
}

// 다시풀기
function solution(ingredient) {
  var answer = 0;
  let stack = [];

  ingredient.forEach((item) => {
    stack.push(item);
    if (stack.slice(-4).join('') === '1231') {
      answer++;
      stack.splice(-4);
    }
  });
  console.log(answer);
  return answer;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]); // 2
solution([1, 3, 2, 1, 2, 1, 3, 1, 2]); // 0
