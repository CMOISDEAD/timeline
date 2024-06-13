import useTimeStore from "../store/useTimeStore";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { Button } from "./core/Button";
import { useEffect, useState } from "react";

export const TimeControls = () => {
  const [index, setIndex] = useState(0);
  const { timeline, selectedEvent, setSelectedEvent } = useTimeStore(
    (state) => state,
  );

  if (!timeline) return null;

  useEffect(() => {
    if (!selectedEvent) return;
    const currentIndex = timeline.events.findIndex(
      (ev) => ev.date === selectedEvent.date,
    );
    setIndex(currentIndex);
  }, [selectedEvent]);

  useEffect(() => {
    setSelectedEvent(timeline.events[index]);
  }, [index]);

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", keyHandler);

    return () => window.removeEventListener("keydown", keyHandler);
  });

  const handleNext = () => {
    if (index + 1 >= timeline.events.length) return;
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (index - 1 < 0) return;
    setIndex((prev) => prev - 1);
  };

  return (
    <div className="absolute bottom-5 right-5 flex gap-2">
      <Button color="light" onClick={handlePrev}>
        <RxCaretLeft />
      </Button>
      <Button color="light" onClick={handleNext}>
        <RxCaretRight />
      </Button>
    </div>
  );
};
