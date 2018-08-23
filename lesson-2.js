// Factory Function
function createCircle(radius) {
  return {
    radius,
    drawTwo: function () {
      // Open the browser console
      console.log('draw');
    }
  };
}
const circleTwo = createCircle(1);
circleTwo.draw();


// Constructor Function
function Circle(radius) {
  // console.log('this', this);
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}
const circleThree = new Circle(1);