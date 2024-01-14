import { TeamsContextProvider } from "@context/TeamsContext/TeamsContext";
import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import PlayerRow from "./PlayerRow";
import { mockedContext } from "tests/mocsk";

describe("Player Row", () => {
  it("should render players", () => {
    const { getByText } = render(() => (
      <TeamsContextProvider value={mockedContext}>
        <PlayerRow />
      </TeamsContextProvider>
    ));
    expect(getByText("user1")).toBeDefined();
    expect(getByText("user2")).toBeDefined();
    expect(getByText("user3")).toBeDefined();
    expect(getByText("user4")).toBeDefined();
  });
});
