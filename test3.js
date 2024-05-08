function isPowerOfTwo (n) {
    return n!=0 && ((n&(n-1)) == 0);
}
 console.log(isPowerOfTwo(4)); // false
 console.log(isPowerOfTwo(9)); // true

 // explication
 /**
  * La propriété clé des puissances de 2 est qu'elles n'ont qu'un seul bit défini (1) dans leur représentation binaire.
  * 4 (binaire : 100), 
  * En soustrayant 1 à une puissance de 2, on inverse le bit défini le plus à droite vers 0, ce qui fait que tous les bits deviennent 0 sauf celui qui était précédemment défini
  * 4-1 = 3(binaire 011)
  * La partie "n & (n-1) est égal à 0 (binaire : 000) car tous les bits sont à 0 après l'opération ET" indique que l'opération ET entre n et n-1 ne produit que des bits 0, ce qui est une caractéristique des puissances de 2.
  * Prenons n = 4 (binaire : 100) et n-1 = 3 (binaire : 011).
    Effectuons l'opération ET bit à bit :
    *Opération ET bit à bit (&) : L'opération ET bit à bit compare les bits correspondants de deux nombres binaires et renvoie un nouveau nombre binaire dont les bits résultants sont 1 uniquement si les deux bits d'entrée sont 1. Si l'un des bits d'entrée est 0, le bit résultant est 0

    1 & 0 = 0
    0 & 1 = 0
    0 & 1 = 0
    Le résultat est 000 (binaire).
  */