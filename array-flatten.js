var array = [1,2,[3,4], [5,6], 7];
// var merged = [].concat.apply([], array);
// var merged = [].concat(array);

var flattened = array.reduce(
  function(a, b) {
    return (a.concat(b));
  },
  []
);

console.log(flattened);
// console.log(merged);
var array = [1,2,[3,4], [5,6], 7];
var merged = [];
for (var i = 0; i < array.length; i++){
  merged = merged.concat(array[i]);
}
console.log(merged);
