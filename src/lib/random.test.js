import Random from './random.js'
jest.mock('./random.js')

const getInitMock = jest.fn((max) => { return max })
Random.mockImplementation(() => {
  return {
    num: getInitMock
  }
})

test('Random.num', () => {
  expect(new Random().num(100)).toBe(100)
})
