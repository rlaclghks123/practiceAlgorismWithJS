// 모든 트럭이 다리를 건너려면 최소 몇초가 걸리는지 알아내는것
// 다리는 트럭이 최대 bridge_length대 올라갈 수 있다
// 다리는 weight 이하까지의 무게를 견딜 수 있다. 단 다리에 완전히 오르지 않는 트럭의 무게는 무시
//

function solution(bridge_length, weight, truck_weights) {
  // 큐에 [트럭의무게, 나갈 시간] 을 담아준다.
  let q = [[0, 0]];

  // 다리에 트럭이 있는 무게를 구해준다.
  let weightOnBridge = 0;

  // 시간을 담을 변수를 만든다.
  let time = 0;

  // 큐에 트럭이 있거나 truck_weights가 남아있을때까지 반복해준다.
  while (q.length > 0 || truck_weights.length > 0) {
    // 큐에 있는 트럭이 나갈시간이 됐으면 다리의 무게에서 나갈 트럭을 빼준다.
    if (time === q[0][1]) weightOnBridge -= q.shift()[0];

    // 만약 truck_weights의 무게 +  weightOnBridge의 무게가 weight 이하면 다리에 올려주고, q에 담아준다.
    if (truck_weights[0] + weightOnBridge <= weight) {
      weightOnBridge += truck_weights[0];
      q.push([truck_weights.shift(), time + bridge_length]);
    }
    // 만약 truck_weights의 무게 +  weightOnBridge의 무게가 weight 초과이면 큐의 제일 처음값의 시간으로 시간점프 해준다.
    else {
      // 단 이때 -1을 하는 이유는 밑에 코드에서 ++를 해주기 때문이다.
      if (q[0]) time = q[0][1] - 1;
    }
    time++;
  }

  return answer;
}

solution(2, 10, [7, 4, 5, 6]);
// 8
solution(100, 100, [10]);
// 101
solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
// 110
