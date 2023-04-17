// 최빈값을(가장 자주 나오는 값) return 한다.
// 최빈값이 여러 개면 -1을 return

// function solution(array) {
//   var answer = 0;

//   // 1. map을 사용하여 값, 빈도값 을 저장해준다.

//   // 1-1 map을 생성 및 초기화 해준다.
//   const map = new Map();
//   for (let i = 0; i <= Math.max(...array); i++) {
//     map.set(i, 0);
//   }

//   // 1-2 map에 값, 빈도값을 채워넣어준다.
//   for (let i = 0; i < array.length; i++) {
//     map.set(array[i], map.get(array[i]) + 1);
//   }

//   // 2 빈도값으로 배열을 하나 만들어준다.
//   const count = Array.from(map.values());

//   // 3. 최대값을 찾아주고, 최대값이 여러개 있다면 -1을 return 한다.
//   const max = Math.max(...count);

//   if (count.indexOf(max) !== count.lastIndexOf(max)) {
//     answer = -1;
//   } else {
//     answer = count.indexOf(max);
//   }

//   return answer;
// }

// 틀린이유 : indexOf를 사용해서 이리 저리 해봤으나 40분이 지나 못품.
// 다시풀기
function solution(array) {
  var answer = 0;
  const map = new Map();
  for (let i = 0; i <= Math.max(...array); i++) {
    map.set(i, 0);
  }

  array.forEach((item) => {
    map.set(item, map.get(item) + 1);
  });

  const count = [...map.values()];

  const max = Math.max(...count);
  if (count.indexOf(max) !== count.lastIndexOf(max)) {
    answer = -1;
  } else {
    answer = count.indexOf(max);
  }
  console.log(answer);
  return answer;
}

function solution(array) {
  var answer = [];

  const map = new Map();
  array.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });

  let max = [...map].map((item) => item[1]);
  max = Math.max(...max);

  [...map].forEach((item) => {
    const [index, many] = item;
    if (many === max) {
      answer.push(index);
    }
  });
  answer = answer.length === 1 ? answer[0] : -1;

  return answer;
}

function solution(array) {
  let answer = [];
  const map = new Map();

  array.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });

  let max = Math.max(...map.values());
  [...map].map((item) => {
    if (item[1] === max) answer.push(item[0]);
  });

  if (answer.length === 1) return answer;
  else return -1;
}

// 1. map에 array의 값들을 담아줍니다.
// 2. map에서 최빈값을 찾아줍니다.
// 3. map을 배열로 만든 뒤, 순회하면서 최빈값과 같은경우 key값을 ans에 담아줍니다.
// 4. ans의 값이 1개면 ans의 첫번째 값을 출력, 그외의 경우 -1을 출력

function solution(array) {
  let map = new Map();
  let max = 0;
  array.forEach((item) => map.set(item, (map.get(item) || 0) + 1));

  for (let times of map.values()) {
    max = Math.max(max, times);
  }

  let ans = [];
  [...map].forEach((item) => {
    let [num, times] = item;
    if (times === max) ans.push(num);
  });

  if (ans.length === 1) return ans[0];
  return -1;
}

solution([1, 2, 3, 3, 3, 4]); // 3

solution([0, 1, 2, 2, 3, 3, 3, 4]); // 3

solution([1, 1, 1, 2, 3, 3, 3, 4]); // -1

solution([1, 2, 2, 2, 3, 3, 4]); // 2

solution([1, 1, 2, 2]); // -1

solution([1]); //1

solution([]); //-1

solution([1, 1]); //-1
