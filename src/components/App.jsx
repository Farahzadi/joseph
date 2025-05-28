import { createSignal, For } from "solid-js";
import DevtoolsListener, { events } from "./DevtoolsListener";

// function decode(event) {
//   return JSON.parse(
//     webengage.util.compress.decompressFromBase64(
//       webengage.util.transit.decode(event)
//     )
//   );
// }

// let events = [];
// chrome.devtools.network.onRequestFinished.addListener(function (req) {
//   if (req.request.url === "https://c.webengage.com/l4.jpg") {
//     const { data } = JSON.parse(req.request.postData.text);
//     events = _.chain(events).concat(decode(data)).value();
//     console.log(events);
//   }
// });

export default () => {
  return (
    <div className="container mx-auto">
      <DevtoolsListener />
      <h1 className="text-2xl text-pink-300 font-bold text-center mt-10">
        Joseph is listening...
      </h1>
      <For each={events()}>
        {(event, index) => (
          <li>
            Event {index() + 1}: {JSON.stringify(event)}
          </li>
        )}
      </For>
    </div>
  );
};
