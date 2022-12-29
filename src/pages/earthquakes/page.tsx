import { useContext } from "react";
import { ModalContext } from "../../context/";
import { Modal } from "../../components/";
import { EarthquakeHeader, EarthquakeTable, EarthquakeDetails } from "./";
import { useGetEarthquakesQuery } from "../../services";

function Earthquakes() {
  const { data: earthquakes } = useGetEarthquakesQuery();
  const { openModal, handleCloseModal } = useContext(ModalContext);

  return (
    <section className="page--earthquakes d-flex flex-column">
      <EarthquakeHeader />
      <EarthquakeTable data={earthquakes} />

      {!!openModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <EarthquakeDetails handleCloseModal={handleCloseModal} />
        </Modal>
      )}
    </section>
  );
}

export { Earthquakes };
