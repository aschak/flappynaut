var game = new Phaser.Game(450, 500, Phaser.AUTO, 'gameDiv');


var flappynautMain = {

  preload: function () {
    game.stage.backgroundColor = '#rrrrrr';

    game.load.image('supernova', 'assets/supernova.jpg')
    game.load.spritesheet('astronaut', 'assets/astronaut.png', 51 , 72);
    game.load.spritesheet('asteroids', 'assets/asteroids.png', 120 , 119);


  },

  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(-275, -300, 'supernova');

    this.score = 0
    this.scoreText = game.add.text(20, 20, "0", {font: "30px Arial", fill: "#ffffff"})

    this.bird = this.game.add.sprite(100, 245, 'astronaut');
    game.physics.arcade.enable(this.bird);
    this.bird.body.gravity.y = 1000;
    this.bird.animations.add("boost", [0, 1, 2, 3], 10, true);

    this.asteroids = game.add.group();
    this.asteroids.enableBody = true;
    // this.pipes.createMultiple(10, 'asteroids', 1); //Loop?
    // this.pipes.createMultiple(10, 'asteroids', 2);



    for (var i = 1; i < 15; i++) {
      // this.pipes.createMultiple(0, 'asteroids', i);
      var asteroid = this.asteroids.createMultiple(2, 'asteroids', i)
    }


    // for (var i = 0; i < 20; i++) {
    //   var frame = Math.random(16 * Math.random());
    //   this.pipes.create(0, 0, 'asteroids', frame);
    // }

    this.asteroidsTimer = game.time.events.loop(1500, this.addColOfAsteroids, this);

    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);

  },

  update: function () {


    game.physics.arcade.collide(this.bird, this.asteroids);
    game.physics.arcade.collide(this.asteroids, this.asteroids);

    // this.bird.body.velocity.y = 0
    // if (this.spaceKey.isDown) {
    //   this.bird.body.velocity.y = -250;
    // }

    if (this.bird.inWorld == false) {
      this.restart();
    }
  },

  jump: function () {
    this.bird.body.velocity.y = -300;
    this.bird.animations.play("boost"); // WHY NO WORK?
    // this.bird.animations.stop();
    // player.frame = 0;
  },

  restart: function () {
    game.state.start('main');
  },

  addAsteroid: function (x, y, vel) {
    var asteroid = this.asteroids.getFirstDead(); //this.pipes.getRandom()
    asteroid.reset(x, y);
    asteroid.scale.setTo(0.4, 0.4)
    asteroid.body.velocity.x = -vel;

    asteroid.checkWorldBounds = true;
    asteroid.outOfBoundsKill = true;
  },

  addColOfAsteroids: function () {
    var hole = Math.floor(Math.random() * 7);
    var vel = Math.random() * 50 + 150

    for (var i = 0; i < 8; i++) {
      if (i != hole && i != hole + 1) {
        this.addAsteroid(450, i * 60 + 10, vel);
      }
    }

    this.score += 10;
    this.scoreText.text = this.score;

  }
};

game.state.add('main', flappynautMain)
game.state.start('main');
