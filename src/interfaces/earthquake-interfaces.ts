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

export interface ApiEarthquakeDetailGeometry {
  type: string;
  coordinates: number[];
}

export interface ApiEarthquakeDetailProperties {
  mag: number;
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
  "azimuthal-gap": number;
  "depth-type": string;
  "horizontal-error": number;
  "magnitude-azimuthal-gap": number;
  "magnitude-error": number;
  "magnitude-num-stations-used": number;
  "magnitude-source": string;
  "minimum-distance": number;
  "num-stations-used": number;
  "origin-source": string;
  "pdl-client-version": string;
}

export interface ApiEarthquakeDetailOriginPhaseDataContents {
  "contents.xml": ApiEarthquakeDetailOriginPhaseDataContentsContentsXML;
  "quakeml.xml": ApiEarthquakeDetailOriginPhaseDataQuakeML;
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
  "azimuthal-gap": number;
  "depth-type": string;
  "horizontal-error": number;
  "magnitude-azimuthal-gap": number;
  "magnitude-error": number;
  "magnitude-num-stations-used": number;
  "magnitude-source": string;
  "minimum-distance": number;
  "num-stations-used": number;
  "origin-source": string;
  "pdl-client-version": string;
  title: string;
}

export interface ApiEarthquakeMetadata {
  generated: number;
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
  mag: number | null;
  place: string | null;
  time: number | null;
  updated: number | null;
  tz: number | null;
  url: string | null;
  detail: string | null;
  felt: number | null;
  cdi: number | null;
  mmi: number | null;
  alert: string | null;
  status: string | null;
  tsunami: number | null;
  sig: number | null;
  net: string | null;
  code: string | null;
  ids: string | null;
  sources: string | null;
  types: string | null;
  nst: number | null;
  dmin: number | null;
  rms: number | null;
  gap: number | null;
  magType: string | null;
  type: string | null;
  title: string | null;
}

export interface EarthquakeTableProps {
  data: ApiEarthquake | undefined;
}

export interface EarthquakeRowProps {
  earthquakeFeature: ApiEarthquakeFeature;
  key: React.Key;
}
