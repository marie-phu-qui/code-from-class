import request from 'superagent'

const apiEndpointBase = '/'
// const apiEndpointBase = 'https://api.chucknorris.io/v1/'


export function getJoke() {
 return request.get(apiEndpointBase + 'jokes/random')
}

export function searchJoke(specialSearch){
  return request.get(apiEndpointBase + 'jokes/search?query=' + specialSearch)
}

// export function getSatellite(satId) {
//   //return request.get(apiEndpointBase + 'satellites/' + satId)
// }

