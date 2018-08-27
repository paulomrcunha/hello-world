// Constructor Function
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', {
    // Get is especial keyword for JavaScript
    get: function () {
      return defaultLocation;
    }
  });
}
const circle = new Circle(10);
// circle.
circle.draw();