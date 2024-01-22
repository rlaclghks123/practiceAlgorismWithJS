// 1. 중복된 신고를 막기 위해 set에 담아 중복을 제거한다.
// 2. 신고를 받은 횟수가 k이상인 정지된 사람들을 찾아준다.
// 3. id_list들을 순회하면서 자신들이 신고한 신고자들이 몇 명 정지됐는지 확인하여 출력한다.

function solution(id_list, report, k) {
  const duplicated = deleteDuplicate(report);
  const bannedPeople = getBannedPeople(duplicated, k);
  const ans = new Map();

  bannedPeople.forEach((reportee) => ans.set(reportee, (ans.get(reportee) || 0) + 1));

  return id_list.map((reporter) => (ans.has(reporter) ? ans.get(reporter) : 0));
}

function deleteDuplicate(report) {
  const set = new Set();
  report.forEach((reported) => set.add(reported));

  return set;
}

function getBannedPeople(duplicated, k) {
  const map = new Map();

  [...duplicated].forEach((reported) => {
    const [reporter, reportee] = reported.split(' ');
    map.has(reportee)
      ? map.set(reportee, [...map.get(reportee), reporter])
      : map.set(reportee, [reporter]);
  });

  return [...map]
    .filter(([_, reporters]) => reporters.length >= k)
    .flatMap(([_, reporters]) => reporters);
}
