const GOOGLE_URL_REGEX = /https:\/\/(www\.)?google\.com\/(?!search)/;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (/*changeInfo.status == "complete" && */GOOGLE_URL_REGEX.test(tab.url)) {
    console.log('1');
    /*
    chrome.tabs.executeScript({
      file: "thirdParty/jquery-3.5.1.min.js"
    }, () => {*/
      /*chrome.tabs.executeScript(tabId, {
        file: "style.js"
      });*/
    // });
  }
});
