function HeapSort(array) {
  var n = array.length;
 
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify(array, i, array.length);
  }
//   console.log(array)
  
  
  
//   Move current root to end
  for (let i = n - 1; i > 0; i--) {
     var temp = array[0];
            array[0] = array[i];
            array[i] = temp;
   
    heapify(array, 0,i);

  } 
  console.log(array);
    
}

function heapify(array, index, size) {
  let largest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;
  
  // find max from left child, right child, max
  
  if (left < size && array[left] > array[largest]) {
    largest = left;
  }

  if (right < size && array[right] > array[largest]) {
    largest = right;
  }
  if (largest != index) {
    swap(array, index,largest);
    heapify(array, largest,size);
    
  } else {
//   console.log(largest);
    return;
  }

  return;
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}





var arr = [5, 12, 11, 13, 4, 6, 7];

HeapSort(arr);
//             console.log(arr);
