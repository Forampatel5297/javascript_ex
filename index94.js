for (let i = 1; i <= 14; i++) {
    let output = '';
    if (i % 2 !== 0) {
        for (let j = 0; j < i; j++) {
            output +='*';            
        }
        console.log( output);
    }  
}
