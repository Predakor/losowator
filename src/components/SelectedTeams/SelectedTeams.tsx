import { useTeamsContext } from "context/TeamsContext/TeamsContext";
import { For, Show } from "solid-js";
import { Player } from "types/player";

function SelectedTeams() {
  const [teams] = useTeamsContext();

  return (
    <>
      <For each={teams.drawedTeams}>
        {({ name, players }, i) => {
          const teamName = name || `team ${players[0]?.name || i()}`;
          const moreTeamsToShow = teams.drawedTeams.length > i() + 1;
          return (
            <div class="flex">
              <Team players={players} teamName={teamName} />
              <Show when={moreTeamsToShow}>
                <span class="divider divider-horizontal">VS</span>
              </Show>
            </div>
          );
        }}
      </For>
    </>
  );
}

interface TeamProps {
  teamName: string;
  players: Player[];
}

function Team(props: TeamProps) {
  return (
    <div>
      <h2 class="text-lg uppercase">{props.teamName}</h2>
      <For each={props.players}>{(player) => <p>{player.name}</p>}</For>
    </div>
  );
}
export default SelectedTeams;
