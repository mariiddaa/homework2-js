homework2
//task1
'use strict';

for (let i = 5; i <= 100; i++) {
  console.log(i);
}

//task2
'use strict';

let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array3.length; i++) {
  sum += array3[i];
}

console.log(sum);

//task3
'use strict';
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let m of array2){
   if(m==5) {console.log(aris);} }

//task4
'use strict';
let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let m = 0; m < array3.length; m++) {
  sum += array3[m];}
  console.log(sum);

//task5
'use strict';
let array4 = [1, 2, 3, 7, 6, 9];
let sum = 0;
for (let i = 0; i < array4.length; i++) {
  sum += array4[i];
}
let avg = sum / array4.length;
console.log(avg); 
 
 //task6
 'use.strict';
 let array5 = [1, 2, 3, 7, 6, 9];
for(let i = 0; i < array5.length; i++){
if (array5[i] === 7) {continue; }console.log(array5[i]);}

//task7
'use strict';
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
  delete user. studentstatus;
  console.log(user);

  //task8
  'use strict';
  let user = {
  name: 'giorgi',
  age: 20,
  studentstatus: 'active'
};

if (user.age < 18 && user.studentstatus === 'active') {
  console.log('hello');
} else if (user.name === 'levani') {
  console.log('hello levani');
} else if (user.studentstatus === 'active' || user.age < 25) {
  console.log('hello world');
} else {
  console.log('error');
}

//task9
'use strict';
let array = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] > 0) {
      console.log(array[i][j]);
    }
  }
}

//task10
'use strict';
let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) 
  //if (array[i] % 2 === 0) kentis Shemtxvevashi
  {
    array.splice(i, 1);
    i--;
  }
}

console.log(array);


