function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("hi");
    },
  };
}

const circle = createCircle(2);

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("hi");
  };
  console.log(this.radius);
}

const myCircle = new Circle(5);
