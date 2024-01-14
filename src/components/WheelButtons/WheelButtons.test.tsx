import { TeamsContextProvider } from "@context/TeamsContext/TeamsContext";
import { fireEvent, render, screen } from "@solidjs/testing-library";
import "@testing-library/jest-dom";
import { mockedContext } from "tests/mocsk";
import { describe, expect, it } from "vitest";
import WheelButtons from "./WheelButtons";

describe("Wheel Buttons", () => {
  it("should render draw draw buttons when players to draw", async () => {
    const { getByText } = render(() => (
      <TeamsContextProvider value={mockedContext}>
        <WheelButtons />
      </TeamsContextProvider>
    ));

    expect(getByText("draw")).toBeDefined();
    expect(getByText("draw all")).toBeDefined();
  });

  it("should show reset button when all players are drawn", async () => {
    const { getByText } = render(() => (
      <TeamsContextProvider value={mockedContext}>
        <WheelButtons />
      </TeamsContextProvider>
    ));

    const drawButton = getByText("draw");

    for (let i = 0; i < mockedContext.players.length; i++) {
      fireEvent.click(drawButton);
      await Promise.resolve();
    }

    const resetButton = screen.getByRole("button");
    expect(resetButton).toBeInTheDocument();
    expect(screen.queryByText("draw")).not.toBeInTheDocument();
    expect(screen.queryByText("draw all")).not.toBeInTheDocument();
  });
});
