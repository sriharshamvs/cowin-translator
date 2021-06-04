var browser = browser || chrome
var originals = []
var existingLocale = "en"

function loadLocalization(lang) {
  let URL = browser.runtime.getURL(`data/${lang}/${lang}.json`)
  console.log("URL: ", URL)
  window
    .fetch(URL)
    .then((res) => res.json())
    .then((strings) => {
      var translations = JSON.parse(JSON.stringify(strings))
      const elementsInsideBody = [...document.body.getElementsByTagName("*")]
      findAndReplace(elementsInsideBody, translations)
    })
}

/**
 * A function that loops through every single item
 * @param {*} elementsInsideBody
 */
//
function findAndReplace(elementsInsideBody, translations) {
  elementsInsideBody.forEach((element) => {
    element.childNodes.forEach((child) => {
      if (child.nodeType === 3) {
        replaceText(child, translations)
      }
    })
  })
}

/**
 * Regex Function to replace the node
 * @param {*} node
 */
function replaceText(node, translations) {
  let value = node.nodeValue
  translations.map((obj) => {
    const regexVariable = new RegExp(obj.word, "g")
    value = value.replace(regexVariable, obj.replacedWord)

    node.nodeValue = value
  })
}
/*window.onload = (event) => {
  loadLocalization("te");
};*/

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var data = request.data || {}
  if (data.lang == "en") {
    location.reload()
  }
  loadLocalization(data.lang)
  sendResponse({ data: { message: "success" }, success: true })
})
