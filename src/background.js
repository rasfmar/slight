chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({
    "DARK_MODE": false,
    "SUGGESTIONS": false,
    "GRID": false
  });
});