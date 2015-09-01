(function () {
  'use strict';

  if (typeof window.PongGame === "undefined") {
    window.PongGame = {};
  }

  var Paddle = window.PongGame.Paddle = function (context, position) {
    this.context = context;
    this.position = position;
    this.width = 10;
    this.height = 70;
  }

  Paddle.prototype.render = function () {
    this.context.beginPath();
    this.context.rect(this.position[0], this.position[1], this.width, this.height);
    this.context.fillStyle = "white"
    this.context.fill();
  }

  Paddle.prototype.move = function (direction) {
    this.position[1] += direction;
  }

  Paddle.prototype.isTop = function () {
    return (this.position[1] <= 0)
  }

  Paddle.prototype.isBottom = function () {
    return (this.position[1] + this.height >= this.context.canvas.height)
  }

})();