var gameOver = {
  preload: function () {
    game.load.image('gameOver', 'assets/gameOver.jpg');
  },

  create: function () {
    this.add.button(-275, -300, 'gameOver', this.startGame, this);

    game.add.text(110, 50, "Game Over! ", {font: "bold 40px Play", fill: "#ffffff", align: "center"});
    game.add.text(45, 100, "Spacebar to Restart!", {font: "bold 40px Arial", fill: "#ffffff", align: "center"});

    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.startGame, this);
  },

  startGame: function () {
    this.state.start('main');
  }


}
