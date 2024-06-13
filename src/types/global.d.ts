type TimelineType = {
  title: string;
  startDate: string;
  endDate: string;
  steps?: number;
  events: EventType[];
};

type EventType = {
  date: string;
  title: string;
  description: string;
  category?: string;
  image?: string;
};
