import useTimeStore from "../store/useTimeStore";
import { TimeControls } from "./TimeControls";

export const TimeEvent = () => {
  const { selectedEvent } = useTimeStore((state) => state);

  if (!selectedEvent) return null;

  return (
    <div className="h-96">
      <div className="flex gap-4 h-full relative">
        {selectedEvent.image && (
          <img
            src={selectedEvent.image}
            alt={`${selectedEvent.title} image ${selectedEvent.date}`}
            className="object-cover w-1/2 max-h-fit"
          />
        )}
        <div className="flex flex-col gap-4 w-1/2 p-4">
          <h2 className="text-2xl font-bold capitalize">
            <p className="text-gray-500 text-xs font-bold">
              {selectedEvent.date}
            </p>
            {selectedEvent.title}
          </h2>
          <div className="text-sm flex flex-col gap-2">
            {selectedEvent.description}
          </div>
        </div>
        <TimeControls />
      </div>
    </div>
  );
};
