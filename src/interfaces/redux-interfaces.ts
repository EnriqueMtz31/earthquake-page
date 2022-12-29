import { ApiEarthquake } from "./earthquake-interfaces";

export interface ReduxState {
  earthquakeID: EarthquakeSliceInitialState;
  earthquakes: ApiEarthquake;
}

export interface EarthquakeSliceInitialState {
  id: string;
}
