//xndir 1 

function removeFirst (arr) {
    let res = []
    for (let i = 1; i < arr.length; i++) {
            res.push(arr[i])
      }
        return res
    }
    

//xndir 2

function flatten (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
       newArr = newArr.concat(flatten(arr[i]));
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  //xndir 3
  
  function sumOfDigits (value) {
    let sum = 0;
 while (value) {
     sum += value % 10;
     value = Math.floor(value / 10);
 }
     sum = String(sum)
     if (sum.length === 1) {
     console.log (Number(sum))
 } else {
         sumOfDigits(sum)
     return sum
     }
 } 


  //xndir 4
  
  const invertKeyValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});