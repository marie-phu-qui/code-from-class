let invoiceData = require('./data')

// console.log(invoiceData)
//
// invoiceData.Invoices[0].LineItems.map(function(lineItem){
//   return lineItem.Description
// }).map(function(description){
//   console.log(description)
// })
//
// let invoiceLines = getInvoiceLines()
// let invoiceDescriptions = getDescriptions(invoiceLines)
// printList(invoiceDescriptions)

function printList(list) {
  list.map(function(description){
    console.log(description)
  })
}

function getInvoiceLines() {
  return invoiceData.Invoices[0].LineItems
}

function getDescriptions(list){
  return list.map(function(item){
    return item.Description
  })
}

module.exports = {
  getInvoiceLines,
  getDescriptions
}
