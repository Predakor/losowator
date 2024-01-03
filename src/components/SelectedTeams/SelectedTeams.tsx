import { For } from "solid-js";
import { Player } from "../../types/player";

interface Props {
  players: Player[];
}
function SelectedTeams(props: Props) {
  return (
    <div>
      <div>
        <h2>Team 1</h2>
        <For each={props.players}></For>
      </div>
      <span class="divider">VS</span>
      <div>
        <h2>Team 2</h2>
      </div>
    </div>
  );
}

export default SelectedTeams;
