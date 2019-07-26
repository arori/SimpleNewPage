(function () {
    chrome.storage.sync.get(['color'], function (result) {
        document.body.style.background = result.color.hex;
    });
})();