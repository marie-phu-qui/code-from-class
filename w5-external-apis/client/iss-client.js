import request from 'superagent'

// const apiEndpointBase = 'https://api.wheretheiss.at/v1/'
const apiEndpointBase = '/v1/'

export function getSatellites() {
  return request.get(apiEndpointBase + 'satellites')
}

export function getSatellite(satId) {
  return request.get(apiEndpointBase + 'satellites/' + satId)
}

// https://facebook.com/my_friends
//
// badpeople.com
//
// <script src="https://facebook.com/my_friends"/>
