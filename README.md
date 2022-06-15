# Challenge

## Directory structure
- `root`:
  - `index.js`: Contains the requested function by the challenge. Functions are meant to return only one value when called. However, optionally we can depedency inject a subscriber to get as soon as possible the fetched urls.
  - `script.js`: Here we inject the subscriber to the index.js function in order to transform it to a subscribe which will be used to create an observable. Then we can subscribe (even multiple times - check `__tests__/index.e2e.js`) and receive the updated responses.
- `constants`: Constants provided by challenge. We can modify `MAX_CONCURRENCY` using script arguments too. 
- `utils`:
  - `makeRangeIterator`: Generator function that we use to split `URLS` by `step=MAX_CONCURRENCY`.
  - `fetchAllUrls`: Promise wrapper used to map individual urls.
  - `mockFetchGet`: Simulates get request using setTimeout which returns `{responseFrom: $url}`.
- `reactive`: Classes that implement `Observable` and `Subscriber` from reactive programming.
- `__tests__`: E2E tests. Each directory has its unit tests. Only `jest` used.

## How to run
First step to install node_modules: `yarn` / `yarn install`

Run available scripts:
- `yarn start [MAX_CONCURRENCY]`: Runs `script.js`. You can pass an integer argument in order to specify `MAX_CONCURRENCY` value. Examples:
  - `yarn start`: `MAX_CONCURRENCY=3` (default)
  - `yarn start 2`: `MAX_CONCURRENCY=2`
- `yarn test`: Runs all tests using jest.
