class Shape {
  constructor(type) {
    this.type = type;
  }

  getArea() {
    const baseArea = 0;
    return baseArea;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  getArea() {
    const r = this.radius;
    const area = Math.PI * r * r;
    return area;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super('Rectangle');
    this.length = length;
    this.width = width;
  }

  getArea() {
    const area = this.length * this.width;
    return area;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.type = 'Square';
  }
}

module.exports = {
  Shape,
  Circle,
  Rectangle,
  Square,
};
