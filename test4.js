// Fn = Fn-1 + Fn-2 avec F0 = 0 et F1 = 1
// sequence de Fibonnaci : 
//une série de nombres où chaque nombre est la somme des deux précédents
// 0, 1, 1, 2, 3, 5, 8, 13, 21

// code 1 : recursivité
function fibRecurs(n) {
    if (n <= 1) {
      return n;
    } else {
      console.log('n',n);
      return fibRecurs(n - 1) + fibRecurs(n - 2); // 4+3
    }
  }
   
  // test fibRecurs(8), fibRecurs(50)
  console.time("fibRecurs"); // démarre un chronomètre nommé  "fibRecurs"  pour mesurer le temps d’exécution du code suivant
  console.log(fibRecurs(8));
  console.timeEnd("fibRecurs"); // arrête le minuteur qui a été précédemment démarré avec l nom étiquette "fibRecurs"
//  console.log(n + "th Fibonacci Number: " + fibRecurs(n));
//Le problème avec cette approche est qu’elle a une complexité exponentielle (O(2^n)),
// ce qui devient très lent pour de grandes valeurs de n


// code 2 memoisation
//Pour optimiser l’approche récursive, nous pouvons utiliser 
//la programmation dynamique avec mémoïsation. 
//Nous stockons les nombres de Fibonacci précédemment 
//calculés dans un tableau pour éviter les calculs redondants
function fibMem(n, memo = {}) {
    if (n in memo) { // si lors du traitment n exist dns l'objet (stockage,) // ou memo.hasOwnProperty(n)
        return memo[n];  //signifie que le nombre de Fibonacci pour cet index a déjà été calculé et stocké dans le dictionnaire. Dans ce cas, la fonction renvoie directement la valeur de memo[n]pour éviter de le recalculer.
    }
    if (n <= 1) {
        return n;
    }
    memo[n] = fibMem(n - 1, memo) + fibMem(n - 2, memo); // utilise l'objet 'memo' pr la memorisation
    return memo[n];
}
/*console.time("fibMem"); 
console.log(fibMem(5));
console.timeEnd("fibMem"); */






