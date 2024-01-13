import { render } from "@solidjs/testing-library";
import "@testing-library/jest-dom";
import App from "../App";
import { describe, expect, it } from "vitest";
import { TeamsContextProvider } from "@context/TeamsContext/TeamsContext";

describe("App", () => {
  it("should render the app", () => {
    const { getByText } = render(() => (
      <TeamsContextProvider>
        <App />
      </TeamsContextProvider>
    ));
    expect(getByText("draw")).toBeInTheDocument();
  });
});
