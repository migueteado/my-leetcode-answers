/*
 * PROBLEM SOLVING LOG
 * Date: 2026-04-08
 *
 * Hardest step: The hardest part was to find a logic that would help me prevent duplicates
 * without having to compare with the results array. I managed to do this by understanding
 * the pattern in the results. All results from examples were sorted in non-decreasing order.
 * That meant that as long as I was just adding candidates in a non-decreasing order I will
 * not get to a duplicate result.
 *
 * What I almost skipped: In my previous iteration before the current result I was both using
 * index as a helper to not traverse lower numbers in the array but also comparing within the
 * loop checking that the candidate was equal or higher than the last number of curr.
 * This was unnecessary because index already guaranteed that. Also I later noticed that
 * after we have reached a candidate that pushes remaining below 0 there was no point on
 * keep looping for other candidates as every candidate from that point on will not provide
 * a valid result.
 *
 * What slowing down revealed: Slowing down revealed many patterns:
 * - That sorting the array beforehand would allow me to make some useful assumptions in the
 * long run.
 * - That using remaining was better than keeping track of the sum value in the respective
 * branch, it reduced the amount of required variables.
 * - That using push() and pop() operations was more cost efficient than decomposing
 * [...curr, candidates[i]].
 * - That keeping track of index and breaking the loop for too high candidates would significantly
 * reduce the amount of iterations required.
 */

/**
 * This is the first backtracking exercise that I do fully understanding what backtracking is.
 * For reference: backtracking is a brute force approach that helps you traverse a tree of
 * posibilities to find results and progressively keeps abandoning branches that don't
 * lead to a valid solution.
 */
export function combinationSum(candidates: number[], target: number): number[][] {
  const results: number[][] = [];
  // Sort, it will help us to make some assumptions
  // in the dfs
  candidates = candidates.sort((a, b) => a - b);

  function dfsHelper(index: number, remaining: number, curr: number[]) {
    // remaining reaches 0, we have got a result
    if (remaining === 0) {
      results.push([...curr]);
      return;
    }

    // Start traversing the candidates from index
    // this way we only see from the current number
    // onwards. It avoids repeated results by keeping
    // a sorted order in the results
    for (let i = index; i < candidates.length; i++) {
      // When the current candidate pushes remaining below 0
      // it means that from this point onwards we don't have
      // any other valid candidate that can provide us a valid result
      if (remaining - candidates[i] < 0) break;
      // Push the candidate to our current testing array
      curr.push(candidates[i]);
      // Try next branch
      dfsHelper(i, remaining - candidates[i], curr);
      // Remove the pushed candidate for the next iteration
      // that way we can try the next valid candidate
      curr.pop();
    }
  }

  // start at 0
  dfsHelper(0, target, []);

  return results;
}
