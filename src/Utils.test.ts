import Utils from './Utils'

describe('echo', () => {
  const utils = new Utils()
  it('test', () => {
    expect(utils.echo(1)).toBe(1);
  })
})