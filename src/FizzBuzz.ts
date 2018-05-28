export default class FizzBuzz {
  public convert(num: number): string {
    if (num % 15 === 0) {
      return "FizzBuzz"
    } else if (num % 3 === 0) {
      return "Fizz"
    } else if (num % 5 === 0) {
      return "Buzz"
    } else {
      return String(num)
    }
  }
}