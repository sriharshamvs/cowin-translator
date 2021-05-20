/**
 * Array of Objects
 */
const translations = [
  { word: "How it Works", replacedWord: "అది ఎలా పని చేస్తుంది" },
  { word: "Register Yourself", replacedWord: "నమోదు చేయండి" },
  {
    word: "Register using your Mobile no. or Aadhaar no. or any other Identity docs",
    replacedWord:
      "మీ మొబైల్ నం. లేదా ఆధార్ నం లేదా మరేదైనా ఐడెంటిటీ డాక్స్ ఉపయోగించి నమోదు చేసుకోండి"
  },
  {
    word: "Choose Vaccine Location",
    replacedWord: "వ్యాక్సిన్ స్థానాన్ని ఎంచుకోండి"
  },
  {
    word: "Select your nearby Vaccine Center for vaccination",
    replacedWord: "టీకా కోసం మీ సమీప టీకా కేంద్రాన్ని ఎంచుకోండి"
  },
  {
    word: "Confirm your Slot",
    replacedWord: "మీ స్లాట్‌ను ధృవీకరించండి"
  },
  {
    word: "Book your slot to Get Vaccine",
    replacedWord: "వ్యాక్సిన్ పొందడానికి మీ స్లాట్‌ను బుక్ చేసుకోండి"
  },
  {
    word: "Any Question?",
    replacedWord: "ఏమైనా సందెహలు ఉన్నాయా"
  },
  {
    word: " Please follow our ",
    replacedWord: "దయచేసి మా అనుసరించండి"
  },
  {
    word: "Frequently asked questions (FAQ)",
    replacedWord: "తరచుగా అడిగే ప్రశ్నలు (FAQ)"
  },
  {
    word: "Know how to book your appointment ",
    replacedWord: " మీ అపాయింట్‌మెంట్ ఎలా బుక్ చేసుకోవాలో తెలుసుకోండి "
  },
  {
    word: "Dos and Don'ts ",
    replacedWord: " చేయదగినవి మరియు చేయకూడనివి "
  }
]

/**
 * This makes an array of everything elements inside the body tag
 */
document.body.onload = function () {
  const elementsInsideBody = [...document.body.getElementsByTagName("*")]
  window.onload = findAndReplace(elementsInsideBody)
}

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
