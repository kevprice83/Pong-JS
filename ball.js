(function () {
  'use strict';

  if (typeof window.PongGame === "undefined") {
    window.PongGame = {};
  }


  var Ball = window.PongGame.Ball = function(context) {
    this.context = context;
    this.position = [400, 250];
    this.radius = 5;
    this.direction = [-1, -1];
  };

  Ball.prototype.isTop = function() {
    return (this.position[1] - this.radius) <= 0;
  }

  Ball.prototype.isBottom = function() {
    return (this.position[1] + this.radius) > this.context.canvas.height;
  } 

  Ball.prototype.isLeft = function() {
    return (this.position[0] - this.radius) > 0;
  }

  Ball.prototype.isRight = function() {
    return (this.position[0] + this.radius) > this.context.canvas.width;
  }

  Ball.prototype.moreLeft = function(x) {
    return (this.position[0] - this.radius === x);
  }

  Ball.prototype.moreRight = function(x) {
    return (this.position[0] + this.radius === x);
  }

  Ball.prototype.betweenY = function(y1, y2) {
    return (this.position[1] >= y1 && this.position[1] <=y2);
  }

  Ball.prototype.move = function () {
    if (this.isTop() || this.isBottom()) {
      this.direction[1] = -this.direction[1];
    } 
    this.position[0] += this.direction[0];
    this.position[1] += this.direction[1];
  };

  Ball.prototype.changeBallDirection = function() {
    this.direction[0] = -this.direction[0];
  }

  Ball.prototype.render = function () {
    this.context.beginPath();
    this.context.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI);
    this.context.fillStyle = "#fff"
    this.context.fill();
  }
})();