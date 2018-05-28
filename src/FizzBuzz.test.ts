import FizzBuzz from './FizzBuzz'

describe('FizzBuzzTest', () => {
  const fizzBuzz = new FizzBuzz()

  it('3の倍数のとき、"Fizz"を返す', () => {
    expect(fizzBuzz.convert(3)).toBe("Fizz")
  })

  it('5の倍数のとき、"Buzz"を返す', () => {
    expect(fizzBuzz.convert(5)).toBe("Buzz")
  })

  it('15の倍数のとき、"FizzBuzz"を返す', () => {
    expect(fizzBuzz.convert(15)).toBe("FizzBuzz")
  })

  describe('その他のとき', () => {
    it('0の倍数のとき、"1"を返す', () => {
      expect(fizzBuzz.convert(1)).toBe("1")
    })
  })

})