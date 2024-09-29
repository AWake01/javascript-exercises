const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

const palindromes = function (str) {
    let base = str.toLowerCase().split('').filter((c) => alphanumerical.includes(c)).join('');
    let rev = base.split('').reverse().join('');

    return base === rev;
};

// Do not edit below this line
module.exports = palindromes;
