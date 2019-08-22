let femaleStudents =['foram','maulika','arya','priya','perina'];
let maleStudents =['akshay','romin','hardik','ishan','ronak'];

let students=maleStudents.concat(femaleStudents);

console.log(femaleStudents[2],femaleStudents[3],femaleStudents[1]);

let i=0
while (i<=4) {
    console.log(maleStudents[i]);
    i = i+1;
}
for (i=0;i<=6;i++) {
    console.log(students[i]);
}