/**
 * Problème 2 : 
 * Nous avons un cube composé de petits cubes (ex : un rubiks cube). Soit n le nombre de petits cubes dans une arrête du gran cube. (ex: pour un rubiks cube classique n = 3). 
 * On veut calculer le nombre N de petits cubes à la périphérie du grand cube. (ex pour n = 2, N = 8). 
 * Ecrivez un programme qui permette de calculer ce nombre. 
 * 
 */

 // Step 1:
 // we have to store the numbers of cubes per edge
 const n = 3;

 // Step 2:
 /**
  * we have to calculate the numbers of cubes per edge.
  * ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  * to do so, we calculate the numbers of n cube per face. we will call it nf
  *   nf = n²
  * as on edge has 2 and only 2 faces of the cube 
  *   N = 2* nf 
  * 
  *  */ 

  // Function that performs Step 2
  const calculateCubesNumberPerEdge = (n) =>(2*(Math.pow(n,2)))

console.log(`RESULT : N = ${calculateCubesNumberPerEdge(4)} cubes / edge`);