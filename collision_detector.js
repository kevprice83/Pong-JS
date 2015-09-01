(function () {
  'use strict';
  if (typeof window.PongGame === "undefined") {
    window.PongGame = {};
  }

  var CollisionDetector = window.PongGame.CollisionDetector = function (player, ball) {
    this.player = player;
    this.ball = ball;
  }

  CollisionDetector.prototype.hitLeft = function() {
    return (this.ball.moreLeft(this.player.paddle.position[0] + this.player.paddle.width) && 
            this.ball.betweenY(this.player.paddle.position[1], this.player.paddle.position[1] + this.player.paddle.height));
  }

  CollisionDetector.prototype.hitRight = function() {
    return (this.ball.moreRight(this.player.paddle.position[0]) && 
            this.ball.betweenY(this.player.paddle.position[1], this.player.paddle.position[1] + this.player.paddle.height));
  }

  CollisionDetector.prototype.checkCollision = function() {
    if (this.player.side == "left" && this.hitLeft()) {
      this.ball.changeBallDirection()
    } else if (this.player.side == "right" && this.hitRight()) {
      this.ball.changeBallDirection()
    }
  };
})();