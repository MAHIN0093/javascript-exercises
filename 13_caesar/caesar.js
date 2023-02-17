const caesar = function(str,shift_num) {
    let unicode = [];

    for (let i = 0; i < str.length; i++) {
        unicode.push(str.charCodeAt(i));
        if((str.toLowercase().charCodeAt(i) > 96) && (str.toLowercase().charCodeAt(i) < 65)){
            unicode1 = unicode.map(char => char + shift_num) ;
        }
    }
    let str1 = '';

    for (let i = 0; i < unicode1.length; i++) {
        str1 += String.fromCharCode(unicode1[i]);
}
return str1;
};

// Do not edit below this line
module.exports = caesar;
