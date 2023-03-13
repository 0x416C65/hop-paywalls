chrome.contextMenus.create({
  id: 'open_hop_paywalls',
  title: 'Abrir com Hop Paywalls',
  contexts: ['page', 'link']
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == 'open_hop_paywalls') {
    openHopPaywalls(info.pageUrl || info.linkUrl);
  }
});
