/**
 * Find closest value in binary search tree
 * @param Tree tree
 * @param number target
 * @returns number
 *
 * findClosestValueInBinarySearchTree(<bst>, 12) -> 13
 */

/**
 * Recursive solution
 *
 * Average: O(log(n))
 * Worst: O(n)
 */
const findClosestValueInBinarySearchTreeHelper = (tree, target, closest) => {
  if (!tree) return closest
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value
  }
  if (target < tree.value) {
    return findClosestValueInBinarySearchTreeHelper(tree.left, target, closest)
  } else if (target > tree.value) {
    return findClosestValueInBinarySearchTreeHelper(tree.right, target, closest)
  } else {
    return closest
  }
}

export const findClosestValueInBST1 = (tree, target) => {
  return findClosestValueInBinarySearchTreeHelper(
    tree,
    target,
    Infinity
  )
}

/**
 * Iterative
 *
 * Average: O(log(n))
 * Worst: O(n)
 */
export const findClosestValueInBST2 = (tree, target, closest = Infinity) => {
  let currentNode = tree
  while (currentNode) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left
    } else if (target > currentNode.value) {
      currentNode = currentNode.right
    } else break
  }
  return closest
}
