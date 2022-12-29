import React from "react";

export interface Earthquake {
  id: number;
  title: string;
  magnitude: string;
  place: string;
  dateTime: string;
}

export interface ApiEarthquake {
  type: string;
  metadata: ApiEarthquakeMetadata;
  features: ApiEarthquakeFeature[];
  // minimum longitude, minimum latitude,
  // minimum depth, maximum longitude,
  // maximum latitude, maximum depth
  bbox: number[];
}

export interface ApiEarthquakeDetail {
  type: string;
  properties: ApiEarthquakeDetailProperties;
  geometry: ApiEarthquakeDetailGeometry;
  id: string;
}

/**
 "type": "Feature",
    "properties": {
        }
    },
    "geometry": {
        "type": "Point",
        "coordinates": [
            -150.743,
            61.6968,
            57
        ]
    },
    "id": "ak022gl5hsam"
 */

export interface ApiEarthquakeDetailGeometry {
  type: string;
  coordinates: number[];
}

export interface ApiEarthquakeDetailProperties {
  mag: 1.7;
  place: string;
  time: number;
  updated: number;
  tz: number | null;
  url: string;
  felt: number | null;
  cdi: number | null;
  mmi: number | null;
  alert: string | null;
  status: string;
  tsunami: number;
  sig: number;
  net: string;
  code: string;
  ids: string;
  sources: string;
  types: string;
  nst: number | null;
  dmin: number | null;
  rms: number;
  gap: number | null;
  magType: string;
  type: string;
  title: string;
  products: ApiEarthquakeDetailProducts;
}

export interface ApiEarthquakeDetailProducts {
  origin: ApiEarthquakeDetailOrigin[];
  "phase-data": ApiEarthquakeDetailPhaseData[];
}

export interface ApiEarthquakeDetailOrigin {
  indexid: string;
  indexTime: number;
  id: string;
  type: string;
  code: string;
  source: string;
  updateTime: number;
  status: string;
  properties: ApiEarthquakeDetailOriginProperties;
  preferredWeight: number;
  contents: ApiEarthquakeDetailOriginPhaseDataContents;
}

export interface ApiEarthquakeDetailOriginProperties {
  depth: string;
  "evaluation-status": string;
  "event-type": string;
  eventParametersPublicID: string;
  eventsource: string;
  eventsourcecode: string;
  eventtime: string;
  latitude: string;
  longitude: string;
  magnitude: string;
  "magnitude-type": string;
  "num-phases-used": string;
  "quakeml-magnitude-publicid": string;
  "quakeml-origin-publicid": string;
  "quakeml-publicid": string;
  "review-status": string;
  "standard-error": string;
  title: string;
  version: string;
  "vertical-error": string;
}

export interface ApiEarthquakeDetailOriginPhaseDataContents {
  "contents.xml": ApiEarthquakeDetailOriginPhaseDataContentsContentsXML;
  "quake.ml": ApiEarthquakeDetailOriginPhaseDataQuakeML;
}

export interface ApiEarthquakeDetailOriginPhaseDataContentsContentsXML {
  contentType: string;
  lastModified: number;
  length: number;
  url: string;
}

export interface ApiEarthquakeDetailOriginPhaseDataQuakeML {
  contentType: string;
  lastModified: number;
  length: number;
  url: string;
}

export interface ApiEarthquakeDetailPhaseData {
  indexid: string;
  indexTime: number;
  id: string;
  type: string;
  code: string;
  source: string;
  updateTime: number;
  status: string;
  properties: ApiEarthquakeDetailPhaseDataProperties;
  preferredWeight: 157;
  contents: ApiEarthquakeDetailOriginPhaseDataContents;
}

export interface ApiEarthquakeDetailPhaseDataProperties {
  depth: string;
  "evaluation-status": string;
  "event-type": string;
  eventParametersPublicID: string;
  eventsource: string;
  eventsourcecode: string;
  eventtime: string;
  latitude: string;
  longitude: string;
  magnitude: string;
  "magnitude-type": string;
  "num-phases-used": string;
  "quakeml-magnitude-publicid": string;
  "quakeml-origin-publicid": string;
  "quakeml-publicid": string;
  "review-status": string;
  "standard-error": string;
  version: string;
  "vertical-error": string;
}

export interface ApiEarthquakeMetadata {
  generated: bigint;
  url: string;
  title: string;
  api: string;
  count: number;
  status: number;
}

export interface ApiEarthquakeFeature {
  type: string;
  properties: ApiEarthquakeFeatureProperties;
  geometry: {
    type: string;
    // longitude, latitude, depth
    coordinates: number[];
  };
  id: string;
}

export interface ApiEarthquakeFeatureProperties {
  mag: number;
  place: string;
  time: number;
  updated: number;
  tz: number;
  url: string;
  detail: string;
  felt: number;
  cdi: number;
  mmi: number;
  alert: string;
  status: string;
  tsunami: number;
  sig: number;
  net: string;
  code: string;
  ids: string;
  sources: string;
  types: string;
  nst: number;
  dmin: number;
  rms: number;
  gap: number;
  magType: string;
  type: string;
  title: string;
}

export interface EarthquakeTableProps {
  data: ApiEarthquake | undefined;
}

export interface EarthquakeRowProps {
  earthquakeFeature: ApiEarthquakeFeature;
  key: React.Key;
}
