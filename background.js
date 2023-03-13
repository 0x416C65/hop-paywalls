chrome.browserAction.onClicked.addListener(function (tab) {
  var currentUrl = tab.url;
  openHopPaywalls(currentUrl);
});
