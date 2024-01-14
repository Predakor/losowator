import { TeamsContextProvider } from "@context/TeamsContext/TeamsContext";
import "@solidjs/testing-library";
import { fireEvent, render, screen } from "@solidjs/testing-library";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import SideMenuDrawer from "./SideMenuDrawer";

describe("SideMenuDrawer", () => {
  const { container } = render(() => {
    return (
      <TeamsContextProvider>
        <SideMenuDrawer />
      </TeamsContextProvider>
    );
  });

  const drawerButton = screen.getByRole("checkbox");

  it("should expand when clicked", async () => {
    expect(drawerButton).toBeInTheDocument();

    fireEvent.click(drawerButton);
    expect(container.querySelector(".menu")).toBeVisible();
  });

  it("should close when clicked again", () => {
    fireEvent.click(drawerButton);
    expect(drawerButton).not.toBeChecked;
  });
});
