import { useTeamsContext } from "context/TeamsContext/TeamsContext";
import { Show, createEffect } from "solid-js";

function WheelButtons() {
  const [teams, { draw, reset }] = useTeamsContext();

  const resetButton = (
    <button class="btn btn-primary" onClick={reset}>
      reset
    </button>
  );

  return (
    <div class="grid gap-2 grid-flow-col">
      <Show when={teams.availablePlayers.length > 0} fallback={resetButton}>
        <button class="btn btn-primary" onclick={draw}>
          draw
        </button>
        <button class="btn btn-primary" onClick={draw}>
          draw all
        </button>
      </Show>
    </div>
  );
}

export default WheelButtons;
