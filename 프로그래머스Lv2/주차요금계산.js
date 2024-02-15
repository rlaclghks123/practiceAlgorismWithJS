// fee : [기본시간(분), 기본요금(원), 단위시간(분), 단위요금(원)]
// records : [시각, 차량번호, 내역]

// 1. 입/출차 기록을 통해 차량번호에 따른 총 주차이용시간을 구한다.
// 2. 1에서 구한 차량번호와 총 시간을 차량번호가 낮은 순으로 정렬한다.
// 2-1. 정렬 후 총 시간만 매핑한다.

// 3. 총 시간을 가지고 총 요금을 계산한다.

function solution(fees, records) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  const calculatedList = calculateTime(records);
  const sortedCalculatedList = calculatedList.sort((a, b) => a[0] - b[0]).map(([_, time]) => time);

  const calculatedFee = sortedCalculatedList.map((totalTime) => {
    return totalTime > defaultTime
      ? defaultFee + Math.ceil((totalTime - defaultTime) / unitTime) * unitFee
      : defaultFee;
  });

  return calculatedFee;
}

function calculateTime(records) {
  const db = new Map();
  const ans = new Map();

  records.forEach((info) => {
    const [curTime, carNumber, inAndOut] = info.split(' ');
    const [hour, min] = curTime.split(':');
    const curTotalTime = Number(hour) * 60 + Number(min);

    if (inAndOut === 'IN') {
      db.set(carNumber, curTotalTime);
    }

    if (inAndOut === 'OUT') {
      const inputTotalTime = db.get(carNumber);
      db.delete(carNumber);
      const calculateTime = curTotalTime - inputTotalTime;
      ans.set(carNumber, (ans.get(carNumber) || 0) + calculateTime);
    }
  });

  // 출차하지 않은 차들 처리
  [...db].forEach(([carNumber, time]) => {
    const calculateTime = 24 * 60 - time - 1;
    ans.set(carNumber, (ans.get(carNumber) || 0) + calculateTime);
    db.delete(carNumber);
  });

  return [...ans];
}
