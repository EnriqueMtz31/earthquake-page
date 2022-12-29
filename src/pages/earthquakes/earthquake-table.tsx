// import { useRef, useContext } from "react";
import { EarthquakeRow } from "./earthquake-row";
import {
  ApiEarthquakeFeature,
  // Earthquake,
  EarthquakeTableProps,
} from "../../interfaces";
// import { EarthquakeContext } from "../../context";
import { useGetEarthquakesQuery } from "../../services";

function EarthquakeTable({ data }: EarthquakeTableProps) {
  const { isLoading, isSuccess, isError } = useGetEarthquakesQuery();
  // Navigation menu logic not implemented
  // const { handleStyleUpdateOnMouseDown, handleStyleUpdateMouseUp } =
  //   useContext(EarthquakeContext);
  // const chevronBarLeft = useRef(null);
  // const chevronLeft = useRef(null);
  // const chevronRight = useRef(null);
  // const chevronBarRight = useRef(null);

  const earthquakeList = data?.features.map(
    (earthquakeFeature: ApiEarthquakeFeature) => (
      <EarthquakeRow
        key={earthquakeFeature.id}
        earthquakeFeature={earthquakeFeature}
      />
    )
  );

  return (
    <>
      {/* Navigation menu not implemented */}
      {/* <div className="navigation-menu mt-5 d-flex justify-content-end">
        <span
          ref={chevronBarLeft}
          onMouseDown={() => handleStyleUpdateOnMouseDown(chevronBarLeft)}
          onMouseUp={() => handleStyleUpdateMouseUp(chevronBarLeft)}
          className="bi bi-chevron-bar-left"
        ></span>
        <span
          ref={chevronLeft}
          onMouseDown={() => handleStyleUpdateOnMouseDown(chevronLeft)}
          onMouseUp={() => handleStyleUpdateMouseUp(chevronLeft)}
          className="bi bi-chevron-left"
        ></span>
        <span
          ref={chevronRight}
          onMouseDown={() => handleStyleUpdateOnMouseDown(chevronRight)}
          onMouseUp={() => handleStyleUpdateMouseUp(chevronRight)}
          className="bi bi-chevron-right"
        ></span>
        <span
          ref={chevronBarRight}
          onMouseDown={() => handleStyleUpdateOnMouseDown(chevronBarRight)}
          onMouseUp={() => handleStyleUpdateMouseUp(chevronBarRight)}
          className="bi bi-chevron-bar-right"
        ></span>
      </div> */}
      <div className="container">
        <div className="earthquake-container-row row px-2 gx-3 overflow-auto">
          {isError && (
            <div className="col-12 d-flex justify-content-center">
              <p>An error occured. Try again later</p>
            </div>
          )}
          {isLoading && (
            <div className="col-12 d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status"></div>
            </div>
          )}
          {isSuccess &&
            (!data?.features?.length || data?.features?.length == 0) && (
              <div className="col-12">
                <h4>No data available</h4>
              </div>
            )}
          {earthquakeList}
        </div>
      </div>
    </>
  );
}

export { EarthquakeTable };
