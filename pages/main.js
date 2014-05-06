chrome.contextMenus.create({
	"type": "normal",
	"title": "Search in MDN",
	"contexts": ["selection"],
	"onclick": handleClick
});

function handleClick(info, tab) {
	sendToMDN(info.selectionText);
}

var sendToMDN = function(selectionText) {
	selectionText = selectionText.replace(" ", "+");
	var URL = "https://developer.mozilla.org/en-US/search?q=" + selectionText;
	chrome.tabs.create({ url: URL });
};

