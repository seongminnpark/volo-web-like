// background.js

chrome.runtime.onInstalled.addListener(function() {

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {

        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlMatches: 'https://.*.withvolo.com/trip/*' },
                    })
                ],

                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});
