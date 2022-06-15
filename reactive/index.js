class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe
  }

  subscribe(next, error, complete) {
    const subscriber = new Subscriber(next, error, complete)
    const promise = this._subscribe(subscriber)
  }
}

class Subscriber {
  constructor(next, error, complete) {
    this._observer = { next, error, complete }
  }

  next(data) {
    this._observer.next(data)
  }

  error(err) {
    this._observer.error?.(err)
  }

  complete() {
    this._observer.complete?.()
  }
}

module.exports = {
  Observable,
  Subscriber
}
