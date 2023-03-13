function openHopPaywalls(url) {
  var hopPaywallsUrl = 'https://12ft.io/' + url;
  chrome.tabs.update({ url: hopPaywallsUrl });
}
