/**
 * La classe Node représente un nœud dans un arbre binaire. Chaque nœud possède trois propriétés :
  data : Stocke la valeur associée au nœud.
  left : Pointe vers le nœud enfant gauche (ou null s’il n’y a pas d’enfant gauche).
  right : Pointe vers le nœud enfant droit (ou null s’il n’y a pas d’enfant droit).
  La fonction constructeur initialise une nouvelle instance de Node avec la valeur donnée (val).
  Elle définit la propriété data à val et initialise les propriétés left et right à null.
 */

class Node { 
    constructor(val) {
        this.data = val; 
        this.left = null; 
        this.right = null; 
    }
}

class Solution {
    /**
     * isSymmetricUtil(root1, root2) : Il s’agit d’une méthode auxiliaire qui vérifie récursivement si deux sous-arbres (enracinés à root1 et root2) sont symétriques.
       Si l’un des deux (root1 ou root2) est null, elle renvoie true si les deux sont null, sinon false.
       Sinon, elle vérifie si les valeurs de données de root1 et root2 sont égales, et vérifie récursivement les sous-arbres gauche et droit.
     */
    
    isSymmetricUtil(root1, root2) {
        if (root1 === null || root2 === null) {
            return root1 === root2;
        }
        return (
            root1.data === root2.data &&
            this.isSymmetricUtil(root1.left, root2.right) &&
            this.isSymmetricUtil(root1.right, root2.left)
        );
    }

    /**
     * isSymmetric(root) : Cette méthode vérifie si l’arbre binaire entier (enraciné à root) est symétrique.
       Si l’arbre est vide (c’est-à-dire si root est null), elle renvoie true.
       Sinon, elle appelle la méthode isSymmetricUtil pour vérifier la symétrie des sous-arbres gauche et droit.
     */

    isSymmetric(root) {
        if (!root) {
            return true;
        }
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

                            