import { create } from "zustand";

interface TimeState {
  selectedEvent: EventType | null;
  setSelectedEvent: (event: EventType) => void;
  dates: string[];
  setDates: (dates: string[]) => void;
}

const useTimeStore = create<TimeState>()((set) => ({
  selectedEvent: null,
  setSelectedEvent: (event) => set({ selectedEvent: event }),
  dates: [],
  setDates: (dates) => set({ dates }),
}));

export default useTimeStore;
