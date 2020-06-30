// I've found different sorting methods here:
// https://www.tutorialspoint.com/data_structures_algorithms/bubble_sort_algorithm.htm
// And two scripts for javascript here: 
// https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly

// One of them is a Selection Sort, the other a Insertion Sort method. 
// I took them as a starting point and tried to understand both of them with some comments and document.write lines. 
// The insertion sort method was the more complicated one for me because of the reverse loop inside a loop with some hard to understand 
// conditions --> (for (let j = i - 1; j >= 0 && (arr[j] > target); j--)).
// The Selection Sort was easier to understand for me.

// Selection Sort: Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm 
// in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, 
// the sorted part is empty and the unsorted part is the entire list.

let arr = [5,3,7,6]

document.write('Selection Sort:<br>')
document.write('unsorted array: ' + arr + '<br>')

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // find the smallest value
        let min = i // starts with index of i as minimum value
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) { // comparing the neighbours: Is the value of the following position j smaller than of its predecessor i?
                min = j // if the value of j is smaller than the minimum value before, j is the new min
                document.write('j: ' + j + ' & min: ' + min + '<br>')
            }
        }
        // min and i change their values ​​if i has not already the smallest value
        if (min != i) {
            let target = arr[i] // target receives the value of position i
            arr[i] = arr[min] // position i is overwritten with the lowest value
            arr[min] = target // the position with the lowest value is overwritten with the target value
        }
    }
    return arr
}
document.write('sorted array: ' + selectionSort(arr) + '<br><br>')


// Insertion Sort: An element has to find its appropriate place in a sorted sublist and has to be inserted there.

arr = [5,3,7,6]

document.write('Insertion Sort:<br>')

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let target = arr[i]
        for (var j = i - 1; j >= 0 && (arr[j] > target); j--) {  
            arr[j+1] = arr[j]
        }
        arr[j+1] = target
    }
    return arr
}
document.write(insertionSort(arr) + '<br><br>')


arr = [5,3,7,6]

document.write('Insertion Sort Test: I try to understand!<br>')
document.write('unsorted array: ' + arr + '<br>')

function insertionSort2(arr) {
    for (let i = 0; i < arr.length; i++) {
        let target = arr[i]
        document.write('i: ' + i + ' target: ' + arr[i] + '<br>')
    
        for (var j = i - 1; j >= 0 && (arr[j] > target); j--) {
            document.write('j:' + j + '<br>')
    
            document.write('arr[' + j + ']: ' + arr[j] + '<br>')
            document.write('arr[' + (j+1) + ']: ' + arr[j+1] + '<br>')
    
            arr[j+1] = arr[j]
    
            document.write('arr[' + j + ']: ' + arr[j] + '<br>')
            document.write('arr[' + (j+1) + ']: ' + arr[j+1] + '<br>')
        }
        document.write(arr + '<br>')
        document.write('j:' + j + '<br>')
        arr[j+1] = target
        document.write(arr + '<br><br>')
    }
    return arr
}
document.write('sorted array: ' + insertionSort2(arr) + '<br><br>')
