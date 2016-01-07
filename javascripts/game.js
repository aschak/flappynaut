var game;

game = new Phaser.Game(600, 450, Phaser.AUTO, '');

game.state.add('menu', menu);

game.state.add('game', game)

game.state.start('menu')
