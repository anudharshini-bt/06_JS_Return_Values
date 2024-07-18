var getPlayerName;
getPlayerName = function (playerName) {
    var prefix = "==== ";
    var suffix = " ====";
    return prefix + playerName + suffix;
};

console.log(getPlayerName("Kiki"));     
console.log(getPlayerName("Mahesha")); 

var getPlayerName;

getPlayerName = function (playerName) {
    var border = "|";
    var prefix = " ";
    return border + "\n" + border + prefix + playerName + "\n" + border;
};

console.log(getPlayerName("Jahver"));