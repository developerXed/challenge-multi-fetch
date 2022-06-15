const { makeRangeIterator, fetchAllUrls } = require('./utils')

async function fetchUrlsByMaxCurrency(urls, maxCurrency, subscriber) {
  const rangeIterator = makeRangeIterator(0, urls.length, maxCurrency)
  let responses = []

  for (const [start, end] of rangeIterator) {
    const urlsToFetch = urls.slice(start, end)
    const response = (await fetchAllUrls(urlsToFetch)).map(res => res.value)
    responses = responses.concat(response)
    subscriber?.next(response)
  }

  subscriber?.complete()
  return responses
}

module.exports = { fetchUrlsByMaxCurrency }
