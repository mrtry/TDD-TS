import FizzBuzz from './FizzBuzz'

const fizzBuzz = new FizzBuzz()

describe('正常系', () => {
  it('3の倍数のとき、"Fizz"を返す', () => {
    expect(fizzBuzz.convert(3)).toBe("Fizz")
  })

  it('5の倍数のとき、"Buzz"を返す', () => {
    expect(fizzBuzz.convert(5)).toBe("Buzz")
  })

  it('15の倍数のとき、"FizzBuzz"を返す', () => {
    expect(fizzBuzz.convert(15)).toBe("FizzBuzz")
  })

  it('その他の値のとき、"1"を返す', () => {
    expect(fizzBuzz.convert(1)).toBe("1")
  })
})

describe('異常系', () => {
  it('1 <= 値 <= 100以外の値が入ってきたら、エラーと表示を出す', () => {
    expect(fizzBuzz.convert(0)).toBe("error")
  })
})