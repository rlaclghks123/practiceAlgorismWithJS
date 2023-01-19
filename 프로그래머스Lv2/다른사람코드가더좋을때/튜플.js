// 순서있는 열거 또는 어떤 순서를 따르는 요소들의 모음을 튜플
// 튜플은 다음과 같은 성질을 가지고 있습니다.

// 중복된 원소가 있을 수 있습니다. ex : (2, 3, 1, 2)
// 원소에 정해진 순서가 있으며, 원소의 순서가 다르면 서로 다른 튜플입니다. ex : (1, 2, 3) ≠ (1, 3, 2)
// 튜플의 원소 개수는 유한합니다.

function solution(s) {
  var answer = [];
  const set = new Set();

  s = s.replaceAll('{', ' ').replaceAll('}', ' ');
  s.split(' ').map((item) => {
    if (item === ',' || item === '' || item === undefined) return;
    answer.push(item);
  });

  answer
    .sort((a, b) => {
      return a.length - b.length;
    })
    .map((item) => {
      item.split(',').forEach((item) => set.add(item));
    });
  return [...set].map(Number);
}

solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'); // [2, 1, 3, 4];
solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'); // [2, 1, 3, 4];
solution('{{20,111},{111}}'); // [111, 20];
solution('{{123}}'); // [123];
solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'); // [3, 2, 4, 1];

// 다른사람의 코드
// 나랑 비슷하지만, JSON.parse를 통해 문자열을 객체로 변경했고, 정규표현식으로 나보다 더 깔끔한 코드 구현

function solution(s) {
  let answer = [];
  // 집합의 사이즈가 1인 애가 맨 첫번째
  // 2인 애에서 1번째 원소를 빼면 걔가 두번째
  // 3인 애에서 2번원소를 빼면 걔가 3번째
  // n 사이즈 집합에서 n-1 사이즈 집합을 빼면 그 원소가 n번째 튜플의 원소
  // 문자열을 배열로 변경
  // 배열의 사이즈 순으로 정렬
  // n 배열의 원소와 n + 1 배열의 원소를 비교해서 남는 애를 임시 배열에 저장
  // 이걸 맨 끝까지 반복, 만약 배열의 마지막 원소일 경우 배열 사이즈도1 값도 1이므로 얘가 임시배열의 맨 첫번째여야함
  // 임시배열은 큐 형태로, 앞쪽부터 자료를 넣고 뒤쪽으로 민다.

  let newArr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'));
  newArr.sort((a, b) => {
    return a.length - b.length;
  });

  let temp = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      temp.push(newArr[i][j]);
    }
  }
  answer = [...new Set(temp)];
  return answer;
}
