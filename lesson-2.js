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
const circle = createCircle(1);
circle.draw();