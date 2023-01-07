import { useSelector } from "react-redux";
import { skipToken } from "@reduxjs/toolkit/query";
import { ReduxState } from "../../interfaces";
import { useGetEarthquakeQuery } from "../../services";
import { formatEarthquakeDate } from "../../utils";

function EarthquakeDetails({ handleCloseModal }: any) {
  const earthquakeID = useSelector((state: ReduxState) => state.earthquakeID);
  const {
    data: earthquake,
    isLoading,
    isSuccess,
    isError,
  } = useGetEarthquakeQuery(
    earthquakeID.id.length > 0 ? earthquakeID.id : skipToken
  );

  const handleCloseBtnOnClick = () => {
    handleCloseModal();
  };

  const earthquakeDetailedInfo = earthquake?.properties;
  return (
    <div className="modal--earthquake-details" onClick={handleCloseModal}>
      <div className="container">
        {isError && (
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <h4>An error occured. Try again later</h4>
            </div>
          </div>
        )}
        {isLoading && (
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div className="spinner-border text-primary" role="status"></div>
            </div>
          </div>
        )}
        {isSuccess && (
          <>
            <div className="row">
              <div className="col">
                <h2>{earthquakeDetailedInfo?.title}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-3 d-flex flex-column">
                <label htmlFor="">Magnitude:</label>
                <label htmlFor="">Place:</label>
                <label htmlFor="">Date Time occurrence:</label>
                <label htmlFor="">Oceanic event:</label>
              </div>
              <div className="col-3 d-flex flex-column">
                <label>{earthquakeDetailedInfo?.mag}</label>
                <label>{earthquakeDetailedInfo?.place}</label>
                <label>
                  {earthquakeDetailedInfo?.time
                    ? formatEarthquakeDate(earthquakeDetailedInfo?.time)
                    : "Not available"}
                </label>
                <label>
                  {!!earthquakeDetailedInfo?.tsunami ? "Yes" : "No"}
                </label>
              </div>
              <div className="col-3 d-flex flex-column">
                <label htmlFor="">Date Time updated:</label>
                <label htmlFor="">Type:</label>
                <label htmlFor="">Latitude:</label>
                <label htmlFor="">Longitude:</label>
                <label htmlFor="">Depth:</label>
              </div>
              <div className="col-3 d-flex flex-column">
                <label>
                  {earthquakeDetailedInfo?.updated
                    ? formatEarthquakeDate(earthquakeDetailedInfo?.updated)
                    : "Not available"}
                </label>
                <label>{earthquakeDetailedInfo?.magType}</label>
                <label>
                  {
                    earthquakeDetailedInfo?.products?.origin[0]?.properties
                      .latitude
                  }
                </label>
                <label>
                  {
                    earthquakeDetailedInfo?.products?.origin[0]?.properties
                      .longitude
                  }
                </label>
                <label>
                  {
                    earthquakeDetailedInfo?.products?.origin[0]?.properties
                      .depth
                  }
                </label>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="d-flex justify-content-end">
        <button onClick={handleCloseBtnOnClick}>Close</button>
      </div>
    </div>
  );
}

export { EarthquakeDetails };
