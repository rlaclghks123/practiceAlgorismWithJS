// 1~n번의 개인정보
// 모든달은 28일까지 있다고 가정
// 오늘, 유효기간, 개인정보 수집일자를 인자로 받는다.
// result는 1부터~

function solution(today, terms, privacies) {
  var answer = [];
  let key = {};
  let [todayYear, todayMonth, todayDate] = today.split('.').map(Number);
  const todaySum = todayYear * 12 * 28 + todayMonth * 28 + todayDate;

  terms.forEach((item) => {
    const [type, month] = item.split(' ');
    key = { ...key, [type]: +month };
  });

  privacies.forEach((item, i) => {
    let [startDate, type] = item.split(' ');
    let [year, month, date] = startDate.split('.').map(Number);

    const sum = year * 12 * 28 + month * 28 + date + key[type] * 28;
    if (sum <= todaySum) answer.push(i + 1);
  });

  return answer;
}

solution(
  '2022.05.19',
  ['A 6', 'B 12', 'C 3'],
  ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
); // [1, 3]

solution(
  '2020.01.01',
  ['Z 3', 'D 5'],
  ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z']
); // [1, 4, 5]

// 다른사람의 코드
// 날짜를 slice하지 않고 구조분해할당으로 구했다.
//

// function solution(today, terms, privacies) {
//   var answer = [];
//   var [year, month, date] = today.split('.').map(Number);
//   var todates = year * 12 * 28 + month * 28 + date;
//   var t = {};
//   terms.forEach((e) => {
//     let [a, b] = e.split(' ');
//     t[a] = Number(b);
//   });

//   privacies.forEach((e, i) => {
//     var [day, term] = e.split(' ');
//     day = day.split('.').map(Number);
//     var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
//     if (dates <= todates) answer.push(i + 1);
//   });

//   return answer;
// }
