var browser = browser || chrome
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("Go").onclick = function () {
    var lang_code = document.getElementById("language")
    // console.log(lang_code.value)

    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      browser.tabs.sendMessage(
        tabs[0].id,
        { data: { lang: lang_code.value } },
        function (response) {
          // console.log("success", response)
        }
      )
    })
  }

  document.getElementById("Reset").onclick = function () {
    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      browser.tabs.sendMessage(
        tabs[0].id,
        { data: { lang: "en" } },
        function (response) {
          // console.log("success", response)
        }
      )
    })
  }
})
