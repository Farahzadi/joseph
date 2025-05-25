document.getElementById("inspectBtn").addEventListener("click", () => {
  chrome.devtools.inspectedWindow.eval(
    "document.title",
    (result, isException) => {
      if (isException) {
        document.getElementById("output").textContent = "Error";
      } else {
        document.getElementById("output").textContent = "Page title: " + result;
      }
    }
  );
});
