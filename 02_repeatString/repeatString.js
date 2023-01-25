const repeatString = function(key,iterations) {
    if (iterations < 0){
        return "ERROR";
    }
    let sudo = ''
for (let i = 0; i < iterations; i++) {
    sudo += key;   
}
return sudo;
};

// Do not edit below this line
module.exports = repeatString;
