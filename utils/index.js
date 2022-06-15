function* makeRangeIterator(start, end, step) {
  for (let i = start; i < end; i += step) {
    yield [i, i + step]
  }
}

function fetchAllUrls(urls, timeout) {
  return Promise.allSettled(urls.map(url => mockFetchGet(url, timeout)))
}

function mockFetchGet(url, timeout = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ responseFrom: url })
    }, timeout)
  })
}

module.exports = {
  makeRangeIterator,
  fetchAllUrls,
  mockFetchGet
}