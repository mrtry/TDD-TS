import FizzBuzz from './FizzBuzz'

describe('FizzBuzzTest', () => {
  const fizzBuzz = new FizzBuzz()

  it('3の倍数のとき、"Fizz"を返す', () => {
    expect(fizzBuzz.convert(3)).toBe("Fizz")
  })

  it('5の倍数のとき、"Buzz"を返す', () => {
    expect(fizzBuzz.convert(5)).toBe("Buzz")
  })
})