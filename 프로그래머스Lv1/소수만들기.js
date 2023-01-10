// 주어진 숫자 3개의 수를 더했을때 소수가 되는 경우의 개수를 return
function primeNumber(n) {
  const check = Array.from({ length: n }, () => false);
  // 0,1은 소수가 아니기 때문에 true로 해준다.
  check[0] = true;
  check[1] = true;

  for (let i = 2; i * i <= n; i++) {
    if (check[i]) continue; //소수가 아닌경우는 continue;

    // 어떤수의 배수는 약수를 가지기 때문에 소수가 아니다. 따라서 어떤수의 배수는 모두 true로 바꿔준다.
    for (let j = i + i; j <= n; j += i) {
      check[j] = true;
    }
  }

  // false인 경우 소수이므로 arr배열에 담아준다.
  return check[n];
}

function solution(nums) {
  let count = 0;

  // 1. 3중 for문을 이용해 3개의 숫자를 구해준다. 시간복잡도 = 50 x 50 x 50 = 2500 x 50 =  125000
  let len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        // 2. 3개의 숫자를 모두 더해준다.
        let sum = nums[i] + nums[j] + nums[k];

        // 3. 더해준 값이 소수인 경우 count해준다.
        if (!primeNumber(sum)) count++;
      }
    }
  }

  return count;
}
solution([1, 2, 3, 4]); //	1

solution([1, 2, 7, 6, 4]); //	4

// 다른사람 코드
// 소수를 구하는 방법이 다를뿐 나머진 다 같다.

function primecheck(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  var cnt = 0;
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      for (var w = j + 1; w < nums.length; w++) {
        if (primecheck(nums[i] + nums[j] + nums[w])) {
          cnt++;
        }
      }
    }
  }
  return cnt;
}
