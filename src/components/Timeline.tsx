import { useEffect } from "react";
import useTimeStore from "../store/useTimeStore";
import { TimeAxis } from "./TimeAxis";
import { retrieveDates } from "../utils/generateDateRange";
import { TimeEvent } from "./TimeEvent";

type Props = {
  data: TimelineType;
};

export const Timeline = ({ data }: Props) => {
  const { setSelectedEvent, setDates } = useTimeStore((state) => state);

  useEffect(() => {
    setSelectedEvent(data.events[0]);
    setDates(retrieveDates(data.events));
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full">
      <TimeEvent />
      <TimeAxis data={data} />
    </div>
  );
};
