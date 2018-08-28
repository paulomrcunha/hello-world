// Creating Stopwatch
// Constructor function call Stopwatch
function Stopwatch() {
  // Private values
  let startTime, endTime, runing, duration = 0;

  // Method
  this.start = function () {

  };

  // Method
  this.stop = function () {

  };

  // Method
  this.reset = function () {

  };

  // Read only property
  Object.defineProperty(this, 'duration', {
    // Get function only retrieves the duration of this function.
    get: function() {
      return duration;
    }
  });
}