import { For, Show } from "solid-js";
import { Player } from "types/player";

interface Props {
  players: Player[];
}

function SelectedTeams(props: Props) {
  return (
    <div>
      <div>
        <h2>Team 1</h2>
        <For each={props.players}>
          {(player) => (
            <Show when={player.team === "1"}>
              <p>{player.name}</p>
            </Show>
          )}
        </For>
      </div>
      <span class="divider">VS</span>
      <div>
        <h2>Team 2</h2>
        <For each={props.players}>
          {(player) => (
            <Show when={player.team === "2"}>
              <p>{player.name}</p>
            </Show>
          )}
        </For>
      </div>
    </div>
  );
}

export default SelectedTeams;
