let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// const varATemp = varA;
// varA = varB;
// varB = varC;
// varC = varATemp;

[varA, varB, varC] = [varB, varC, varA] // uma forma mais fácil de fazer.

console.log(varA, varB, varC);
