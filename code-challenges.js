// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

//create function that takes in an array
const shuffleAndRemove = (array) => {
    //remove first item of the array
    //use shift()
    array.shift()
    //shuffle the remaining content
    for (let i = array.length; i > 0; i--){
        //decrement early to prevent the array from having an undefined element       
        i--
        //get a random number between 0 and the length of the array
        let random = Math.floor(Math.random() * i)
        //set a temporary number for the value of the array index
        let temp = array[i]
        //reassign the element from its original index to the new index we got from random
        array[i] = array [random]
        //reassign the index of random to the original index 
        array[random] = temp
        //return the array
        return array
    }
    //once the array is empty return "The array is empty."
    if (array.length == 0) {
        return "The array is empty."
}
}

//take the new array and put it into function

// console.log(shuffleAndRemove(collections));
// console.log(shuffleAndRemove(collections));
// console.log(shuffleAndRemove(collections));
// console.log(shuffleAndRemove(collections));
// console.log(shuffleAndRemove(collections));


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

//create a function that takes in an array
const cubeSum = (array) => {
    //get an array of all the numbers cubed
    let cubeArr = array.map(value =>{
        return Math.pow(value, 3)
    })
    //use the reduce() method to add all the numbers in the array together into one sum. 
    //uses an anonymous function with arguments (a, b) and we are returning the sum of those two numbers. This will continue until there is one number left.
    //0 is the initial value I give it just in case whatever is entered doesn't provide one to avoid errors
    return cubeArr.reduce(function(a, b){return a + b}, 0)
}
// console.log(cubeSum(cubeAndSum1));
// console.log(cubeSum(cubeAndSum2));


// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

//create a function that takes an array
const minMax = (array) => {
    //create an array to hold minimum and maximum
    let minMaxArr = []
    //sort the numbers from least to greatest
    array.sort(function(a, b){return a-b})
    //shift smallest number and pop largest number and store them in variables.
    min = array.shift()
    max = array.pop()
    //push both those numbers into minMaxArr
    minMaxArr.push(min, max)
    //return minMaxArr
    return minMaxArr
}

// console.log(minMax(nums1));
// console.log(minMax(nums2));



// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

//create a function that takes in a string
const rudeType = (string) =>{
    //split the string into an array of characters and store it in a variable
    let strArr = string.split("")
    //for every other letter in array toUpperCase it.
    return strArr.map((value, index) =>{
        if (index % 2 === 0){
            return value
        } else {
            return value.toUpperCase()
        }
    //join the array back together into a string.
    }).join("")

}
// console.log(rudeType(testString1));
// console.log(rudeType(testString2));



// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//create a function that takes int two arrays as arguments
const noDupes = (array1, array2) =>{
    //combine the two arrays into one.
    //used the spread operator to concatenate the two arrays into one.
    combArr = [...array1, ...array2]
    //filter through combined array
    //indexOf returns the index of the FIRST instance of that value, so any other instance of the same value will not be returned from filter.
    let sortedArr = combArr.filter((value, index) => combArr.indexOf(value) === index)
    //return the sorted array with no duplicates
    return sortedArr
}

console.log(noDupes(arr1, arr2));