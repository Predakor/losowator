import { useTeamsContext } from "context/TeamsContext/TeamsContext";
import { For, Show } from "solid-js";
import { Player } from "types/player";

function SelectedTeams() {
  const [teams] = useTeamsContext();

  return (
    <For each={teams.drawedTeams}>
      {({ name, players }, i) => {
        const teamName = name || `team ${players[0]?.name || i() + 1}`;
        const moreTeamsToShow = teams.drawedTeams.length > i() + 1;
        return (
          <>
            <div class="grid grid-flow-col place-items-start justify-evenly">
              <Team players={players} teamName={teamName} />
            </div>
            <Show when={moreTeamsToShow}>
              <span class="divider md:divider-horizontal">VS</span>
            </Show>
          </>
        );
      }}
    </For>
  );
}

interface TeamProps {
  teamName: string;
  players: Player[];
}

function Team(props: TeamProps) {
  return (
    <div class="justify-self-center">
      <h2 class="text-lg uppercase">{props.teamName}</h2>
      <For each={props.players}>{(player) => <p>{player.name}</p>}</For>
    </div>
  );
}
export default SelectedTeams;
