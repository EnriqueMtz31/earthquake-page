import { screen } from "@testing-library/react";
import { EarthquakeTable } from "..";
import { formatEarthquakeCardTitle, render } from "../../../utils";
import { ApiEarthquake } from "../../../interfaces";

const earthquakes: ApiEarthquake = {
  type: "FeatureCollection",
  metadata: {
    generated: 1673044412000,
    url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",
    title: "USGS All Earthquakes, Past Day",
    status: 200,
    api: "1.10.3",
    count: 238,
  },
  features: [
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
      type: "Feature",
      properties: {
        mag: 1.7,
        place: "36 km NNE of Larsen Bay, Alaska",
        time: 1673043374397,
        updated: 1673043914991,
        tz: null,
        url: "https://earthquake.usgs.gov/earthquakes/eventpage/ak023aaf2u7",
        detail:
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ak023aaf2u7.geojson",
        felt: null,
        cdi: null,
        mmi: null,
        alert: null,
        status: "automatic",
        tsunami: 0,
        sig: 44,
        net: "ak",
        code: "023aaf2u7",
        ids: ",ak023aaf2u7,",
        sources: ",ak,",
        types: ",origin,phase-data,",
        nst: null,
        dmin: null,
        rms: 0.47,
        gap: null,
        magType: "ml",
        type: "earthquake",
        title: "M 1.7 - 36 km NNE of Larsen Bay, Alaska",
      },
      geometry: {
        type: "Point",
        coordinates: [-153.8357, 57.8547, 37.6],
      },
      id: "ak023aaf2u7",
    },
    {
      type: "Feature",
      properties: {
        mag: 0.92,
        place: "7km NW of The Geysers, CA",
        time: 1673043322110,
        updated: 1673043415564,
        tz: null,
        url: "https://earthquake.usgs.gov/earthquakes/eventpage/nc73829441",
        detail:
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc73829441.geojson",
        felt: null,
        cdi: null,
        mmi: null,
        alert: null,
        status: "automatic",
        tsunami: 0,
        sig: 13,
        net: "nc",
        code: "73829441",
        ids: ",nc73829441,",
        sources: ",nc,",
        types: ",nearby-cities,origin,phase-data,",
        nst: 8,
        dmin: 0.0006913,
        rms: 0.02,
        gap: 84,
        magType: "md",
        type: "earthquake",
        title: "M 0.9 - 7km NW of The Geysers, CA",
      },
      geometry: {
        type: "Point",
        coordinates: [-122.8105011, 38.8240013, 0.95],
      },
      id: "nc73829441",
    },
    {
      type: "Feature",
      properties: {
        mag: 1.71,
        place: "7km NW of The Geysers, CA",
        time: 1673043300480,
        updated: 1673043478532,
        tz: null,
        url: "https://earthquake.usgs.gov/earthquakes/eventpage/nc73829436",
        detail:
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc73829436.geojson",
        felt: null,
        cdi: null,
        mmi: null,
        alert: null,
        status: "automatic",
        tsunami: 0,
        sig: 45,
        net: "nc",
        code: "73829436",
        ids: ",nc73829436,",
        sources: ",nc,",
        types: ",focal-mechanism,nearby-cities,origin,phase-data,scitech-link,",
        nst: 34,
        dmin: null,
        rms: 0.03,
        gap: 35,
        magType: "md",
        type: "earthquake",
        title: "M 1.7 - 7km NW of The Geysers, CA",
      },
      geometry: {
        type: "Point",
        coordinates: [-122.8098297, 38.8236656, 0.92],
      },
      id: "nc73829436",
    },
  ],
  bbox: [-179.948, -58.6281, -0.85, 168.9641, 67.3888, 574.355],
};

describe("Earthquake table test", () => {
  beforeEach(() => {
    render(<EarthquakeTable data={earthquakes} />);
  });
  test("should show earthquake table component", () => {
    expect(
      screen.getByText(
        formatEarthquakeCardTitle(earthquakes.features[0].properties.title)
      )
    ).toBeDefined();
  });
});
