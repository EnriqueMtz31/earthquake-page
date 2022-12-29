export const formatEarthquakeCardTitle = (title: string): string => {
  let formattedTitle = "";

  if (!title || title?.length == 0) {
    formattedTitle = "Title not found";
  } else if (title?.length >= 17 || title?.length == 16) {
    formattedTitle = `${title.substring(0, 15)}...`;
  } else {
    formattedTitle = `${title}`;
  }

  return formattedTitle;
};
