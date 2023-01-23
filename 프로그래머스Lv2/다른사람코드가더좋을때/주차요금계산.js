// 입차, 출차 기록이 주어졌을 때 차량별로 주차 요금을 계산

// 요금표
// 기본 시간(분)	기본 요금(원)	단위 시간(분)	단위 요금(원)

// 누적 주차 시간이 기본 시간이하라면, 기본 요금을 청구합니다.
// 누적 주차 시간이 기본 시간을 초과하면, 기본 요금에 더해서, 초과한 시간에 대해서 단위 시간 마다 단위 요금을 청구합니다.
// 초과한 시간이 단위 시간으로 나누어 떨어지지 않으면, 올림합니다.
// HH:MM은 00:00부터 23:59까지 주어집니다.

function solution(fees, records) {
  // fees를 구조분해 할당을 통해 원하는 정보들을 변수에 담아준다.
  const [basicMinute, basicFee, perMinute, perFee] = fees;

  // map에 자동차의 입출차 기록을 남긴다.
  const map = new Map();

  // result에 최종 자동차의 기록을 남긴다.
  const result = new Map();

  // In일 경우 map에, Out일 경우 result에 자동차의 기록을 담아준다. 기록은 id, time을
  records.forEach((item) => {
    const [time, id, type] = item.split(' ');
    const split = time.split(':');
    const totalTime = +split[0] * 60 + +split[1];

    if (type === 'IN') {
      map.set(id, totalTime);
    } else if (type === 'OUT') {
      result.set(id, (result.get(id) || 0) + (totalTime - map.get(id)));
      map.set(id, null);
    }
  });

  // map에 남아있는 차들 (입차는 했는데 나가질 않은 차들)을 처리해준다.
  [...map].forEach((item) => {
    const [id, time] = item;
    if (time == null) return;
    result.set(id, (result.get(id) || 0) + (23 * 60 + 59 - time));
  });

  let answer = [];
  // 자동차의 번호가 낮은순으로 정렬해준다.
  let sort = [...result].sort((a, b) => a[0] - b[0]);

  // 정렬한 result값들을 기본시간, 기본요금, 분당 요금 등으로 계산을 해서 answer에 담아준다.
  sort.forEach((item) => {
    const [id, time] = item;
    const total = basicFee + Math.ceil((time - basicMinute) / perMinute) * perFee;
    total <= basicFee ? answer.push(basicFee) : answer.push(total);
  });

  return answer;
}

solution(
  [180, 5000, 10, 600],
  [
    '05:34 5961 IN',
    '06:00 0000 IN',
    '06:34 0000 OUT',
    '07:59 5961 OUT',
    '07:59 0148 IN',
    '18:59 0000 IN',
    '19:09 0148 OUT',
    '22:59 5961 IN',
    '23:00 5961 OUT',
  ]
); // [14600, 34400, 5000]

solution(
  [120, 0, 60, 591],
  ['16:00 3961 IN', '16:00 0202 IN', '18:00 3961 OUT', '18:00 0202 OUT', '23:58 3961 IN']
); // [0, 591]

solution([1, 461, 1, 10], ['00:00 1234 IN']); // [14841]

// 다른사람 코드
function solution(fees, records) {
  const parkingTime = {};
  records.forEach((r) => {
    let [time, id, type] = r.split(' ');
    let [h, m] = time.split(':');
    time = h * 1 * 60 + m * 1;
    if (!parkingTime[id]) parkingTime[id] = 0;
    if (type === 'IN') parkingTime[id] += 1439 - time;
    if (type === 'OUT') parkingTime[id] -= 1439 - time;
  });
  const answer = [];
  for (let [car, time] of Object.entries(parkingTime)) {
    if (time <= fees[0]) time = fees[1];
    else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}
