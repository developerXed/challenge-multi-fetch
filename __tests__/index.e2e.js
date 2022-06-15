const { fetchUrlsByMaxCurrency } = require('../index')
const { makeRangeIterator } = require('../utils')
const { URLS, MAX_CURRENCY } = require('../constants')
const { Observable } = require('../reactive')

jest.setTimeout(10000);

const urlsResponse = URLS.map(url => ({ responseFrom: url }))

describe('fetchUrlsByMaxCurrency', () => {
  it('should return an array of responses', async () => {
    const responses = await fetchUrlsByMaxCurrency(URLS, MAX_CURRENCY)
    expect(responses).toEqual(urlsResponse)
  })
})

describe('fetchUrlsByMaxCurrency as Subscribe', () => {
  let observable
  let rangeIterator

  beforeEach(() => {
    function fetchUrlsByMaxCurrencySubscribe(subscriber) {
      return fetchUrlsByMaxCurrency(URLS, MAX_CURRENCY, subscriber)
    }
    observable = new Observable(fetchUrlsByMaxCurrencySubscribe)
  })

  beforeEach(() => {
    rangeIterator = makeRangeIterator(0, URLS.length, MAX_CURRENCY)
  })

  it('should return responses as soon as they are available', (done) => {
    observable.subscribe(
      res => {
        const [start, end] = rangeIterator.next().value
        expect(res).toEqual(urlsResponse.slice(start, end))
      },
      err => {},
      () => done()
    )
  })


  it('should be able to subscribe multiple times', (done) => {
    let subscriptions = 0;

    observable.subscribe(
      res => {},
      err => {},
      () => subscriptions++
    )
    observable.subscribe(
      res => {},
      err => {},
      () => {
        subscriptions++
        expect(subscriptions).toBe(2)
        done()
      }
    )
  })
})