import useTimeStore from "../store/useTimeStore";
import { generateDateRange } from "../utils/generateDateRange";
import { Button } from "./core/Button";

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
          <Button
            key={marker}
            color={
              selectedEvent?.date === marker
                ? "primary"
                : dates.includes(marker)
                  ? "secondary"
                  : "light"
            }
            className="min-w-20 text-xs"
            onClick={() => handleSelect(marker)}
          >
            {marker}
          </Button>
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
