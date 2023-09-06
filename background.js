chrome.contextMenus.create({
    id: "DeliveryX",
    title: "DeliveryX",
    contexts: ["selection", "page"]
});
chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "DeliveryX") {
        chrome.scripting.executeScript({target: {tabId: tab.id, allFrames: true}, files: ['content.js']});
    };
});
