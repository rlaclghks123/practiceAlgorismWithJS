// 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매 원함
// 이웃나라와의 협약에 의해 공격력 제한수치를 정함
// 제한 수치보다 큰 공격력을 가진 무기를 구매해야하는 기사는 협약기관에서 정한 공격력을 가진 무기를 구매
// 제한수치 < 약수의 개수 ====> 제한수치 초과 사용할 공격력이 2라면  결론은 2를 구매

function divisor(n) {
  let temp = 0;
  //약수를 구하고 싶은 숫자 n에 대해 temp값이 n보다 작거나 같은경우 while문을 통해 반복
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      temp++;
    } else if (n % i === 0) temp += 2;
  }
  return temp;
}

function solution(number, limit, power) {
  let answer = 0;
  // 1. number의 약수의 개수를 구한다.
  for (let i = 1; i <= number; i++) {
    let divisors = divisor(i);
    divisors = divisors > limit ? power : divisors;
    // 2. 약수의 개수가 limit을 넘으면 power로 바꾸고 아니면 약수의 개수 그대로 간다.

    // 3. 약수의 개수를 다 더해준다.
    answer += divisors;
  }
  console.log(answer);
  return answer;
}

solution(5, 3, 2); //10
solution(10, 3, 2); //	21

// 5인 경우 약수의 개수 [1, 1,2,  1,3, 1,2,4, 1,5 ] 즉 [1,2,2,3,2]개 이며 제한이 넘지 않아서 총 합인 10을 return

// 10인 경우 [1,2,2,3,2,4,2,4,3,4]이며, 제한이 3이므로 [1,2,2,3,2,2,2,2,3,2]로 바뀌고, 총합인 21을 return
