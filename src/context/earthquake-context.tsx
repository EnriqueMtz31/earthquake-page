import { createContext, MutableRefObject } from "react";

interface IEarthquakeContext {
  handleStyleUpdateOnMouseDown: (card: MutableRefObject<any>) => void;
  handleStyleUpdateMouseUp: (card: MutableRefObject<any>) => void;
}

const EarthquakeContext = createContext<IEarthquakeContext>({
  handleStyleUpdateOnMouseDown: () => {},
  handleStyleUpdateMouseUp: () => {},
} as IEarthquakeContext);

function EarthquakeProvider({ children }: any) {
  const handleStyleUpdateOnMouseDown = (card: any) => {
    card.current.classList.add("click");
  };
  const handleStyleUpdateMouseUp = (card: any) => {
    card.current.classList.remove("click");
  };

  return (
    <EarthquakeContext.Provider
      value={{
        handleStyleUpdateOnMouseDown,
        handleStyleUpdateMouseUp,
      }}
    >
      {children}
    </EarthquakeContext.Provider>
  );
}

export { EarthquakeContext, EarthquakeProvider };
