import { For, Show, createSignal } from "solid-js";
import { Player } from "../../types/player";

interface Props {
  players: Player[];
}

function PlayerRow(props: Props) {
  const [players, setPLayers] = createSignal(props.players);
  return (
    <div class="">
      <For each={players()}>
        {(player) => (
          <Show when={!player.team}>
            <div>{player.name}</div>
          </Show>
        )}
      </For>
    </div>
  );
}

export default PlayerRow;
