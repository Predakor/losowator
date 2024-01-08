import { useTeamsContext } from "context/TeamsContext/TeamsContext";
import { For } from "solid-js";

function PlayerRow() {
  const [teams] = useTeamsContext();
  return (
    <div class="flex gap-2 justify-between">
      <For each={teams.availablePlayers}>
        {(player) => <div>{player.name}</div>}
      </For>
    </div>
  );
}

export default PlayerRow;
