(function () {
  'use strict';

  if (typeof window.PongGame === "undefined") {
    window.PongGame = {};
  }

    var Game = PongGame.Game = function (canvas, width, height) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d');
      this.canvas.width = width;
      this.canvas.height = height;
      this.ball = new PongGame.Ball(this.context);
      this.playerLeft = new PongGame.Player(this.context, "left");
      this.playerRight = new PongGame.Player(this.context, "right");
      this.leftDetector = new PongGame.CollisionDetector(this.playerLeft, this.ball);
      this.rightDetector = new PongGame.CollisionDetector(this.playerRight, this.ball);

    }
    
    Game.prototype.renderBackground = function () {
      this.context.fillStyle = 'white';
      this.context.clearRect(0, 0, canvas.width, canvas.height);
      this.context.fillRect(canvas.width/2, 0, 2, canvas.height);

    }

    Game.prototype.render = function () {
      this.renderBackground();
      this.ball.move();
      this.ball.render();
      this.playerLeft.render();
      this.playerRight.render();
      this.playerLeft.checkPaddlePosition();
      this.playerRight.checkPaddlePosition();
      this.leftDetector.checkCollision();
      this.rightDetector.checkCollision();
      this.leftDetector.score();
      this.rightDetector.score();
      this.renderScores();
    }

    Game.prototype.renderScores = function () {
      this.context.fillStyle = 'white';
      this.context.font = '60px Tahoma';
      this.context.fillText(this.leftDetector.points, this.canvas.width/4 - 10, 70);
      this.context.fillText(this.rightDetector.points, this.canvas.width/4 *3 - 10, 70);
    }

    // Game.prototype.pointScored = function () {
    //   return this.leftDetector.score() || this.rightDetector.score()
    // }

    Game.prototype.play = function () {
      setInterval(this.render.bind(this), 7);
    }
  })();