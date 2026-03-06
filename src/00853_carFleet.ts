// This is a stack problem
// The idea is to sort cars by their position and then use a stack to keep track of the fleets
function carFleet(target: number, position: number[], speed: number[]): number {
  // sort positions from higher to lowest
  // keep paired with speed
  const cars = position
    .map((pos, i) => [pos, speed[i]])
    .sort((a, b) => b[0] - a[0]);

  // Create a stack, one car cannot reach the target before the one ahead,
  // they become a fleet. That means that whenever the reaching time of the
  // next car is faster than the one before it they will always become a fleet.
  // Only slower times count for different fleets
  const fleets: number[] = [];
  for (const car of cars) {
    // time is equal to (endDistance - startDistance) / speed
    const reachingTime = (target - car[0]) / car[1];
    // If there are no fleets or the reachingTime is higher
    // than previous reaching times add a new fleet
    if (fleets.length === 0 || reachingTime > fleets[fleets.length - 1]) {
      fleets.push(reachingTime);
    }
  }
  return fleets.length;
}
