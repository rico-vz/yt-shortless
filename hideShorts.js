var version = "1.0.0";
console.log("[YT-Shortless] Version " + version + " loaded");

var richSections = document.querySelectorAll("ytd-rich-section-renderer");
var guideEntries = document.querySelectorAll("ytd-guide-entry-renderer");

richSections.forEach(function (richSection) {
  var title = richSection.querySelector(
    "span#title.style-scope.ytd-rich-shelf-renderer"
  );

  if (title.textContent == "Shorts") {
    richSection.style.display = "none";
  }
});

guideEntries.forEach(function (guideEntry) {
  var title = guideEntry.querySelector("yt-formatted-string");

  if (title.textContent == "Shorts") {
    guideEntry.style.display = "none";
  }
});

console.log("[YT-Shortless] Hid YouTube Shorts");
console.log(
  "[YT-Shortless] If shorts are still showing, please create an issue on GitHub: https://github.com/rico-vz/yt-shortless/issues"
);
console.log("[YT-Shortless] Thanks for using YT-Shortless!");
