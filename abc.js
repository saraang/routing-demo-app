class Operation {
    //min number
    getMin(arr) {
        var min = Math.min.apply(null, arr);
        return min;
    }
    //max number
    getMax(arr) {
        var min = Math.max.apply(null, arr);
        return min;
    }
}
let arr;
arr = [5, 7, 2, 6, 12, 24, 16, 1, 64, 19, 0];
var obj1 = new Operation();
var min = obj1.getMin(arr);
var max = obj1.getMax(arr);
var newArr = new Array(4);
newArr[0] = min;
for (var i = 1; i < newArr.length - 1; i++) {
    newArr[i] = Math.floor(Math.random() * (max - min + 1));
}
newArr[3] = max;
console.log(newArr);
