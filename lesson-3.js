// Constructor Function
function Circle(radius) {
  // console.log('this', this);
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}
const circle = new Circle(10);

// Circle Location values
circle.location = { x: 1, y: 10 };
circle.stroke = { z: 20 };

// Enaumerating Properties
for (let key in circle) {
  if (typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

// Other way to enaumerating properties
const keys = Object.keys(circle);
console.log(keys);

