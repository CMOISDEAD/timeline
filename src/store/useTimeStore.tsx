import { create } from "zustand";

interface TimeState {
  timeline: TimelineType | null;
  setTimeline: (timeline: TimelineType) => void;
  selectedEvent: EventType | null;
  setSelectedEvent: (event: EventType) => void;
  dates: string[];
  setDates: (dates: string[]) => void;
}

const useTimeStore = create<TimeState>()((set) => ({
  timeline: null,
  setTimeline: (timeline) => set({ timeline }),
  selectedEvent: null,
  setSelectedEvent: (event) => set({ selectedEvent: event }),
  dates: [],
  setDates: (dates) => set({ dates }),
}));

export default useTimeStore;
