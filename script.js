const { URLS, MAX_CURRENCY } = require('./constants')
const { Observable } = require('./reactive')
const { fetchUrlsByMaxCurrency } = require('./index')

function fetchUrlsByMaxCurrencySubscribe(subscriber) {
  return fetchUrlsByMaxCurrency(URLS, MAX_CURRENCY, subscriber)
}

const observable = new Observable(fetchUrlsByMaxCurrencySubscribe)

observable.subscribe(
  res => console.log('subscriber response', res),
  err => console.log('subscriber error', err),
  () => console.log('subscriber completed')
)
