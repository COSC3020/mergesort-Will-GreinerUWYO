function merge(array, start, leftEnd, rightEnd) {
    while (start < leftEnd && leftEnd < rightEnd) {
        if (array[start] < array[leftEnd]) {
            start++;
        }    
        else {
            let currentMove = array[leftEnd];
            let index = leftEnd;

            while (index > start) {
                array[index] = array[index - 1];
                index--;
            }
            array[start] = currentMove;
            start++;
            leftEnd++;
        }
    }
    return array;
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
            let start = j;
            let leftEnd = Math.min(j + i, arrLength);
            let rightEnd = Math.min(j + (2 * i), arrLength);
            
            merge(array,start,leftEnd,rightEnd);
        }
    }
    return array;
}
