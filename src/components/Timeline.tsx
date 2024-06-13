import useTimeStore from "../store/useTimeStore";
import { TimeAxis } from "./TimeAxis";

type Props = {
  data: TimelineType;
};

export const Timeline = ({ data }: Props) => {
  const { selectedEvent } = useTimeStore((state) => state);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="viewer">
        <div className="flex gap-4">
          <img
            src="https://www.uv.es/recursos/fatwirepub/ccurl/168/937/estudios%20medievales.jpg"
            alt="#"
            className="object-cover w-1/2"
          />
          <div className="flex flex-col gap-4 w-1/2">
            <h2 className="text-2xl font-bold capitalize">
              {selectedEvent?.title}
            </h2>
            <div className="text-sm flex flex-col gap-2">
              {selectedEvent?.description}
            </div>
          </div>
        </div>
      </div>
      <TimeAxis data={data} />
    </div>
  );
};
