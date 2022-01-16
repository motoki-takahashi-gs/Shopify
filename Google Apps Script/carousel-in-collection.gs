function makeCode() {
  const activeSheet = SpreadsheetApp.getActiveSheet();
  const selection = activeSheet.getSelection();

  function getSelectedRange() {
    const selectedRange = selection.getActiveRange().getA1Notation()
    return selectedRange;
  }

  function getURLs() {
    const range = activeSheet.getRange("Sale!" + getSelectedRange());
    const urls = range.getValues();
    return urls;
  }

  function numberWithCommas(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  // the next cell (1 column right) of the first selected cell
  function getNextCell() {
    const nextCell = selection.getCurrentCell().offset(0,1).getA1Notation()
    return nextCell
  }

  function setCodeInNextCell(str) {
    const cell = activeSheet.getRange("Sale!" + getNextCell())
    cell.setValue(str)
  }

  const urls = getURLs()

  const urlArray = []
  const imageArray = []
  const titleArray = []
  const normalPriceArray = []
  const salesPriceArray = []

  for(let i = 0; i < urls.length; i++) {
    const url = urls[i][0]
    const jsonUrl = url.includes('?') ? url.split('?')[0] + '.json' : url + '.json'
    const response = UrlFetchApp.fetch(jsonUrl,{
      muteHttpExceptions: true
    })
    if (response.getResponseCode() == 404) {
      continue;
    }
    const responseText = response.getContentText('UTF-8')
    const responseObj = JSON.parse(responseText)
    const product = responseObj.product
    const variants = product.variants

    let normalPrice = ''
    let salesPrice = ''

    for (let j = 0; j < variants.length; j++) {
      if (variants[j].compare_at_price) {
        normalPrice = numberWithCommas(variants[j].compare_at_price)
        salesPrice = numberWithCommas(variants[j].price)
        break
      } else {
        normalPrice = numberWithCommas(variants[j].price)
      }
    }

    urlArray.push("'" + url + "'")
    imageArray.push("'" + product.images[0].src + "'")
    titleArray.push("'" + product.title + "'")
    normalPriceArray.push("'" + normalPrice + "'")
    salesPriceArray.push("'" + salesPrice + "'")
  }

  let code = "var urls = [\n";
  code += urlArray.join(",\n");
  code += "\n];\n\n"
  code += "var images = [\n";
  code += imageArray.join(",\n");
  code += "\n];\n\n"
  code += "var titles = [\n";
  code += titleArray.join(",\n");
  code += "\n];\n\n"
  code += "var normalPrices = [\n";
  code += normalPriceArray.join(",\n");
  code += "\n];\n\n"
  code += "var salesPrices = [\n";
  code += salesPriceArray.join(",\n");
  code += "\n];"

  setCodeInNextCell(code)

  // Logger.log(urlArray)
  // Logger.log(imageArray)
  // Logger.log(titleArray)
  // Logger.log(normalPriceArray)
  // Logger.log(salesPriceArray)
}