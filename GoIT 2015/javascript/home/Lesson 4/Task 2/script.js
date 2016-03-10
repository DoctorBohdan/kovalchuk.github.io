function checkSpam(str) {
    if (/spam/i.test(str) || /sex/i.test(str)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkSpam('get new Sex videos'));
console.log(checkSpam('[SPAM] How to earn fast money?'));
console.log(checkSpam('New PSD template'));