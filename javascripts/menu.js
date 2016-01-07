
var menu = {
  preload: function () {
    game.load.image('menu', 'assets/menu.jpg');
  },

  create: function () {
    this.add.button(-275, -300, 'menu', this.startGame, this);
    game.add.text(100, 50, "Flappynaut", {font: "bold 40px Play", fill: "#ffffff", align: "center"});
    game.add.text(45, 100, "Spacebar to Start!", {font: "bold 40px Play", fill: "#ffffff", align: "center"})

    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.startGame, this);
  },

  startGame: function () {
    this.state.start('main');
  }
}
