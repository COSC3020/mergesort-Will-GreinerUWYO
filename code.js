function merge(left,right) {
    let mergedArray = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            mergedArray.push(left[i]);
            i++;
        }
        else {
            mergedArray.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        mergedArray.push(left[i]);
        i++;
    }
    while (j < right.length) {
        mergedArray.push(right[j]);
        j++;
    }
    return mergedArray;
}

function mergesort(array) {
    const arrLength = array.length;
    //base case, only one element in the array
    if (arrLength <= 1) {
        return array;
    }
    for (let i = 1; i < arrLength; i = (2 * i)) {
        for (let j = 0; j < arrLength; j += (2 * i)) {
            // Math.min ensures the midpoint and endpoint never leave the bounds of the function
            let currentMid = Math.min(j + i, arrLength);
            let currentEnd = Math.min(j + (2 * i), arrLength);

            let left = array.slice(j, currentMid);
            let right = array.slice(currentMid, currentEnd);

            let merged = merge(left,right);

            let x = 0;
            while (x < merged.length) {
                array[j + x] = merged[x];
                x++;
            }
        }
    }
    return array;
}
