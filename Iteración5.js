var numero = 0
rollDice = (param) => {
    var numero = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    return numero;
}
console.log(rollDice(5))