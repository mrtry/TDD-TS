import Utils from './Utils'

test('echo', () => {
  const utils = new Utils()
  expect(utils.echo(1)).toBe(1);
})