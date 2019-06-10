//Exercise 1

//return the sum of 1 to N.  For example Sum1toN(3) would return the sum of 1+2+3 which is 6.
//sum1toN(255) returns the sum of all numbers from 1 to 255
function Sum1toN(n) {
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
y = Sum1toN(3);
console.log(y);


//return the sum of the first number in the array and the last number in the array
function sumFirstLast(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = arr[0] + arr[arr.length - 1];
    }
    return sum;
}
y = sumFirstLast([1, 2]);
console.log(y);



describe("Sum1toN", function () {
    it("should return 3 when we pass 2 as an argument", function () {
        expect(Sum1toN(2)).toEqual(3);
    });
    it("should return 6 when we pass 3 as an argument", function () {
        expect(Sum1toN(3)).toEqual(6);
    });
    it("should return 10 when we pass 4 as an argument", function () {
        expect(Sum1toN(4)).toEqual(10);
    });
});

describe("sumFirstLast", function () {
    it("should return 3 when we pass [1,2] as an argument", function () {
        expect(sumFirstLast([1, 2])).toEqual(3);
    });
    it("should return 10 when we pass [2,3,8] as an argument", function () {
        expect(sumFirstLast([2, 3, 8])).toEqual(10);
    });
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function () {
        expect(sumFirstLast([-6, 23, 3, -4])).toEqual(-10);
    });
});

//Exercise 2

/*
Exercise 2 - Your turn to write the test first and then the function
Either in the same file or a different file, create a test for a function that returns the
 largest number in the array.  For example, returnLargest([1,3,10]) should return 10.  
 returnLargest([-2,-5,-10]) should return -2.  Once you write the test, run the test (without
     writing the full function to make sure that the tests all fail), then complete the function
      to make sure all the tests pass.
*/

//return the largest number in the array
function returnLargest(arr) {
    var max = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
y = returnLargest([44, 3, 100]);
console.log(y);



describe("returnLargest", function () {
    it("should return 100 when we pass [44,3,100] as an argument", function () {
        expect(returnLargest([44, 3, 100])).toEqual(100);
    });
    it("should return -2 when we pass [-2,-5,-10] as an argument", function () {
        expect(returnLargest([-2, -5, -10])).toEqual(-2);
    });
    it("should return -1.5 when we pass [-1.5,-1.6,-5,-10] as an argument", function () {
        expect(returnLargest([-1.5, -1.6, -5, -10])).toEqual(-1.5);
    });
    it("should return 5.5 when we pass [2.5,4,5.5,5.4] as an argument", function () {
        expect(returnLargest([2.5, 4, 5.5, 5.4])).toEqual(5.5);
    });
});