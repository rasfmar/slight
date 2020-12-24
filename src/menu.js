const GOOGLE_URL_REGEX = /https:\/\/(www\.)?google\.com\/(?!search)/;

let DARK_MODE = false;
let SUGGESTIONS = false;
let GRID = false;

chrome.storage.sync.get(["DARK_MODE"], function (result) {
  DARK_MODE = result.DARK_MODE;
  document.getElementById("darkmode").checked = DARK_MODE;
});

chrome.storage.sync.get(["SUGGESTIONS"], function (result) {
  SUGGESTIONS = result.SUGGESTIONS;
  document.getElementById("suggestions").checked = SUGGESTIONS;
});

chrome.storage.sync.get(["GRID"], function (result) {
  GRID = result.GRID;
  document.getElementById("grid").checked = GRID;
});

function _toggle(name) {
  if (name === "darkmode") {
    DARK_MODE = document.getElementById(name).checked;
  } else if (name === "suggestions") {
    SUGGESTIONS = document.getElementById(name).checked;
  } else if (name === "grid") {
    GRID = document.getElementById(name).checked;
  }
}

function _set() {
  chrome.storage.sync.set({
    "DARK_MODE": DARK_MODE,
    "SUGGESTIONS": SUGGESTIONS,
    "GRID": GRID
  }, function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (GOOGLE_URL_REGEX.test(tabs[0].url)) {
        chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
      }
    });
  });
}

document.getElementById("darkmode").onchange = () => _toggle("darkmode");
document.getElementById("suggestions").onchange = () => _toggle("suggestions");
document.getElementById("grid").onchange = () => _toggle("grid");
document.getElementById("save").onclick = _set;
