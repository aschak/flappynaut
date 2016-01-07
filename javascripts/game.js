
var game = new Phaser.Game(450, 500, Phaser.AUTO, 'gameDiv');

game.state.add('menu', menu);
game.state.add('main', flappynautMain);
game.state.add('gameOver', gameOver);

game.state.start('menu');
