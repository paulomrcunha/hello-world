// Constructor Function
function Circle(radius) {
  this.radius = radius;

  // Private Properties and Methods
  let defaultLocation = { x: 0, y: 0 };

  let computeOptiumLocation = function(){
    // ...
  }

  this.draw = function () {
    computeOptiumLocation(0.1);
    // defaultLocation
    // this.radius

    console.log('draw');
  }
}
const circle = new Circle(10);
circle.draw();