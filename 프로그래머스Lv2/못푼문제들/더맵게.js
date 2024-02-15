// 1. min-heap 자료구조로 만들어줍니다.

// 2. heap[0]번째 값, 즉 가장 작은값이 K보다 작다면 반복해줍니다.
// 2-1. 만약 heap의 길이가 1이하가 되면 -1을 출력합니다.
// 2-2. 가장 작은값 (첫번째값), 두번째로 작은 값(두번째 값)을 pop해줍니다.
// 2-3. heappush를 통해 새로운 스코빌지수(heap에 가장작은값 + 두번째로 작은 값*2)를 push합니다.
// 2-4. count를 +1해줍니다.

// 3. 최종 count값을 출력합니다.

function solution(scoville, K) {
  let heap = [...scoville];
  heapify(heap);

  let cnt = 0;

  while (heap[0] < K) {
    if (heap.length <= 1) {
      return -1;
    }
    const first = heappop(heap);
    const second = heappop(heap);
    heappush(heap, first + second * 2);
    cnt++;
  }

  return cnt;
}

function heapify(arr) {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    siftDown(arr, i);
  }
}

function siftDown(arr, idx) {
  const leftIdx = 2 * idx + 1;
  const rightIdx = 2 * idx + 2;
  let smallestIdx = idx;

  if (leftIdx < arr.length && arr[leftIdx] < arr[smallestIdx]) {
    smallestIdx = leftIdx;
  }
  if (rightIdx < arr.length && arr[rightIdx] < arr[smallestIdx]) {
    smallestIdx = rightIdx;
  }

  if (smallestIdx !== idx) {
    [arr[idx], arr[smallestIdx]] = [arr[smallestIdx], arr[idx]];
    siftDown(arr, smallestIdx);
  }
}

function siftUp(arr, idx) {
  while (idx > 0) {
    const parentIdx = Math.floor((idx - 1) / 2);
    if (arr[idx] < arr[parentIdx]) {
      [arr[idx], arr[parentIdx]] = [arr[parentIdx], arr[idx]];
      idx = parentIdx;
    } else {
      break;
    }
  }
}

function heappop(arr) {
  const popped = arr[0];
  arr[0] = arr[arr.length - 1];
  arr.pop();
  siftDown(arr, 0);
  return popped;
}

function heappush(arr, value) {
  arr.push(value);
  siftUp(arr, arr.length - 1);
}
