class DistanceCalculator {
  calculateDistanceBetween (args) {
    this.validateArgs(args)
    const { point1, point2 } = args

    return this.round(this.squareRoot(this.square(point2.x - point1.x) + this.square(point2.y - point1.y)))
  }

  validateArgs (args) {
    if (!args) {
      this.throwInvalidArguments()
    }

    const { point1, point2 } = args

    if (
      (!point1 || !point2) ||
      (!point1.x || !point1.y) ||
      (!point2.x || !point2.y)
    ) {
      this.throwInvalidArguments()
    }

    if (
      typeof point1.x !== 'number' ||
      typeof point1.y !== 'number' ||
      typeof point2.x !== 'number' ||
      typeof point2.y !== 'number' ||
      !isFinite(point1.x) ||
      !isFinite(point1.y) ||
      !isFinite(point2.x) ||
      !isFinite(point2.y)
    ) {
      this.throwInvalidArguments()
    }

  }

  throwInvalidArguments() {
    throw new Error('Invalid Arguments')
  }

  squareRoot (number) {
    return Math.sqrt(number)
  }

  square (number) {
    return Math.pow(number, 2)
  }

  round (number) {
    return +number.toFixed(4)
  }
}

module.exports = {
  DistanceCalculator
}