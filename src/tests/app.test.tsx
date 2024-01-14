import { TeamsContextProvider } from "@context/TeamsContext/TeamsContext";
import { render } from "@solidjs/testing-library";
import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import App from "../App";

describe("App", () => {
  it("should render the app", (a) => {
    const { getByText } = render(() => (
      <TeamsContextProvider>
        <App />
      </TeamsContextProvider>
    ));
    expect(getByText("draw")).toBeInTheDocument();
  });
  it("has valid store structure"), () => {};
});
