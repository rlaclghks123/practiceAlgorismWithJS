// 1. 오늘 총 시간을 구합니다. 총시간 : year*12*28 + month*12 + day
// 2. terms를 통해 `약간 종류 : 유효기간` 형태로 Map을 만들어 줍니다.
// 3. privacies를 순회하며 오늘 총시간과, 유효기간의 총 시간을 구합니다.
// 4. 유효기간이 남아있는 번호를 찾아 출력합니다.

function getTermMap(terms) {
  const map = new Map();

  terms.forEach((term) => {
    const [target, month] = term.split(' ');
    map.set(target, Number(month));
  });

  return map;
}

function calculateTotalTime(dateString, changeMonth = 0) {
  const [year, month, day] = dateString.split('.');
  const totalMonths = Number(year) * 12 + Number(month) + changeMonth;
  return totalMonths * 28 + Number(day);
}

function solution(today, terms, privacies) {
  const todayTotalTime = calculateTotalTime(today);
  const termMap = getTermMap(terms);
  const ans = [];

  privacies.forEach((privacy, idx) => {
    const [date, term] = privacy.split(' ');
    const privaciesTotalTime = calculateTotalTime(date, termMap.get(term));

    if (todayTotalTime >= privaciesTotalTime) ans.push(idx + 1);
  });

  return ans;
}
