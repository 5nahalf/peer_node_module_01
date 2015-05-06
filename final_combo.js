var randomNumber = require('./random_number');
var usdGenerator = require('./usd_value');

var endingUSD = function(){
    return usdGenerator(randomNumber(1,100));
};

var accountBalance = function(){
    return "Account balance: \n";
};

module.exports.endingUSD = endingUSD;
module.exports.accountBalance = accountBalance;



