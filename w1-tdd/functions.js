function filterOdds(arr) {
  return arr.filter(function(n) {
    return n % 2 === 1
  })
}

function filterEvens(arr) {
  return arr.filter(function(n) {
    return n % 2 === 0
  })
}

module.exports = {
  filterOdds,
  filterEvens
}
