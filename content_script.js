/*window.onload = (event) => {
  loadLocalization("te");
};*/

let translations

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("Go").onclick = function () {
    var lang_code = document.getElementById("language")
    console.log(lang_code.value)
    loadLocalization(lang_code.value)
  }
})

function loadLocalization(lang) {
  function translate(translations) {
    window.location.reload()
    const elementsInsideBody = [...document.body.getElementsByTagName("*")]
    findAndReplace(elementsInsideBody)
    /**
     * A function that loops through every single item
     * @param {*} elementsInsideBody
     */
    //
    function findAndReplace(elementsInsideBody) {
      elementsInsideBody.forEach((element) => {
        element.childNodes.forEach((child) => {
          if (child.nodeType === 3) {
            replaceText(child)
          }
        })
      })
    }

    /**
     * Regex Function to replace the node
     * @param {*} node
     */
    function replaceText(node) {
      let value = node.nodeValue
      console.log("translates: ", translations)
      translations.map((obj) => {
        const regexVariable = new RegExp(obj.word, "g")
        value = value.replace(regexVariable, obj.replacedWord)
        node.nodeValue = value
      })
    }
  }
  let URL = browser.extension.getURL("data/json/" + lang + ".json")
  window
    .fetch(URL)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .then((translations) => translate(translations))
}
