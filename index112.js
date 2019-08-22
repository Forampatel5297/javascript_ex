function showNumbers(start,end) {
    let i = start;
    a=[]
    if (isNaN(start) || isNaN(end)) {    
        return console.log("not a number")  
    } else if (start>end) {
        while (i>=end) {
            a.push(i)
            i = i-1
        }
        return console.log(a);
    } else if (start<=end) {
        while (i<=end) {
            a.push(i)
            i = i+1
        }
        return console.log(a) 
    }
}
showNumbers("b","h");
showNumbers(1,9);