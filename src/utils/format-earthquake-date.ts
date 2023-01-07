import { format } from "date-fns";

export const formatEarthquakeDate = (date: number | Date | null) => {
  return format(date ?? 0, "MM/dd/yyyy hh:mm:ss O");
};
