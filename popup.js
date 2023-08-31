var dest = new Date("sep 20,2021 00:00:00").getTime();
let h = 0, m = 10, s = 00;
const countdownElt = document.getElementById('demo');
setInterval(updateCountdown, 1000);
let bgpage = chrome.extension.getBackgroundPage();
function updateCountdown() {
    hr = bgpage.hour;
    min = bgpage.minutes;
    sec = bgpage.seconds;
    hrpop = bgpage.hourspop;
    minpop = bgpage.minutespop;
    secpop = bgpage.secondspop;
    countdownElt.innerHTML = `${hr}Hr ${min}Min ${sec}Sec`;
    if(`{hr}`==h && `{min}`==m && `{sec}`==s)
    {
        alert("Time is up!!");
    }
}
document.getElementById("Blocksite").onclick = function () {
    chrome.runtime.sendMessage({
        from: "popupblock"
    });
}