import { format } from "date-fns";

export const formatEarthquakeDate = (date: number | Date) => {
  return format(date, "MM/dd/yyyy hh:mm:ss O");
};
