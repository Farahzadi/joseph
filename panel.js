function decode(event) {
  return JSON.parse(
    webengage.util.compress.decompressFromBase64(
      webengage.util.transit.decode(event)
    )
  );
}
document.getElementById("inspectBtn").addEventListener("click", () => {
  chrome.devtools.network.getHAR((e) => {
    const data = e.entries
      .filter((item) => item._resourceType === "ping")
      .map((elem) => elem.request.postData)
      .filter(Boolean)
      .map((elem) => elem.text);

    console.log(data);
    const encodedEvent = data
      .map(JSON.parse)
      .map((elem) => elem.data)
      .map(decode);
    console.log(encodedEvent);
  });
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
