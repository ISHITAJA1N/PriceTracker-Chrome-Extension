console.log('background script')
chrome.alarms.create({ periodInMinutes: 60 });

chrome.alarms.onAlarm.addListener(() => {
    checkPrices();
});
var thresholPrice = document.getElementById("thresholdPrice").value;
var capturedPrice = document.getElementById("capturedPrice").value;
if (thresholPrice > capturedPrice) {
    chrome.notifications.create({ title: "CapturedPrice lower than Threshold!", message: "Buy it Now!", type: "basic" });
}

