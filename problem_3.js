
// function that allows to create an array with a dynamic length
const range = (end) => {
  const start= 1;
  const length = end - start+1;
  return Array.from({ length }, (_, i) => start + i);
}

// console.log(range(10));

// function that allows to decomponse the array generated from range function
const displaySuite = (n) =>{

  let i, j, k =1;
   let str=""
  
  for(i=1;i<=n;i++){
    for(j=1;j<=i;j++){  
      console.log(k);
      k++
    }  
    console.log("\n");
  }  

}

displaySuite(6);
