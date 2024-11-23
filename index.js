const board = document.getElementById('game-board');

const statusText = document.getElementById('status');

const restartButton = document.getElementById('restart');

const symbols = ['🍎', '🍉', '🍌','🍍', '🥥', '🥭', '🍓', '🍒', '🍹']

let shuffledSymbols  = symbols.sort(()=> Math.random()-0.5);

console.log(symbols)