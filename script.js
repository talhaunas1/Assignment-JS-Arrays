// 1. Write a js program to read and print elements of array. 

// var array = [1, 2, 3, 4, 5]
// console.log("Array", array);


// 2. Write a js program to print all negative elements in an array. 

// var myArray = [1, 2, -56, 45, -634, -568, 106, 434];

// function getNegativeNumbers(array) {

//     var negatives = [];

//     for (var i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//             negatives.push(array[i]);
//         }
//     }
//     return negatives;

// }
// console.log(getNegativeNumbers(myArray));



// 3. Write a js program to find sum of all array elements.  

// var array = [1, 2, 3, 4, 5, 6];
// var sum = 0;
// for (var i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log("Sum of array is :", sum);


// 4. Write a js program to find maximum and minimum element in an array. 

// var Array = [1, 5, 6, 2, 3,87,-5,-4];
// var result = Math.min(...Array);
// console.log("Minimum element is",result)

// var result2 = Math.max(...Array)
// console.log("Maximum element is",result2);




// 6. Write a js program to count total number of even and odd elements in an array. 

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 87];
// var odd = 0;
// var even = 0;
// for (var x = 0; x <array.length; x++) {
//   if (array[x] % 2 == 0) {
//     even++;
//   }
//   if (array[x] % 2 != 0) {
//     odd++;
//   }
// }
// console.log("Total number of Even", even);
// console.log("Total number of Odd", odd);


// 7. Write a js program to count total number of negative elements in an array. 

// var negArray = [2, 3 -21, 5, -8, -4, 3, -90];
// var negElement = 0;
// for (var x = 0; x < negArray.length; x++) {
//   if (negArray[x] < 0) {
//     negElement++;
//   }
// }
// console.log("Total number Of negative elements in array is", negElement);


// 8. Write a js program to copy all elements from an array to another array. 

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var copyarray = [];
// for (var x = 0; x < array.length; x++) {
//   copyarray.push(array[x]);
// }
// console.log("Copy Of Array Is ", copyarray);



// 9. Write a js program to insert an element in an array. 

// var inarray = [1, 2, 3, 4, 5, 6];
// console.log("Before insert", inarray);
// inarray.push(-7);
// console.log("After insert", inarray);


// 10. Write a js program to delete an element from an array at specified position.


// var delarray = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log("Before deletion", delarray);
//   delarray.splice(2, 1);
//   console.log("Delete element at specified position", delarray);


// 11. Write a js program to count frequency of each element in an array.


// var frearray = [1, 1, 2, 3, 2, 2, 4, 4, 4, 5, 5, 5];
// for (var x = 0; x < frearray.length; x++) {
//     var frequency = 0;
//     for (var y = 0; y < frearray.length; y++) {
//         if (frearray[x] == frearray[y]) {
//             frequency++;

//         }
//     }
//     console.log(frearray[x], "is repeated", frequency, "time");
// }



// 12. Write a js program to print all unique elements in the array.

// var uniarray = [1, 2, 3, 4, 5, 2, 1];
// if (uniarray == 0) {
//     console.log("There is no element in array");
// } else {
//     for (var x = 0; x < uniarray.length; x++) {
//         var unique = 0;
//         for (var y = 0; y < uniarray.length; y++) {
//             if (uniarray[x] == uniarray[y]) {
//                 unique++;
//             }
//         }

//         if (unique == 1) {
//             console.log(uniarray[x], " is unique element in array");
//         }
//     }
// }

// 13. Write a js program to count total number of duplicate elements in an array.

// var duparray = [1, 2, 3, 4, 1, 2,3,3,4,6,6];
// var duplication = 0;
// for (var x = 0; x < duparray.length; x++) {
//   for (var y = x + 1; y < duparray.length; y++) {
//     if (duparray[x] == duparray[y]) {
//       duplication++;
//       duparray.splice(y, 1);
//     }
//   }
// }
// console.log("total number of duplicate elements in an array is ", duplication);



// 14. Write a js program to delete all duplicate elements from an array.

// var dupliarray = [1, 2, 3, 4, 5, 3, 4, 2];
// console.log("Before deleting duplicate elements", dupliarray);

// for (var x = 0; x < dupliarray.length; x++) {
//   for (var y = x + 1; y < dupliarray.length; y++) {
//     if (dupliarray[x] == dupliarray[y]) {
//       dupliarray.splice(y,1);
//     }
//   }
// }
// console.log("After deleting duplicate elements", dupliarray);


// 15. Write a js program to merge two array to third array.

// var merarray1 = [1, 2, 3, 4, 5];
// var merarray2 = [6, 7, 8, 9, 10];
// var third = [];
// for (var x = 0; x < merarray1.length; x++) {
//   third.push(merarray1[x]);
// }
// for (var x = 0; x < merarray2.length; x++) {
//   third.push(merarray2[x]);
// }
// console.log("After merge array elements", third);



// 16. Write a js program to find reverse of an array.

// var array = [1, 2, 3, 4, 5]
// var rev = array.reverse()
// console.log("Array is reverse", rev);


// 17. Write a js program to put even and odd elements of array in two separate array.

// var mainarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evenarray = [];
// var oddarray = [];
// for (var x = 0; x < mainarray.length; x++) {
//   if (mainarray[x] % 2 == 0) {
//     evenarray.push(mainarray[x]);
//   } 
//   else {
//     oddarray.push(mainarray[x]);
//   }
// }
// console.log("Even array ", evenarray);
// console.log("Odd array ", oddarray);


// 18. Write a js program to search an element in an array.

// var serarray = [1, 2, 3, 4, 5, 2,];

// function search(y) {
//   var incre = 0;
//   for (let x = 0; x < serarray.length; x++) {
//     if (y == serarray[x]) {
//       incre++;
//       console.log("Number is found at index number", x);     
//     }
//   }
//   if (incre == 0) {
//     console.log("Number is not found in array");
//   }
// }
// search(1);





  