import {findClosestValueInBST1, findClosestValueInBST2} from '.'
import {BST} from '../../dataStructures/BST'

test('Find closest value in binary search tree', () => {
  const tree = new BST()
  tree.add(4)
  tree.add(2)
  tree.add(6)
  tree.add(1)
  tree.add(3)
  tree.add(6)
  tree.add(8)
  const target = 5
  expect(findClosestValueInBST1(tree.root, target))
    .toBe(4)
})

test('Find closest value in binary search tree', () => {
  const tree = new BST()
  tree.add(4)
  tree.add(2)
  tree.add(6)
  tree.add(1)
  tree.add(3)
  tree.add(6)
  tree.add(8)
  const target = 5
  expect(findClosestValueInBST2(tree.root, target))
    .toBe(4)
})