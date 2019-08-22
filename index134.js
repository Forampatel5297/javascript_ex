let A = [1,2,3,4,5,6,7,8,9,10];
let i=0;
while (i<=9) {
    if (A[i]%2!==0) {
        console.log(A[i]);
    } 
    i=i+1
    if (A[i]==9) {
        console.log("good job");
        break;
    }
}