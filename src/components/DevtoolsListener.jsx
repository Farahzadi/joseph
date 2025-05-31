import { onMount, onCleanup, createSignal } from "solid-js";
import _ from "lodash";

export const [events, setEvents] = createSignal([]);

function decode(event) {
  return JSON.parse(
    webengage.util.compress.decompressFromBase64(
      webengage.util.transit.decode(event)
    )
  );
}

export default function DevtoolsListener() {
  onMount(() => {
    function handleRequest(req) {
      if (req.request.url === "https://c.webengage.com/l4.jpg") {
        const { data } = JSON.parse(req.request.postData.text);
        const event = decode(data);
        setEvents((prev) => _.concat(prev, event));
      }
    }

    chrome.devtools.network.onRequestFinished.addListener(handleRequest);

    onCleanup(() => {
      chrome.devtools.network.onRequestFinished.removeListener(handleRequest);
    });
  });

  return null;
}
