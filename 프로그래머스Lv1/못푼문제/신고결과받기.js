// function solution(id_list, report, k) {
//   var answer = [];

//   // 1. set을 통해 같은 신청을 여러번 한걸 없애준다.
//   const reports = [...new Set(report)];

//   const counts = new Map();

//   // 2. 신고당한사람과, 횟수를 counts에 담아준다.
//   reports.forEach((item) => {
//     const [reporter, reportee] = item.split(' ');

//     counts.set(reportee, (counts.get(reportee) || 0) + 1);
//   });

//   const result = new Map();
//   // 3. reports의 신고 당한사람의 횟수가 k번 이상인 경우 result에 신고한 사람, 횟수를 담아준다.
//   reports.forEach((item) => {
//     const [reporter, reportee] = item.split(' ');
//     if (counts.get(reportee) >= k) {
//       result.set(reporter, (result.get(reporter) || 0) + 1);
//     }
//   });

//   // 4. id_list를 돌면서, result에 신고한사람이 있는지 확인하고 없으면 0을 담아준다.
//   return id_list.map((item) => result.get(item) || 0);
// }

function solution(id_list, report, k) {
  var answer = [];

  const reports = [...new Set(report)];

  const counts = new Map();

  reports.forEach((item) => {
    const [reporter, reportee] = item.split(' ');
    counts.set(reportee, (counts.get(reportee) || 0) + 1);
  });

  const result = new Map();
  reports.forEach((item) => {
    const [reporter, reportee] = item.split(' ');

    if (counts.get(reportee) >= k) {
      result.set(reporter, (result.get(reporter) || 0) + 1);
    }
  });

  return id_list.map((item) => result.get(item) || 0);
}

solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
  2
); // [2,1,1,0]

solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3); //	[0,0]

// 다시풀기
function solution(id_list, report, k) {
  var answer = [];

  const reports = new Set(report);

  const counts = new Map();

  reports.forEach((item) => {
    const [reporter, reportee] = item.split(' ');
    counts.set(reportee, (counts.get(reportee) || 0) + 1);
  });

  const result = new Map();
  reports.forEach((item) => {
    const [reporter, reportee] = item.split(' ');
    if (counts.get(reportee) >= k) {
      result.set(reporter, (result.get(reporter) || 0) + 1);
    }
  });

  return id_list.map((item) => result.get(item) || 0);
}
