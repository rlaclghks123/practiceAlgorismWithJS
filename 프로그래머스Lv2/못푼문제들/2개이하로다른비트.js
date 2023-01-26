// x에 대한 함수 f(x) = x보다 크고 x와 비트가 1~2개 다른 수들 중에서 제일 작은 수
// numbers의 모든 수들에 대하여 각 수의 f값을 배열에 차례대로 담아 return

function solution(numbers) {
  var answer = [];

  function f(x) {
    // 짝수인 경우 +1을 해주면 되기 때문에 x+1을 return
    if (x % 2 === 0) return x + 1;

    // 홀수인 경우 0이 없을 수 있기 때문에 맨앞에 0을 추가해준다.
    let bit = '0' + x.toString(2);

    // 뒤에서부터 0이 있는 index를 찾아준다.
    let index = bit.lastIndexOf('0');

    // 0이 있는 부분까지 자르고, '10' 추가 후 2자리 후부터 다시 잘라서 더해준다. => 1을 더해준것임  011 => 021 => 101
    return parseInt(`${bit.slice(0, index)}10${bit.slice(index + 2)}`, 2);
  }

  answer = numbers.map((item) => f(item));
  return answer;
}

solution([2, 7]); // [3,11]
