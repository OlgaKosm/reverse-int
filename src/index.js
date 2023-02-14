module.exports = function reverse (n) {
    let res;
    let positiveNum = Math.abs(n);

    res = Number(String(positiveNum).split('').reverse().join(''));
    return res;
  
}
