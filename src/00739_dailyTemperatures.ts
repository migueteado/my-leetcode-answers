// This is a stack problem
// The trick is to use the stack to keep the indices of unsolved temperatures
// As the array is traversed they get either resolved backwards or stay at 0
function dailyTemperatures(temperatures: number[]): number[] {
  const answer: Array<number> = new Array(temperatures.length).fill(0);
  const stack: number[] = []; // store indices

  for (let i = 0; i < temperatures.length; i++) {
    // while current temp is warmer than what's on top of stack
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      // Pop the index of the temperature that is cooler than current
      const idx = stack.pop()!;
      // Answer equals the difference of the indices
      answer[idx] = i - idx;
    }
    stack.push(i);
  }
  return answer;
}