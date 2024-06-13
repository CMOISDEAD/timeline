import useTimeStore from "../store/useTimeStore";
import { generateDateRange } from "../utils/generateDateRange";

type Props = {
  data: TimelineType;
};

export const TimeAxis = ({ data }: Props) => {
  const { startDate, endDate, steps, events } = data;
  const { selectedEvent, setSelectedEvent, dates } = useTimeStore(
    (state) => state,
  );
  const markers = generateDateRange(startDate, endDate, "year", steps, dates);

  const handleSelect = (marker: string) => {
    const found = events.find((ev) => ev.date === marker);
    if (!found) return;
    setSelectedEvent(found);
  };

  return (
    <div className="relative max-w-[100vw] overflow-x-auto overflow-y-hidden px-8 py-1 bg-white h-fit">
      <div className="flex justify-start content-end items-center gap-2">
        {markers.map((marker) => (
          <div
            key={marker}
            className={`min-w-20 px-2 py-1 cursor-pointer text-xs transition-colors text-center ${
              dates.includes(marker) && "bg-gray-500 text-white"
            } ${selectedEvent?.date === marker && "bg-gray-800"}  hover:bg-gray-800 hover:text-white`}
            onClick={() => handleSelect(marker)}
          >
            {`${marker}`}
          </div>
        ))}
      </div>
      <div className="sticky left-0 h-28 text-xs flex flex-col justify-center">
        <ul>
          <li>
            {selectedEvent?.date} - {selectedEvent?.title}
          </li>
        </ul>
      </div>
    </div>
  );
};
