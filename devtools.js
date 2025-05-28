chrome.devtools.panels.create(
  "Joseph", // title
  "icons/64.png", // icon
  "dist/panel.html", // content page
  function (panel) {
    console.log("DevTools panel created");
  }
);
