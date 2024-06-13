export const generateDateRange = (
  startDate: string,
  endDate: string,
  interval: string,
  step = 1,
  dates: string[],
) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const markers = [...dates];

  let current = new Date(start);

  while (current <= end) {
    const target = current
      .getFullYear()
      .toLocaleString("en-US")
      .replace(/[^0-9]/g, "");
    if (!markers.includes(target)) markers.push(target);
    if (interval === "year") {
      current.setFullYear(current.getFullYear() + step);
    } else if (interval === "month") {
      current.setMonth(current.getMonth() + step);
    } else if (interval === "day") {
      current.setDate(current.getDate() + step);
    }
  }

  return markers.sort((a: any, b: any) => a - b);
};

export const retrieveDates = (events: EventType[]) => {
  return events.map((ev) => ev.date);
};
