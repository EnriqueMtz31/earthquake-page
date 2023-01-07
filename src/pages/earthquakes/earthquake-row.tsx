import { useRef, useContext } from "react";
import { useDispatch } from "react-redux";
import { EarthquakeContext, ModalContext } from "../../context/";
import { EarthquakeRowProps } from "../../interfaces";
import { formatEarthquakeCardTitle, formatEarthquakeDate } from "../../utils";
import { setSelectedEarthquakeID } from "../../reducers";

function EarthquakeRow({ earthquakeFeature }: EarthquakeRowProps) {
  const dispatch = useDispatch();
  const { properties: earthquakeInfo } = earthquakeFeature;
  const earthquakeCardElement = useRef(null);
  const { handleStyleUpdateMouseUp, handleStyleUpdateOnMouseDown } =
    useContext(EarthquakeContext);
  const { handleOpenModal } = useContext(ModalContext);
  const handleContainerOnClick = () => {
    dispatch(setSelectedEarthquakeID(earthquakeFeature.id));
    handleOpenModal();
  };

  return (
    <div className="col-4 p-1">
      <div
        className="earthquake-card p-3"
        onMouseDown={() => handleStyleUpdateOnMouseDown(earthquakeCardElement)}
        onMouseUp={() => handleStyleUpdateMouseUp(earthquakeCardElement)}
        onClick={handleContainerOnClick}
        ref={earthquakeCardElement}
      >
        <h4>{formatEarthquakeCardTitle(earthquakeInfo?.title)}</h4>
        <p>Magnitude: {earthquakeInfo?.mag ?? "Not available"}</p>
        <p>Place: {earthquakeInfo?.place ?? "Not available"}</p>
        <p>
          {/* Tue, 27 Dec 2022 02:54:59 EST */}
          Date time:{" "}
          {earthquakeInfo?.time
            ? formatEarthquakeDate(earthquakeInfo?.time)
            : "Not available"}
        </p>
        <p className="text-end mt-2">Click for details</p>
      </div>
    </div>
  );
}

export { EarthquakeRow };
