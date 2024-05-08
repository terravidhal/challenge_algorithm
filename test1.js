/*function numberOfPaths(m, n) {
    if (m === 0 || n === 0) {
        return 0;
    }
    if (m === 1 || n === 1) {
        return 1;
    }
    return numberOfPaths(m - 1, n-1) + numberOfPaths(m - 1, n-1);
}*/

console.log(numberOfPaths(3, 2)); // Sortie : 2
console.log(numberOfPaths(0, 1)); // Sortie : 0
console.log(numberOfPaths(1, 1)); // Sortie : 1 