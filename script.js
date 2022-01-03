 //1. Write a js program to read and print elements of array.


//  var arr = [21,43,23,54,67,65];

//  console.log("showing array element " + arr);


//------------------------------------------------------------------------------------------------------------------------------

//Write a js program to print all negative elements in an array

//  var arr = [32,-112,43,65,-24,-35,23];

//  console.log("the array values are " + arr);
 
//  for(var i=0;i<6;i++)
//  {
     
//      if( arr[i]<0)
//      {
//          console.log("negative values"+arr[i]);
//      }
     
//  }


//------------------------------------------------------------------------------------------------------------------------------

// 3:Write a js program to find sum of all array elements.

// var array=[1,2,3,4,5,6]
// var sum=0;

// console.log("before sum the values are " + array)
//  for (let index = 0; index < array.length; index++) 
//  {
//      sum += array[index];
     
//  }
//  console.log("after sum the array value is " +sum);

//------------------------------------------------------------------------------------------------------------------------------
 
// 4.Write a js program to find maximum and minimum element in an array.

//  function max_min(){
//     var arr = [2,421,5,75,1,24,23,34];
//     var max=min= arr[0];
//     // var min = arr[0];
// console.log(arr)
//     for (let i = 0; i< arr.length; i++)
//      {
//         if(arr[i]>max) 
//         {
//             max=arr[i];
//         }
//         if (min>arr[i])
//         {
//             min=arr[i];
//         }
//     }
//     console.log("the max is "+max);
//     console.log("the min is "+min);


//     // document.write(`the largest element in array is ${max}`) 
// }
// max_min();



//--------------------------------------------------------------------------------------------------------------------------------------
//5. Write a js program to find second largest element in an array.

// var arr=[21,543,653,34,23,65,87,98,45,34]
// var largest;
// var second_largest;
// var int_min;                                     //not solved

// largest=second_largest=int_min;

// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]>largest)
//     {
//         second_largest = largest;
//         largest=arr[i];
//     }
//     else if(arr[i]<largest&& arr[i]>second_largest)
//     {
//         second_largest=arr[i]
//     }
// }
// console.log("the largest is " + largest + " and the seond largest is "+ second_largest)

//------------------------------------------------------------------------------------------------------------------------------
//6. Write a js program to count total number of even and odd elements in an array.


// var arr=[21,42,34,55,56,75,31,0,29,54]
// var even;
// var odd;
// console.log(arr)
// for (let i = 0; i < arr.length; i++) 
// {
//     console.log(arr[i])

//     if (arr[i]%2==0) 
//     {
//         even=arr[i]  
//         console.log("the "+even+" number is even");
//     }
//     if (arr[i]%2==1) {
        
//         odd=arr[i]
//         console.log("the "+ odd +" number is odd" )
//     }
// }


//----------------------------------------------------------with function--------------------------------------------------------------------
// var arr=[21,42,34,55,56,12,342,75,31,0,29,54]
// var even,odd
// console.log(arr)
// function even_odd(params) 
// {
    
//     for (let i = 0; i < arr.length; i++) 
//     {
//         if (arr[i]%2==0) 
//         {
//             even=arr[i]
//             console.log("the "+even+ " is even")
//         }
//         if (arr[i]%2==1)
//         {
//             odd=arr[i]  
//             console.log("the "+odd+ " is odd")
//         }
//     }    
// }
// even_odd()

//------------------------------------------------------------------------------------------------------------------------------
//7. Write a js program to count total number of negative elements in an array.

// var arr=[32,-3,42,64,-12,42,-156,09,-43]
// var count=0,i
// function find_negative(params) 
// {
//     console.log(arr);
//     for ( i = 0; i < arr.length; i++) 
//     {
//         if (arr[i]<0)
//         {
//             console.log(arr[i])
            
//         }
//         if(arr[i] < 0)
//         {
//             count++;
//         }
        
//     }
   
//     console.log("Total negative elements in array "+ count);
// }
// find_negative()


//------------------------------------------------------------------------------------------------------------------------------
// 8.Write a js program to copy all elements from an array to another array.


// function copy_element()
// {
   
//  var arr = [1,3,6,7,8,9,4,56,75];
// var copy_array = [];
// for (var i = 0; i < arr.length; i++) {
//   copy_array.push(arr[i]);
// }
// console.log("Copy Of Array Is ", copy_array);
// }
// copy_element();



//------------------------------------------------------------------------------------------------------------------------------
//9. Write a js program to insert an element in an array.

// var arr = [12,3,53,23,63,23,20]
// console.log("before inserting value " + arr)

// var new_array = parseInt(prompt("Enter value you want to insert: "))
// var newar =  parseInt(prompt("Enter value you want to insert: "))

// console.log("after inserting")
// arr.push(new_array,newar)
// console.log(arr)
//------------------------------------------------------------------------------------------------------------------------------

// 10. Write a js program to delete an element from an array at specified position.

// var arr = [1,2,3,4,5,6,7,8,9]

// console.log("before deleting ", arr)

// var arr_after= arr.splice(4,3)

// console.log("after deleting")

// console.log(arr)


//------------------------------------------------------------------------------------------------------------------------------
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


//------------------------------------------------------------------------------------------------------------------------------
// 12. Write a js program to print all unique elements in the array.

// var array=[21,33,44,55,33,23,33,66,44,55]
// console.log(array)
// for (let i = 0; i < array.length; i++) 
// {
//     var count=0
//     for (let j = 0; j < array.length; j++) {
        
//         if (array[i]==array[j]) 
//         {
//             count++ 
//         }
       
//     }
//     if (count== 1) 
//     {
//         console.log(array[i]);
//     }
// }

//------------------------------------------------------------------------------------------------------------------------------
//13. Write a js program to count total number of duplicate elements in an array.

// var array=[22,33,44,54,33,22,11,3,3,4,65,11]
// console.log(array)

// var count=0
// for (let i = 0; i < array.length; i++) {
    
//     for (let j = i+1; j < array.length; j++) {
        
//         if (array[i]==array[j])
//          {
//             count++
//         }
        
//     }
    
// }
// console.log(count)











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





  