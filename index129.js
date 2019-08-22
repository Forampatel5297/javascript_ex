let iceCreamFlavors =[]
 
iceCreamFlavors.unshift('chocolate');
iceCreamFlavors.unshift('Vanilla');
iceCreamFlavors.unshift('strawberry');
iceCreamFlavors.unshift('mint chocolate chip');
iceCreamFlavors.unshift('berry');
iceCreamFlavors.unshift('oreo');
iceCreamFlavors.unshift( 'Raspberry Ripple');
iceCreamFlavors.unshift('French vanilla');
iceCreamFlavors.unshift('umami');
iceCreamFlavors.push('butter scotch');
let i = iceCreamFlavors.length-1;
let j = 0;
while (j<=i) {
    console.log(iceCreamFlavors[j]);
    j=j+1;
}