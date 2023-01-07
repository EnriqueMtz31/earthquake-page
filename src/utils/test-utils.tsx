import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { ModalProvider } from "../context";
import { store } from "../store";

const AllTheProviders = ({ children }: { children: React.ReactElement }) => {
  return (
    <Provider store={store}>
      <ModalProvider>{children}</ModalProvider>
    </Provider>
  );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
