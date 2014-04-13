//v1.34

$(document).ready(function(){
	// Called when the url of a tab changes.
		function checkForValidUrl(tabId, changeInfo, tab) {
			// Check if page is a presentation.
			if (tab.url.indexOf('docs.google.com/presentation') > -1) {
				// ... show the page action.
				chrome.pageAction.show(tabId);
			}
		};


	// Listen for any changes to the URL of any tab.
	chrome.tabs.onUpdated.addListener(checkForValidUrl);

});




