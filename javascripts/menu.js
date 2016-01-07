var Menu = {
  preload: function () {
    game.load.image('menu', 'assets/menu.png');
  },

  create: function () {
    this.add.button(0, 0, 'menu', this.startGame, this);
  },

  startGame: function () {
    this.state.start('main')
  }
}

game.state.start('menu')
