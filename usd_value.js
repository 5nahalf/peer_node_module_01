var usdGenerator = function(startingNum){
    var startingNum = startingNum.toString(),
        dollars = startingNum.split('.')[0],
        cents = (startingNum.split('.')[1] || '') + '00';
        dollars = dollars.split('').reverse().join('').replace(/(\d{3}(?!$))/g, '$1,').split('').reverse().join('');
        return '$' + dollars + '.' + cents.slice(0,2);
};

module.exports = usdGenerator;