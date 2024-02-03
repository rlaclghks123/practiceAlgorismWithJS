// 1. progresses, speeds를 통해 배포까지 남은 날짜들을 담은 배열을 만들어준다.
// 2. 남은 날짜를 담은 배열을 순회하면서 배포마다 몇 개의 기능이 배포되는지를 담아준다.
// 2-1. 만약 최대 배포날짜가 현재 기능의 배포날보다 크거나 같다면 count해준다.
// 2-2. 만약 최대 배포날짜가 현재 기능의 배포날보다 작다면
// 2-2-1. 최대 배포날짜를 현재 기능의 배포날로 바꿔준다.
// 2-2-2. 현재까지 count값을 ans에 담아준다.
// 2-2-3. count값을 다시 1로 초기화 해준다.
// 3. 마지막 count값을 ans에 담아준다.
// 4. 총 count를 담은 배열을 출력한다.

function solution(progresses, speeds) {
  const restDates = progresses.map((num, i) => Math.ceil((100 - num) / speeds[i]));
  const result = [];

  let max = restDates[0];
  let count = 1;

  restDates.slice(1).forEach((num) => {
    if (max >= num) {
      count++;
    }

    if (max < num) {
      max = num;
      result.push(count);
      count = 1;
    }
  });

  result.push(count);

  return result;
}
