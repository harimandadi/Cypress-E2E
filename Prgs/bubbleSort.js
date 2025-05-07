const bubbleSort = (arr) => {
const n = arr.length;

for(let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap arr[j] and arr[j + 1]
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}
return arr;
};
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));

const SelectionSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        // Swap arr[i] and arr[minIndex]
          }
    return arr;
};
console.log(SelectionSort([64, 34, 25, 12, 22, 11, 90]));


const LinearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target is not found
}
console.log(LinearSearch([64, 34, 25, 12, 22, 11, 90], 22)); // Output: 4

const BinarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid; // Return the index of the target element
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1; // Return -1 if the target is not found
}
console.log(BinarySearch([11, 12, 22, 25, 34, 64, 90], 22)); // Output: 2

const removeDuplicates = (arr) => {
    const uniqueElements = new Set(arr); // Create a Set to store unique elements
    return Array.from(uniqueElements); // Convert the Set back to an array
}

//remove duploicates with filter method
const removeDuplicatesWithFilter = (arr) => {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}
//remove duploicates with out inbuilt method
const removeDuplicatesWithoutInbuilt = (arr) => {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3])); // Output: [1, 2, 3, 4, 5]

const moveZerosToEnd = (arr) => {
    let count = 0; // Count of non-zero elements
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count++] = arr[i]; // Move non-zero elements to the front
        }
    }
    while (count < arr.length) {
        arr[count++] = 0; // Fill remaining positions with zeros
    }
    return arr;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

const countOccurencesWithoiutInbuilt = (arr) => {
    const countMap = {}; // Object to store counts of each element
    for (let i = 0; i < arr.length; i++) {
        if (countMap[arr[i]]) {
            countMap[arr[i]]++;
        } else {
            countMap[arr[i]] = 1;
        }
    }
    return countMap;
}
console.log(countOccurencesWithoiutInbuilt([1, 2, 3, 4, 5, 1, 2, 3])); // Output: { '1': 2, '2': 2, '3': 2, '4': 1, '5': 1 }

const secondLargest = (arr) => {
    if (arr.length < 2) return null; // Not enough elements to find the second largest
    let first = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    return second === -Infinity ? null : second; // Return null if no second largest found
}