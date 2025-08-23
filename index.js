var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let arr = [];

    while (i >= 0 || j >= 0 || carry === 1) {
        let sum = carry;
        
        if (i >= 0) sum += a.charAt(i) - '0';
        if (j >= 0) sum += b.charAt(j) - '0';
        
        arr.push(sum % 2);
        carry = Math.floor(sum / 2);

        i--;
        j--;
    }
    
    return arr.reverse().join('');
};

console.log(addBinary('11', '11')); // Output: "100"
