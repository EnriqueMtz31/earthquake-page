import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Earthquakes } from "./pages";
import { ModalProvider } from "./context/modal-context";
import { EarthquakeProvider } from "./context/earthquake-context";
import { store } from "./store";
import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <EarthquakeProvider>
                  <Earthquakes />
                </EarthquakeProvider>
              }
            />
          </Routes>
        </Router>
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);
