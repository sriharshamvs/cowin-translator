/*window.onload = (event) => {
  loadLocalization("te");
};*/
document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("Go").onclick = function(){
    var lang_code = document.getElementById("language");
    console.log(lang_code.value);
    loadLocalization(lang_code.value);
  }
  console.log("hello");
});


function loadLocalization(lang){
console.log("Localization Loading . . . ");
let URL = browser.extension.getURL("data/json/"+lang+".json");
window.fetch(URL)
.then((res) => res.json())
.then((strings) => {
  translations = JSON.parse(JSON.stringify(strings));
  console.log("Fetch Successful:: " + JSON.stringify(translations));
}).then(() => {
  const elementsInsideBody = [...document.body.getElementsByTagName("*")]
  findAndReplace(elementsInsideBody);
});
}

/**
* This makes an array of everything elements inside the body tag
*/
// document.body.onload = function () {
//   const elementsInsideBody = [...document.body.getElementsByTagName("*")]
//   window.onload = findAndReplace(elementsInsideBody)
// }

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
translations.map((obj) => {
  const regexVariable = new RegExp(obj.word, "g")
  value = value.replace(regexVariable, obj.replacedWord)
  node.nodeValue = value
})
}
