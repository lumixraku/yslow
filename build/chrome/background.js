chrome.browserAction.onClicked.addListener(function (tab) {
    if (!tab.url.indexOf('https://chrome.google.com/') ||
        !tab.url.indexOf('chrome://') ||
        !tab.url.indexOf('about:') ||
        !tab.url.indexOf('chrome-extension://')) {
        alert('For security reasons Chrome extensions cannot ' +
            'run content scripts at this page.');

        return;
    }
    chrome.windows.create({
        url: 'yslow.html#' + tab.windowId,
        left: 0,
        top: parseInt(screen.availHeight / 2, 10) || 400,
        width: parseInt(screen.availWidth, 10) || 800,
        height: parseInt(screen.availHeight / 2, 10) || 400,
        type: 'popup'
    });
});
chrome.browserAction.setIcon({
    path: {
        "19": "icon19x19.png",
        "38": "icon19x19@2x.png"
    }
});
