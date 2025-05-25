chrome.devtools.panels.create(
  "Joseph", // title
  "64.png", // icon
  "panel.html", // content page
  function (panel) {
    console.log("DevTools panel created");
  }
);
