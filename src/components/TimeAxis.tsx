import { useEffect } from "react";
import useTimeStore from "../store/useTimeStore";

type Props = {
  data: TimelineType;
};

export const TimeAxis = ({ data }: Props) => {
  const { startDate, endDate, steps, events } = data;
  const { selectedEvent, setSelectedEvent, setDates } = useTimeStore(
    (state) => state,
  );
  const dates = retrieveDates(events);
  const markers = populateTimeLine(startDate, endDate, "year", steps, dates);

  useEffect(() => {
    const [first] = events;
    setSelectedEvent(first);
    setDates(dates);
  }, []);

  const handleSelect = (marker: string) => {
    const found = events.find((ev) => ev.date === marker);
    if (!found) return;
    setSelectedEvent(found);
  };

  return (
    <div className="relative h-full max-w-[100vw] overflow-x-auto overflow-y-hidden px-8 py-1 bg-white">
      <div className="flex justify-start content-end items-center gap-2">
        {markers.map((marker) => (
          <div
            key={marker}
            className={`min-w-20 px-2 py-1 cursor-pointer text-xs transition-colors text-center ${dates.includes(marker) && "bg-gray-500 text-white"
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

const retrieveDates = (events: EventType[]) => {
  return events.map((ev) => ev.date);
};

const populateTimeLine = (
  startDate: string,
  endDate: string,
  interval: string,
  step = 1,
  dates: string[],
) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const markers = [...dates];

  let current = new Date(start);

  while (current <= end) {
    const target = current
      .getFullYear()
      .toLocaleString("en-US")
      .replace(/[^0-9]/g, "");
    if (!dates.includes(target)) markers.push(target);
    if (interval === "year") {
      current.setFullYear(current.getFullYear() + step);
    } else if (interval === "month") {
      current.setMonth(current.getMonth() + step);
    } else if (interval === "day") {
      current.setDate(current.getDate() + step);
    }
  }

  return markers.sort((a: any, b: any) => a - b);
};
