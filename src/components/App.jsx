import { For } from "solid-js";
import _ from "lodash";
import DevtoolsListener, { events, setEvents } from "./DevtoolsListener";

export default () => {
  return (
    <div className="container mx-auto">
      <DevtoolsListener />
      <div className="p-3 m-1 border-dashed border-2">
        <h1 className="text-2xl font-bold text-center my-4">Listening...</h1>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl my-2">event count: {events().length}</h2>
          <button
            className="border-2 bg-gray-600 text-white px-4 py-2 cursor-pointer"
            onClick={() => {
              setEvents([]);
            }}
          >
            Clear
          </button>
        </div>
      </div>
      <For each={events()}>
        {(event, index) => {
          const { event_name, event_data, system_data, ...rest } = event;
          return (
            <table className="mb-8">
              <thead>
                <tr>
                  <th>
                    <button className="cursor-pointer">{event_name}</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {_.map(rest, (value, key) => (
                  <tr>
                    <td className="p-1">{key}</td>
                    <td className="p-1">{value}</td>
                  </tr>
                ))}
                <tr>
                  <td className="align-top p-1">event_data</td>
                  <td className="p-1">
                    <table className="">
                      <tbody className="border-2">
                        {_.map(event_data, (value, key) => (
                          <tr>
                            <td className="p-1">{key}</td>
                            <td className="p-1">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className="align-top p-1">system_data</td>
                  <td className="p-1">
                    <table>
                      <tbody className="border-2">
                        {_.map(system_data, (value, key) => (
                          <tr>
                            <td className="p-1">{key}</td>
                            <td className="p-1">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        }}
      </For>
    </div>
  );
};
