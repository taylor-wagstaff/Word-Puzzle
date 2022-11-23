import request from 'superagent'

export function fetchWords(word) {
  return request
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .set('Accept', 'application/json')
}
