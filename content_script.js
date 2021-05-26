var browser = browser || chrome;
var originals = [];
var existingLocale = "en";

function loadLocalization(lang){
  console.log("Localization Loading . . . ");
  let URL = browser.runtime.getURL("data/json/"+lang+".json");
  window.fetch(URL)
  .then((res) => res.json())
  .then((strings) => {
    var translations = JSON.parse(JSON.stringify(strings));
    const elementsInsideBody = [...document.body.getElementsByTagName("*")]

    findAndReplace(elementsInsideBody, translations);
    // console.log("Fetch Successful:: " + JSON.stringify(translations2));
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


browser.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("something happening from the extension");
    var data = request.data || {};
    console.log(data);
    if (data.lang == 'en') {
    	location.reload();
    }
    loadLocalization(data.lang);
    sendResponse({data: {message : "success"}, success: true});
});

