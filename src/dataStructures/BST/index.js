/**
 * Binary Search Tree
 */

class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

export class BST {
  constructor() {
    this.root = null
  }

  add(value) {
    const node = this.root
    if (node === null) {
      this.root = new Node(value)
    } else {
      const searchTree = function(node) {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value)
          } else {
            return searchTree(node.left)
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new Node(value)
          } else {
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }
      return searchTree(node)
    }
  }

  findMin() {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.value
  }

  findMax() {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }
    return current.value
  }

  find(value) {
    let current = this.root
    while (current.value !== value) {
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
      if (current === null) return null
    }
    return current
  }

  isPresent(value) {
    let current = this.root
    while (current) {
      if (value === current.value) {
        return true
      }
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  remove(value) {
    const removeNode = function (node, value) {
      if (node === null) {
        return null
      }
      if (value === node.value) {
        // node has no children
        if (node.left === null && node.right === null) {
          return null
        }
        // node has no left child
        if (node.left === null) {
          return node.right
        }
        // node has no right child
        if (node.right === null) {
          return node.left
        }
        // node has both children
        let tempNode = node.right
        while (tempNode.left !== null) {
          tempNode = tempNode.left
        }
        node.value = tempNode.value
        node.right = removeNode(node.right, tempNode.value)
        return node
      } else if (value < node.value) {
        node.left = removeNode(node.left, value)
        return node
      } else {
        node.right = removeNode(node.right, value)
        return node
      }
    }
    this.root = removeNode(this.root, value)
  }
}