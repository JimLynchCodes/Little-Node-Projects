#Binary Search Example

This is a simple binary search of an array implementation for es5 JavaScript in NodeJS. Remember that your array must be sorted. The binarySearch function is recursive. It takes an array and atring to search. It then compares search to the value in the middle of the array (index of length / 2). If they are equal, you're done. If ggreater, call binary Search on that half of the original array. Otherwise, you the other half of the original array. Then compare the middle of that one, etc.


The key thing to realize for binary search is that it has a time complexity of log(n) where a standard linear search is log(n). The larger the array, the more you benefit from using binary search.    
