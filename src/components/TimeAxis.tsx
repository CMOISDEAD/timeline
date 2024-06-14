import useTimeStore from "../store/useTimeStore";
import { generateDateRange } from "../utils/generateDateRange";
import { TimeMarker } from "./TimeMarker";

type Props = {
  data: TimelineType;
};

export const TimeAxis = ({ data }: Props) => {
  const { startDate, endDate, steps, events } = data;
  const { selectedEvent, dates } = useTimeStore((state) => state);
  const markers = generateDateRange(startDate, endDate, "year", steps, dates);

  const styles = (marker: string) => {
    if (selectedEvent && selectedEvent.date === marker) {
      return "text-black bg-neutral-300 font-bold";
    } else if (dates.includes(marker)) {
      return "text-black";
    }
    return "text-gray-500";
  };

  return (
    <div className="relative max-w-[100vw] overflow-x-auto bg-white">
      <div className="flex items-center w-full px-2">
        {markers.map((marker, i) => (
          <div
            className="relative min-w-16 h-24 border-x border-dashed boder-neutral-100"
            key={i}
          >
            <div className={`${styles(marker)} text-xs bg-neutral-200`}>
              {marker}
            </div>
            {events
              .filter((ev) => ev.date === marker)
              .map((ev, i) => (
                <TimeMarker event={ev} key={i} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
