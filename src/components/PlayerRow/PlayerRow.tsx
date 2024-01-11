import { useTeamsContext } from "context/TeamsContext/TeamsContext";
import { For } from "solid-js";

function PlayerRow() {
  const [teams] = useTeamsContext();
  return (
    <div class="flex justify-between gap-2">
      <For each={teams.availablePlayers}>
        {(player) => <div>{player.name}</div>}
      </For>
    </div>
  );
}

export default PlayerRow;
