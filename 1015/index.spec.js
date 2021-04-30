const {  DistanceCalculator } = require('./index')

describe("tdd-1015 Distance Between Two Points", ()=> {
  test('DistanceCalculator should exists', ()=> {
    expect(DistanceCalculator).toBeTruthy()
    const distanceCalculator = new DistanceCalculator()
    expect(distanceCalculator).toBeTruthy()
    expect(distanceCalculator).toBeInstanceOf(DistanceCalculator)
  })

  test('DistanceCalculator should have method calculateDistanceBetween', () => {
    expect(DistanceCalculator.prototype.calculateDistanceBetween).toBeTruthy()
  })

  test('DistanceCalculator.calculateDistanceBetween should validate required input arguments [1]', () => {
    const distanceCalculator = new DistanceCalculator()
    let err
    try {
      distanceCalculator.calculateDistanceBetween()
    } catch(e){
      err = e
    }

    expect(err).toBeDefined()
    expect(err).toBeInstanceOf(Error)
    expect(err.message).toEqual('Invalid Arguments')
  })

  test('DistanceCalculator.calculateDistanceBetween should validate required input arguments [2]', () => {
    const distanceCalculator = new DistanceCalculator()
    let err
    try {
      distanceCalculator.calculateDistanceBetween('test')
    } catch(e){
      err = e
    }

    expect(err).toBeDefined()
    expect(err).toBeInstanceOf(Error)
    expect(err.message).toEqual('Invalid Arguments')
  })

  test('DistanceCalculator.calculateDistanceBetween should validate required input arguments [3]', () => {
    const distanceCalculator = new DistanceCalculator()
    let err
    try {
      distanceCalculator.calculateDistanceBetween({
        point1: {}
      })
    } catch(e){
      err = e
    }

    expect(err).toBeDefined()
    expect(err).toBeInstanceOf(Error)
    expect(err.message).toEqual('Invalid Arguments')
  })

  test('DistanceCalculator.calculateDistanceBetween should validate required input arguments [4]', () => {
    const distanceCalculator = new DistanceCalculator()
    let err
    try {
      distanceCalculator.calculateDistanceBetween({
        point2: {}
      })
    } catch(e){
      err = e
    }

    expect(err).toBeDefined()
    expect(err).toBeInstanceOf(Error)
    expect(err.message).toEqual('Invalid Arguments')
  })

  test('DistanceCalculator.calculateDistanceBetween should validate required input arguments [5]', () => {
    const distanceCalculator = new DistanceCalculator()
    let err
    try {
      distanceCalculator.calculateDistanceBetween({
        point1: {},
        point2: {}
      })
    } catch(e){
      err = e
    }

    expect(err).toBeDefined()
    expect(err).toBeInstanceOf(Error)
    expect(err.message).toEqual('Invalid Arguments')
  })

  test('DistanceCalculator.calculateDistanceBetween should validate required input arguments [6]', () => {
    const distanceCalculator = new DistanceCalculator()
    let err
    try {
      distanceCalculator.calculateDistanceBetween({
        point1: {
          x: '1.5',
          y: new Date()
        },
        point2: {
          x: Infinity,
          y: /.*/
        }
      })
    } catch(e){
      err = e
    }

    expect(err).toBeDefined()
    expect(err).toBeInstanceOf(Error)
    expect(err.message).toEqual('Invalid Arguments')
  })

  test('DistanceCalculator.calculateDistanceBetween should validate required input arguments [7]', () => {
    const distanceCalculator = new DistanceCalculator()
    let err
    try {
      distanceCalculator.calculateDistanceBetween({
        point1: {
          x: 1.5,
          y: 1.5
        },
        point2: {
          x: Infinity,
          y: 1.5
        }
      })
    } catch(e){
      err = e
    }

    expect(err).toBeDefined()
    expect(err).toBeInstanceOf(Error)
    expect(err.message).toEqual('Invalid Arguments')
  })

  test('DistanceCalculator should calculate the distance correctly [1]', () => {
    const distanceCalculator = new DistanceCalculator()
    const result = distanceCalculator.calculateDistanceBetween({
      point1: {
        x: 1.0,
        y: 7.0
      },
      point2: {
        x: 5.0,
        y: 9.0
      }
    })

    expect(result).toEqual(4.4721)
  })

  test('DistanceCalculator should calculate the distance correctly [2]', () => {
    const distanceCalculator = new DistanceCalculator()

    const result = distanceCalculator.calculateDistanceBetween({
      point1: {
        x: -2.5,
        y: 0.4
      },
      point2: {
        x: 12.1,
        y: 7.3
      }
    })

    expect(result).toEqual(16.1484)
  })

  test('DistanceCalculator should calculate the distance correctly [2]', () => {
    const distanceCalculator = new DistanceCalculator()


    const result = distanceCalculator.calculateDistanceBetween({
      point1: {
        x: 2.5,
        y: -0.4
      },
      point2: {
        x: -12.2,
        y: 7.0
      }
    })

    expect(result).toEqual(16.4575)
  })

})