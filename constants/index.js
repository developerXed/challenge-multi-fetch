const MAX_CURRENCY = parseInt(process.argv[2]) || 3

const URLS = [
  'https://1.www.google.com',
  'https://2.www.facebook.com',
  'https://3.www.youtube.com',
  'https://4.www.instagram.com',
  'https://5.www.twitter.com',
  'https://6.www.linkedin.com',
  'https://7.www.amazon.com'
]

module.exports = {
  MAX_CURRENCY,
  URLS
}