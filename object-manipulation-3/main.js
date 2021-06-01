console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'Ma Dong-Seok', hand: [] }, { name: 'Neil Gaiman', hand: [] },
  { name: 'Anthony Bourdain', hand: [] }, { name: 'Naoki Yoshida', hand: [] }
];

var cardDeck = [
  { suit: 'clubs', rank: 'Ace' }, { suit: 'clubs', rank: 2 },
  { suit: 'clubs', rank: 3 }, { suit: 'clubs', rank: 4 },
  { suit: 'clubs', rank: 5 }, { suit: 'clubs', rank: 6 },
  { suit: 'clubs', rank: 7 }, { suit: 'clubs', rank: 8 },
  { suit: 'clubs', rank: 9 }, { suit: 'clubs', rank: 10 },
  { suit: 'clubs', rank: 'Jack' }, { suit: 'clubs', rank: 'Queen' },
  { suit: 'clubs', rank: 'King' }, { suit: 'diamonds', rank: 'Ace' },
  { suit: 'diamonds', rank: 2 }, { suit: 'diamonds', rank: 3 },
  { suit: 'diamonds', rank: 4 }, { suit: 'diamonds', rank: 5 },
  { suit: 'diamonds', rank: 6 }, { suit: 'diamonds', rank: 7 },
  { suit: 'diamonds', rank: 8 }, { suit: 'diamonds', rank: 9 },
  { suit: 'diamonds', rank: 10 }, { suit: 'diamonds', rank: 'Jack' },
  { suit: 'diamonds', rank: 'Queen' }, { suit: 'diamonds', rank: 'King' },
  { suit: 'hearts', rank: 'Ace' }, { suit: 'hearts', rank: 2 },
  { suit: 'hearts', rank: 3 }, { suit: 'hearts', rank: 4 },
  { suit: 'hearts', rank: 5 }, { suit: 'hearts', rank: 6 },
  { suit: 'hearts', rank: 7 }, { suit: 'hearts', rank: 8 },
  { suit: 'hearts', rank: 9 }, { suit: 'hearts', rank: 10 },
  { suit: 'hearts', rank: 'Jack' }, { suit: 'hearts', rank: 'Queen' },
  { suit: 'hearts', rank: 'King' }, { suit: 'spades', rank: 'Ace' },
  { suit: 'spades', rank: 2 }, { suit: 'spades', rank: 3 },
  { suit: 'spades', rank: 4 }, { suit: 'spades', rank: 5 },
  { suit: 'spades', rank: 6 }, { suit: 'spades', rank: 7 },
  { suit: 'spades', rank: 8 }, { suit: 'spades', rank: 9 },
  { suit: 'spades', rank: 10 }, { suit: 'spades', rank: 'Jack' },
  { suit: 'spades', rank: 'Queen' }, { suit: 'spades', rank: 'King' }
];

cardDeck = _.shuffle(cardDeck);
console.log('cards', cardDeck);

for (var i = 0; i < 2; i++) {
  players[0].hand.push(cardDeck[i]);
}

for (var a = 2; a < 4; a++) {
  players[1].hand.push(cardDeck[a]);
}

for (var b = 4; b < 6; b++) {
  players[2].hand.push(cardDeck[b]);
}

for (var c = 6; c < 8; c++) {
  players[3].hand.push(cardDeck[c]);
}

var score = 0;

for (var player = 0; player < players.length; player++) {
  for (var card = 0; card < 2; card++) {
    if (players[player].hand[card].rank === 'Jack' || players[player].hand[card].rank === 'Queen' || players[player].hand[card].rank === 'King') {
      score += 10;
    } else if (players[player].hand[card].rank === 'Ace') {
      score += 11;
    } else {
      score += players[player].hand[card].rank;
    }
  }
  players[player].score = score;
  score = 0;
}
console.log('players', players);

var winningScore = 0;
for (var scores = 0; scores < player.length; scores++) {
  if (player[scores].score > winningScore) {
    winningScore = player[scores].score;
  }
}
console.log('winner', winningScore);
