import useTimeStore from "../store/useTimeStore";

type Props = {
  event: EventType;
};

export const TimeMarker = ({ event }: Props) => {
  const { selectedEvent, setSelectedEvent } = useTimeStore((state) => state);

  const handleSelect = () => setSelectedEvent(event);

  const style =
    selectedEvent?.title == event.title
      ? "bg-neutral-300"
      : "hover:bg-gray-200";

  return (
    <button
      onClick={handleSelect}
      className={`${style} group absolute bottom-0 top-0 left-0 m-auto h-fit z-50 min-w-full p-1 transition-colors`}
    >
      <p className="text-xs text-left text-gray-600 group-hover:text-gray-900 transition-colors line-clamp-1 group-hover:line-clamp-none group-hover:text-nowrap">
        {event.title}
      </p>
    </button>
  );
};
