import { OptionsIcon, OptionsIconClosed } from "Icons";
import PlayerOptions from "./PlayerOptions/PlayerOptions";
import TeamSlider from "./TeamSlider/TeamSlider";

interface Props {}

function SideMenuDrawer({}: Props) {
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label for="my-drawer" class="btn-ghost btn drawer-button">
          <OptionsIcon size={24} />
        </label>
      </div>
      <div class="drawer-side">
        <label
          for="my-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="menu min-h-full w-80 bg-base-200 p-4 text-base-content ">
          <label
            for="my-drawer"
            aria-label="close sidebar"
            class="btn-ghost btn drawer-button self-end"
          >
            <OptionsIconClosed size={24} />
          </label>

          <ul class="">
            <li>
              <h2
                class="menu-title tooltip self-start text-xl"
                data-tip="Player to draw from"
              >
                Players
              </h2>
              <PlayerOptions />
            </li>

            <li>
              <h2
                class="menu-title tooltip self-start text-xl"
                data-tip="Amount of teams"
              >
                Teams
              </h2>
              <TeamSlider />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideMenuDrawer;
