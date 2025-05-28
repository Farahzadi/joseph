import React from "react";
import ReactDOM from "react-dom/client";

import "./panel.css"; // Tailwind support (optional)

function decode(event) {
  return JSON.parse(
    webengage.util.compress.decompressFromBase64(
      webengage.util.transit.decode(event)
    )
  );
}

let events = [];
chrome.devtools.network.onRequestFinished.addListener(function (req) {
  if (req.request.url === "https://c.webengage.com/l4.jpg") {
    const { data } = JSON.parse(req.request.postData.text);
    events = _.chain(events).concat(decode(data)).value();
    console.log(events);
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="text-2xl text-blue-500 font-bold text-center mt-10">
      Joseph is listening
    </div>
  </React.StrictMode>
);
