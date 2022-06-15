const { makeRangeIterator, fetchAllUrls } = require('./index')

describe('makeRangeIterator', () => {
  it('should return an iterator with the correct values', () => {
    const iterator = makeRangeIterator(0, 10, 2)
    const expected = [
      [0, 2],
      [2, 4],
      [4, 6],
      [6, 8],
      [8, 10]
    ]
    expect(Array.from(iterator)).toEqual(expected)
  })

  it('should return an iterator with the correct values when start is not 0', () => {
    const iterator = makeRangeIterator(5, 10, 2)
    const expected = [
      [5, 7],
      [7, 9],
      [9, 11]
    ]
    expect(Array.from(iterator)).toEqual(expected)
  })

  it('should return an iterator with the correct values when step is 3', () => {
    const iterator = makeRangeIterator(0, 5, 3)
    const expected = [
      [0, 3],
      [3, 6]
    ]
    expect(Array.from(iterator)).toEqual(expected)
  })
})

describe('fetchAllUrls', () => {
  it('should return an array of responses', async () => {
    const urls = ['https://www.google.com', 'https://www.facebook.com']
    const urlsResponse = urls.map(url => ({
      status: 'fulfilled',
      value: { responseFrom: url }
    }))

    const responses = await fetchAllUrls(urls, 1)
    expect(responses).toEqual(urlsResponse)
  })
})