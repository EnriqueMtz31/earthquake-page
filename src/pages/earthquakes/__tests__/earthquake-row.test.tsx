import { EarthquakeRow } from "../";
import { screen } from "@testing-library/react";
import { formatEarthquakeCardTitle, render } from "../../../utils";
import { ApiEarthquakeDetail, ApiEarthquakeFeature } from "../../../interfaces";

const earthquakeFeatures: ApiEarthquakeFeature[] = [
  {
    type: "Feature",
    properties: {
      mag: 1.15,
      place: "16km S of La Quinta, CA",
      time: 1673044247040,
      updated: 1673044392750,
      tz: null,
      url: "https://earthquake.usgs.gov/earthquakes/eventpage/ci40154167",
      detail:
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci40154167.geojson",
      felt: null,
      cdi: null,
      mmi: null,
      alert: null,
      status: "automatic",
      tsunami: 0,
      sig: 20,
      net: "ci",
      code: "40154167",
      ids: ",ci40154167,",
      sources: ",ci,",
      types: ",nearby-cities,origin,phase-data,scitech-link,",
      nst: 15,
      dmin: 0.08346,
      rms: 0.19,
      gap: 126,
      magType: "ml",
      type: "earthquake",
      title: "M 1.2 - 16km S of La Quinta, CA",
    },
    geometry: {
      type: "Point",
      coordinates: [-116.3261642, 33.5161667, 23.3],
    },
    id: "ci40154167",
  },
  {
    type: "earthquake",
    properties: {
      mag: null,
      place: null,
      time: null,
      updated: 4.5,
      tz: 4.5,
      url: "",
      detail: "",
      felt: 4.5,
      cdi: 4.5,
      mmi: 4.5,
      alert: "",
      status: "",
      tsunami: 4.5,
      sig: 4.5,
      net: "",
      code: "",
      ids: "",
      sources: "",
      types: "",
      nst: 4.5,
      dmin: 4.5,
      rms: 4.5,
      gap: 4.5,
      magType: "",
      type: "",
      title: null,
    },
    geometry: {
      type: "geo",
      coordinates: [123.2, 34.2, 123.22],
    },
    id: "",
  },
];

describe("Earthquake table row test", () => {
  beforeEach(() => {
    render(<EarthquakeRow key={1} earthquakeFeature={earthquakeFeatures[0]} />);
  });
  test("should show earthquake row component", () => {
    expect(
      screen.getByText(
        formatEarthquakeCardTitle(earthquakeFeatures[0]?.properties?.title)
      )
    ).toBeDefined();
  });
  test("should not show earthquake details at initial run", () => {
    expect(screen.queryByText(/Date Time updated:/i)).toBeNull();
  });
});

describe("Earthquake table row null or empty handling", () => {
  beforeEach(() => {
    render(<EarthquakeRow key={1} earthquakeFeature={earthquakeFeatures[1]} />);
  });
  test("should show earthquake row component with Not Available label in date", () => {
    expect(screen.getByText("Date time: Not available")).toBeDefined();
  });
  test("should show earthquake row component with Title not found title", () => {
    expect(screen.getByText("Title not found")).toBeDefined();
  });
  test("should show earthquake row component with Not Available label in magnitude", () => {
    expect(screen.getByText("Magnitude: Not available")).toBeDefined();
  });
  test("should show earthquake row component with Not Available label in place", () => {
    expect(screen.getByText("Place: Not available")).toBeDefined();
  });
});
