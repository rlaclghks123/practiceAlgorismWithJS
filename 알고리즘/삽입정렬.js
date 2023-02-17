function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // 정렬되지 않은 배열의 첫번째 값을 찾아줍니다.
    let cur = array[i];

    // 정렬된 배열의 가장 오른쪽, 즉 정렬되지 않은 배열의 첫번째 값 바로 왼쪽 값을 찾습니다.
    let left = i - 1;

    // while문을 통해 index값이 0 이상이면서, 찾은값을 적절한 위치(정렬이 되도록)에 삽입 해줍니다.
    while (left >= 0 && array[left] > cur) {
      array[left + 1] = array[left];
      left--;
    }

    // 만약 정렬이 되어있다면, 현재값을 정렬된 가장 오른쪽 값으로 바꿔줍니다.
    array[left + 1] = cur;
    console.log(`${i}회전: ${array}`);
  }
  return `최종 정렬 배열 => ${array}`;
}
console.log(`정렬 전 => ${[5, 2, 4, 3, 1]}`);
console.log(' ');
console.log(insertionSort([5, 2, 4, 3, 1]));
