                            
// Node structure for the binary tree
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to check if
    // two subtrees are symmetric
    isSymmetricUtil(root1, root2) {
        // Check if either subtree is NULL
        if (root1 === null || root2 === null) {
            // If one subtree is NULL, the other
            // must also be NULL for symmetry
            return root1 === root2;
        }
        // Check if the data in the current nodes is equal
        // and recursively check for symmetry in subtrees
        return (
            root1.data === root2.data &&
            this.isSymmetricUtil(root1.left, root2.right) &&
            this.isSymmetricUtil(root1.right, root2.left)
        );
    }

    // Public function to check if the
    // entire binary tree is symmetric
    isSymmetric(root) {
        // Check if the tree is empty
        if (!root) {
            // An empty tree is
            // considered symmetric
            return true;
        }
        // Call the utility function
        // to check symmetry of subtrees
        return this.isSymmetricUtil(root.left, root.right);
    }
}

// Function to print the Inorder
// Traversal of the Binary Tree
function printInorder(root) {
    if (!root) {
        return;
    }
    printInorder(root.left);
    console.log(root.data + ' ');
    printInorder(root.right);
}

// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.right.right = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(4);

const solution = new Solution();

console.log('Binary Tree (Inorder): ');
printInorder(root);
console.log('');

const res = solution.isSymmetric(root);

if (res) {
    console.log('This Tree is Symmetrical');
} else {
    console.log('This Tree is NOT Symmetrical');
}

                            