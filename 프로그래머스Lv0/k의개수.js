// i부터 j까지 k가 몇번 등장하는지 return

function solution(i, j, k) {
  var answer = 0;
  const start = i;
  const end = j;

  // 1. i부터 j까지 모든 숫자를 문자로 바꿔 배열안에 넣는다.
  for (let l = start; l <= end; l++) {
    l.toString()
      .split('')
      .forEach((item) => {
        // 2. 각각의 문자 중 k값이 포함되어 있으면 count한다.
        if (item.includes(`${k}`)) {
          answer++;
        }
      });
  }

  // 3. 출력한다.
  return answer;
}

solution(1, 13, 1); //6

// solution(10, 50, 5); //5

// solution(3, 10, 2); //0
