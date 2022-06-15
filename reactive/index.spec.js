const { Observable, Subscriber } = require('./index')

describe('Observable', () => {
  it('should return an Observable', () => {
    const observable = new Observable(() => {})
    expect(observable).toBeInstanceOf(Observable)
  })

  it('should return an Observable with a subscribe method', () => {
    const observable = new Observable(() => {})
    expect(observable.subscribe).toBeInstanceOf(Function)
  })
})

describe('Subscriber', () => {
  it('should return a Subscriber', () => {
    const subscriber = new Subscriber(() => {}, () => {})
    expect(subscriber).toBeInstanceOf(Subscriber)
  })

  it('should return a Subscriber with a next function', () => {
    const subscriber = new Subscriber(() => {}, () => {})
    expect(subscriber.next).toBeInstanceOf(Function)
  })

  it('should return a Subscriber with a error function', () => {
    const subscriber = new Subscriber(() => {}, () => {})
    expect(subscriber.error).toBeInstanceOf(Function)
  })
})